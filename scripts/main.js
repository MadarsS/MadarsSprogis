document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        document.body.appendChild(lightbox);

        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightbox.appendChild(lightboxImg);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
// Function to open the lightbox with the selected image
function openLightbox(imageSrc) {
    // Create the lightbox overlay
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';

    // Create the image element for the lightbox
    const lightboxImage = document.createElement('img');
    lightboxImage.src = imageSrc;
    lightboxImage.className = 'lightbox-image';

    // Append image to the overlay
    lightboxOverlay.appendChild(lightboxImage);

    // Close lightbox on overlay click
    lightboxOverlay.onclick = function() {
        document.body.removeChild(lightboxOverlay);
    };

    // Append the overlay to the body
    document.body.appendChild(lightboxOverlay);
}
