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
document.addEventListener('DOMContentLoaded', function() {
  function changeActualPage(newPageNumber) {
    const validPageNumbers = [1, 2, 3];
  
    if (validPageNumbers.includes(newPageNumber)) {
      const pages = document.querySelectorAll('.ScrollBar > .PageListDiv > p');
      pages.forEach(page => page.classList.remove('actualPage'));
      pages[newPageNumber - 1].classList.add('actualPage');
    } else {
      console.error('pas numéro entre 1 et 3 de page');
    }
  }
  
  const slider = document.getElementById('slider');
  let currentSlide = 0;
  const navLinks = document.querySelectorAll('.NavBar > ul > li > a');
  let isTransitioning = false;

  function scrollToSlide(index) {
    const offset = -index * 100;
    slider.style.transform = `translateY(${offset}vh)`;

    changeActualPage(index+1);

    isTransitioning = true;
    setTimeout(function() {
      if (isTransitioning) {
        const color = (currentSlide === 1) ? 'var(--black)' : 'var(--white)';
        navLinks.forEach(function(link) {
          link.style.color = color;
        });
      }
    }, 500);
  }

  slider.addEventListener('transitionend', function() {
    if (isTransitioning) {
      isTransitioning = false;
      slider.style.transition = '';
    }
  });

  document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0 && currentSlide < 2) {
      currentSlide++;
    } else if (event.deltaY < 0 && currentSlide > 0) {
      currentSlide--;
    }

    scrollToSlide(currentSlide);
  });

  let touchStartY = 0;

  document.addEventListener('touchstart', function(event) {
    touchStartY = event.touches[0].clientY;
  });

  document.addEventListener('touchend', function(event) {
    const touchEndY = event.changedTouches[0].clientY;

    if (touchEndY < touchStartY && currentSlide < 2) {
      currentSlide++;
    } else if (touchEndY > touchStartY && currentSlide > 0) {
      currentSlide--;
    }

    scrollToSlide(currentSlide);
  });

  /* --------------------------------------- ScrollBar --------------------------------------- */
  const links = document.querySelectorAll(".ScrollBar > .PageListDiv > p");

  links.forEach(link => {
      link.addEventListener('mouseenter', function () {
        link.style.visibility = "visible";
        link.style.opacity = "1";
        link.querySelector("span").style.visibility = "visible"
        console.log(link.querySelector("span").innerText - 1);
        link.style.transition = "opacity 0.5s ease-in-out";
      });

      link.addEventListener('click', function () {
        scrollToSlide(link.querySelector("span").innerText - 1);
      });

      link.addEventListener('mouseleave', function () {
        link.style.transition = "opacity 0.5s ease-in-out";
        link.style.visibility = "";
        link.style.opacity = "";
        link.querySelector("span").style.visibility = ""
      });
    });
  /* --------------------------------------- END OF ScrollBar --------------------------------------- */

});

/* --------------------------------------- END OF SCROLL --------------------------------------- */

