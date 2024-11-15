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
// Function to handle active filter button styling
document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.filter-buttons .active')?.classList.remove('active');
        this.classList.add('active');
    });
});
