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
    // Désactiver le défilement pendant le scrollIntoView
    document.body.style.overflow = 'hidden';

    titleElement.scrollIntoView({ behavior: 'smooth' });

    // Réactiver le défilement après une courte période (par exemple, 1000 millisecondes)
    setTimeout(function () {
      document.body.style.overflow = '';
    }, 1000);
    
    console.log("Scroll to : " + element);
  }
}

function incrementerCompteur() {
  let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
  
  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll down
      if (!isScrolling) {
        isScrolling = true;
        compteur++;
        scrollToTitle(compteur);
        setTimeout(function () {
          isScrolling = false;
        }, 1000);
      }
    } else if (scrollTop < lastScrollTop) {
      // Scroll up
      if (!isScrolling) {
        isScrolling = true;
        compteur = Math.max(0, compteur - 1); // Décompter, mais pas en dessous de zéro
        scrollToTitle(compteur);
        setTimeout(function () {
          isScrolling = false;
        }, 1000);
      }
    }

    lastScrollTop = scrollTop;
  });
}

// Utiliser la fonction pour définir en continu la variable en fonction de la direction du défilement
incrementerCompteur();



//window.addEventListener('scroll', incrementerCompteur);




/* --------------------------------------- END OF SCROLL --------------------------------------- */
