const loaderWrapper = document.querySelector('.loaderWrapper');

function loading() {
    loaderWrapper.style.display = 'none';
}

window.addEventListener('load', loading);