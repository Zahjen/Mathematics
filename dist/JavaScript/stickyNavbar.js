const body = document.querySelector('body');
const nav = document.querySelector('nav');

body.style.paddingTop = `${nav.offsetHeight}px`;

function scroll() {
    nav.classList.toggle('sticky', window.scrollY > 0);
}

window.addEventListener('scroll', scroll);