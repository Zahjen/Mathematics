const revealContent = document.querySelectorAll('.revealContent');
const totalRevealContent = revealContent.length;
const revealBtn = document.querySelectorAll('.displayPart');
const totalRevealBtn = revealBtn.length;
const downArrow = document.querySelectorAll('.down');

for (var j = 0; j < totalRevealContent; j++) {
    revealContent[j].style.display = `none`;
}

function showHideFunctioon(evt) {
    for (var j = 0; j < totalRevealContent; j++) {
        if (evt.target.id === `bouton${j+1}`) {
            if (revealContent[j].style.display === 'none') {
                revealContent[j].style.display = 'block';
                downArrow[j].style.transform = `rotateZ(180deg)`;
            }
            else {
                revealContent[j].style.display = 'none';
                downArrow[j].style.transform = `rotateZ(0deg)`;
            }
        }   
    }
}

for (var i = 0; i < totalRevealBtn; i++) {
    revealBtn[i].addEventListener('click', showHideFunctioon);
}