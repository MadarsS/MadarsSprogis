const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const MAX_WIDTH = 3840;  // 4K width
const MAX_HEIGHT = 2160; // 4K height
const INPUT_FOLDER = './old/images/graphicdesign';
const OUTPUT_FOLDER = './old/images/graphicdesign/resized';

async function resizeImages() {
    try {
        // Create output directory if it doesn't exist
        await fs.mkdir(OUTPUT_FOLDER, { recursive: true });

        // Read all files from input directory
        const files = await fs.readdir(INPUT_FOLDER);

        // Filter for image files (you can add more extensions if needed)
        const imageFiles = files.filter(file => 
            /\.(jpg|jpeg|png|gif|bmp)$/i.test(file)
        );

        for (const file of imageFiles) {
            const inputPath = path.join(INPUT_FOLDER, file);
            const outputPath = path.join(
                OUTPUT_FOLDER, 
                `${path.parse(file).name}.webp`
            );

            // Get image metadata
            const metadata = await sharp(inputPath).metadata();

            // Calculate new dimensions while maintaining aspect ratio
            let width = metadata.width;
            let height = metadata.height;

            if (width > MAX_WIDTH || height > MAX_HEIGHT) {
                const aspectRatio = width / height;
                if (width > height) {
                    width = Math.min(width, MAX_WIDTH);
                    height = Math.round(width / aspectRatio);
                } else {
                    height = Math.min(height, MAX_HEIGHT);
                    width = Math.round(height * aspectRatio);
                }
            }

            // Resize image and convert to WebP
            await sharp(inputPath)
                .resize(width, height, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`Processed: ${file} -> ${path.basename(outputPath)}`);
        }

        console.log('All images have been processed!');

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

resizeImages(); 