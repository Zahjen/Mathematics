const mediaQueriesDesktop = window.matchMedia('(min-width: 901px)');
const container = document.querySelector('.container');
const card = document.querySelectorAll('.card');

let nbrOfCard = card.length;
var siblings = [];

function mouseEnter(evt) {
    for (var i = 0; i < nbrOfCard ; i++) {
        if (card[i] !== evt.target) {
            siblings.push(card[i]);
        }
    }

    for (var j = 0; j < siblings.length; j++) {
        if (siblings[j] !== evt.target) {
            siblings[j].style.opacity = `0.6`;
        }
    }

    evt.target.style.transform = `scale(1.1)`;
}

function mouseLeave(evt) {
    for (var j = 0; j < siblings.length; j++) {
        siblings[j].style.opacity = ``;
    }

    evt.target.style.transform = ``;
}

function blurEffect() {
    card.forEach(e => {
        e.addEventListener('mouseenter', mouseEnter);
        e.addEventListener('mouseleave', mouseLeave);
    });
}

if (mediaQueriesDesktop.matches) {
    blurEffect();
}