const toogleBtn = document.querySelector('.bar_toogleBtn');
const menu = document.querySelector('.bar_menu');
const icons = document.querySelector('.bar_icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})