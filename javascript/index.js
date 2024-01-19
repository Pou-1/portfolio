/* --------------------------------------- CARROUSSEL --------------------------------------- */

var indexCourant = 0;
var elementsCarousel = document.querySelectorAll('.Works');
var precedentButton = document.getElementById('precedent');
var suivantButton = document.getElementById('suivant');

function afficherElement(index) {
    elementsCarousel.forEach(function (element, i) {
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
/* --------------------------------------- END OF CARROUSSEL --------------------------------------- */

/* --------------------------------------- SCROLL --------------------------------------- */
let compteur = 0;
let isScrolling = false;

function scrollToTitle(element) {
    const titleElement = document.getElementById("Index" + element);

    if (titleElement) {
        titleElement.scrollIntoView({ behavior: 'smooth' });
        console.log("Scroll to : " + element);
    }
}

function incrementerCompteur() {
    if (!isScrolling) {
        isScrolling = true;
        compteur++;
        scrollToTitle(compteur);
        setTimeout(function () {
            isScrolling = false;
        }, 1000);
    }
}

//window.addEventListener('scroll', incrementerCompteur);


let isScrollingTop = false;
let isScrollingBottom = false;

function detectScrollDirection() {
  let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

  function handleScroll() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      isScrollingTop = false;
      isScrollingBottom = true;
      console.log('bas');
      compteur++;
    } else if (scrollTop < lastScrollTop) {
      isScrollingTop = true;
      isScrollingBottom = false;
      console.log('haut');
      compteur = compteur - 2;
    }
    scrollToTitle(compteur);

    lastScrollTop = scrollTop;

    isScrollingTop = false;
    isScrollingBottom = false;

    setTimeout(function () {
        requestAnimationFrame(handleScroll);
    }, 1000);

  }

  requestAnimationFrame(handleScroll);
}

detectScrollDirection();




/* --------------------------------------- END OF SCROLL --------------------------------------- */
