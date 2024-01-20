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
    document.body.style.overflow = 'hidden';
    titleElement.scrollIntoView({ behavior: 'smooth'});
    if(titleElement.id == "Index1"){
        document.querySelectorAll('.NavBar > ul > li > a, .SubMenu > li > a, .SubSection > li > a').forEach(function (element) {
            element.style.color = 'var(--black)';
        });
    }else{
        document.querySelectorAll('.NavBar > ul > li > a, .SubMenu > li > a, .SubSection > li > a').forEach(function (element) {
            element.style.color = 'var(--white)';
        });
    }

    setTimeout(function () {
      document.body.style.overflow = '';
    }, 1000);
    
  }
}

function incrementerCompteur() {
  let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
  
  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      if (!isScrolling) {
        isScrolling = true;
        compteur++;
        scrollToTitle(compteur);
        setTimeout(function () {
          isScrolling = false;
        }, 1000);
      }
    } else if (scrollTop < lastScrollTop) {
      if (!isScrolling) {
        isScrolling = true;
        compteur = Math.max(0, compteur - 1);
        scrollToTitle(compteur);
        setTimeout(function () {
          isScrolling = false;
        }, 1000);
      }
    }

    lastScrollTop = scrollTop;
  });
}

incrementerCompteur();

/* --------------------------------------- END OF SCROLL --------------------------------------- */
