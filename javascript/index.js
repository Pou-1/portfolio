var indexCourant = 0;
var elementsCarousel = document.querySelectorAll('.Works');
var precedentButton = document.getElementById('precedent');
var suivantButton = document.getElementById('suivant');

function afficherElement(index) {
  elementsCarousel.forEach(function(element, i) {
    element.style.display = i === index ? 'flex' : 'none';
  });
}

function suivant() {
  indexCourant = (indexCourant + 1) % elementsCarousel.length;
  afficherElement(indexCourant);
}

function precedent() {
  indexCourant = (indexCourant - 1 + elementsCarousel.length) % elementsCarousel.length;
  afficherElement(indexCourant);
}

afficherElement(indexCourant);

suivantButton.addEventListener('click', suivant);
precedentButton.addEventListener('click', precedent);