const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const list = document.getElementById('list');

menuIcon.addEventListener("click", () => {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    list.style.display = 'block';
});

closeIcon.addEventListener("click", () => {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    list.style.display = 'none';
});





const zoomableImages = document.querySelectorAll('.zoomable');
const overlay = document.querySelector('.overlay');
const zoomedImage = document.querySelector('.zoomed-image');
const closeBtn = document.querySelector('.close-btn');

zoomableImages.forEach((image) => {
    image.addEventListener('click', () => {
        const zoomedImageSrc = image.getAttribute('data-zoom');
        zoomedImage.setAttribute('src', zoomedImageSrc);
        overlay.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});