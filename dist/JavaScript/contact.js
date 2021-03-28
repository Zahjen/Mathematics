const main = document.querySelector('main');
const nav = document.querySelector('nav');

main.style.minHeight = `calc(100vh - ${nav.offsetHeight}px)`;