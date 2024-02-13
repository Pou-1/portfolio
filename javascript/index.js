/* --------------------------------------- NAVBAR --------------------------------------- */
var homeLink = document.querySelector('.NavBar > ul > li:nth-child(2) a > hr');
homeLink.style.width = '100%';
/* --------------------------------------- END OF NAVBAR --------------------------------------- */

/* --------------------------------------- CARROUSSEL --------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slides = document.querySelector('.slides');
  let currentIndex = 0;
  var lastIndex = document.querySelectorAll('.Works').length - 1;

  prevBtn.style.display = "none"

  function displayButton(){
      if(currentIndex == 0){
          prevBtn.style.display = "none"
      }else{
          prevBtn.style.display = "flex"
      }
      if(currentIndex == lastIndex){
          nextBtn.style.display = "none"
      }else{
          nextBtn.style.display = "flex"
      }
  }

  let scrollButtonDisable = false;

  prevBtn.addEventListener('click', function () {
    if (!scrollButtonDisable) {
      slides.style.left = getPercenntage(100);
      currentIndex--;
      displayButton();
      disableScrollButton();
    }
  });
  
  nextBtn.addEventListener('click', function () {
    if (!scrollButtonDisable) {
      slides.style.left = getPercenntage(-100);
      currentIndex++;
      displayButton();
      disableScrollButton();
    }
  });
  
  function disableScrollButton() {
    scrollButtonDisable = true;
    setTimeout(function () {
      scrollButtonDisable = false;
    }, 1000);
  }

  function getPercenntage(add){
      var computedStyle = window.getComputedStyle(slides);
      var leftValue = computedStyle.left;
      var leftInPixels = parseFloat(leftValue);
      var parentWidth = slides.parentElement.offsetWidth;
      var leftInPercentage = (((leftInPixels / parentWidth) * 100) + add) + '%';
      return leftInPercentage;
  }

  /*slides.addEventListener('wheel', function(event) {
      if (event.deltaY > 0 && currentIndex < lastIndex) {
        currentIndex++;
      } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      }
      var left = currentIndex * -100;
      slides.style.left = `${left}%`;
      displayButton()
  });*/

  function detectScroll() {
    let isScrolling = false;

    function handleScroll() {
      if (!isScrolling) {
        if (event.deltaY > 0 && currentIndex < lastIndex) {
          currentIndex++;
        } else if (event.deltaY < 0 && currentIndex > 0) {
          currentIndex--;
        }
        var left = currentIndex * -100;
        slides.style.left = `${left}%`;
        displayButton()
        isScrolling = true;
        setTimeout(function() {
          isScrolling = false;
        }, 1000);
      }
    }
    slides.addEventListener('wheel', handleScroll);
  }
  detectScroll();
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

  function scrollToSlide(index, event) {
    if (!event.target.closest('#Carou')) {
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
  }

  slider.addEventListener('transitionend', function() {
    if (isTransitioning) {
      isTransitioning = false;
      slider.style.transition = '';
    }
  });

  /*document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0 && currentSlide < 2) {
      currentSlide++;
    } else if (event.deltaY < 0 && currentSlide > 0) {
      currentSlide--;
    }
    scrollToSlide(currentSlide, event);
  });*/  

  function detectScroll() {
    let isScrolling = false;
    function handleScroll() {
      if (!isScrolling) {
        if (event.deltaY > 0 && currentSlide < 2) {
          currentSlide++;
        } else if (event.deltaY < 0 && currentSlide > 0) {
          currentSlide--;
        }
        scrollToSlide(currentSlide, event);
        isScrolling = true;
        setTimeout(function() {
          isScrolling = false;
        }, 1000);
      }
    }
    document.addEventListener('wheel', handleScroll);
  }
  detectScroll();
  
  /* --------------------------------------- SCROLLBAR --------------------------------------- */
  const links = document.querySelectorAll(".ScrollBar > .PageListDiv > p");

  links.forEach(link => {
      link.addEventListener('mouseenter', function () {
        link.style.visibility = "visible";
        link.style.opacity = "1";
        link.querySelector("span").style.visibility = "visible"
        link.style.transition = "opacity 0.5s ease-in-out";
      });

      link.addEventListener('click', function () {
        scrollToSlide(link.querySelector("span").innerText - 1, event);
      });

      link.addEventListener('mouseleave', function () {
        link.style.transition = "opacity 0.5s ease-in-out";
        link.style.visibility = "";
        link.style.opacity = "";
        link.querySelector("span").style.visibility = ""
      });
    });
  /* --------------------------------------- END OF SCROLLBAR --------------------------------------- */

});

/* --------------------------------------- END OF SCROLL --------------------------------------- */

