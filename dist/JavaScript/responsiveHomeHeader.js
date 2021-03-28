const header = document.querySelector('header');
const nav = document.querySelector('nav');
const imgMobile = document.querySelector('.imageMobile img');

let navHeight = nav.offsetHeight;
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

if (windowWidth > 950) {
    if ((windowWidth * 7 / 10) < windowHeight) {
        header.style.height = `${windowWidth * 7 / 10 - navHeight}px`;
    }

    else {
        header.style.height = `${window.innerHeight - 1.1 * navHeight}px`;
    }
}

else if (551 < windowWidth && windowWidth <= 950) {
    if ((windowWidth * 2 / 3) < windowHeight) {
        header.style.height = `${windowWidth * 2 / 3 - nav.offsetHeight}px`;
    }

    else {
        header.style.height = `${window.innerHeight - 1.1 * navHeight}px`;
    }
}

else if (window.innerWidth < 350) {
    imgMobile.style.width = '70vw';
}