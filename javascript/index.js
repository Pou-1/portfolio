/* --------------------------------------- NAVBAR --------------------------------------- */
var homeLink = document.querySelector('.NavBar > ul > li:nth-child(2) a > hr');
homeLink.style.width = '100%';
/* --------------------------------------- END OF NAVBAR --------------------------------------- */


/* --------------------------------------- CARROUSSEL --------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  const carrouselContainer = document.querySelector('.carousel-container');
  const carrouselItemWidth = document.querySelector('.Works').offsetWidth + 20; // Ajouter la marge pour obtenir la largeur complète de chaque élément

  // Ajouter les éléments nécessaires pour le carrousel infini
  carrouselContainer.innerHTML += carrouselContainer.innerHTML;

  const precedentButton = document.getElementById('precedent');
  const suivantButton = document.getElementById('suivant');

  precedentButton.addEventListener('click', function () {
      scrollCarrousel(-carrouselItemWidth);
  });

  suivantButton.addEventListener('click', function () {
      scrollCarrousel(carrouselItemWidth);
  });

  function scrollCarrousel(scrollAmount) {
      carrouselContainer.style.transition = 'transform 0.5s ease';
      carrouselContainer.style.transform = `translateX(${-scrollAmount}px)`;

      setTimeout(() => {
          if (scrollAmount > 0) {
              carrouselContainer.appendChild(carrouselContainer.firstElementChild.cloneNode(true));
              carrouselContainer.firstElementChild.remove();
          } else if (scrollAmount < 0) {
              carrouselContainer.insertBefore(carrouselContainer.lastElementChild.cloneNode(true), carrouselContainer.firstElementChild);
              carrouselContainer.lastElementChild.remove();
          }

          carrouselContainer.style.transition = 'none';
          carrouselContainer.style.transform = 'translateX(0)';
      }, 500);
  }
});

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
      let color;
      if (index != 1) {
          color = 'var(--white)';
      } else {
          color = 'var(--black)';
      }
      navLinks.forEach(function(link) {
        link.style.color = color;
    });
    }, 200);
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

