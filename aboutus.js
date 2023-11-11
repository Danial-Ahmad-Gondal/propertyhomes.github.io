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