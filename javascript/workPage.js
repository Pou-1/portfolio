document.addEventListener('DOMContentLoaded', function () {
    const elementsToFadeInOut = document.querySelectorAll('.main > *, .ColumnShare img');
    const windowHeight = window.innerHeight;

    function fadeInOutElements() {
        elementsToFadeInOut.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;

            if (elementTop < windowHeight && elementBottom >= 0) {
                element.style.opacity = '1';
            } else {
                element.style.opacity = '0';
            }
        });
    }

    fadeInOutElements();

    window.addEventListener('scroll', fadeInOutElements);
});

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
      document.querySelectorAll('.Works')[currentIndex].children[1].classList.remove('ActualCaroussel');
      currentIndex--;
      document.querySelectorAll('.Works')[currentIndex].children[1].classList.add('ActualCaroussel');
      displayButton();
      disableScrollButton();
    }
  });
  
  nextBtn.addEventListener('click', function () {
    if (!scrollButtonDisable) {
      slides.style.left = getPercenntage(-100);
      document.querySelectorAll('.Works')[currentIndex].children[1].classList.remove('ActualCaroussel');
      currentIndex++;
      document.querySelectorAll('.Works')[currentIndex].children[1].classList.add('ActualCaroussel');
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
      console.log(leftInPercentage)
      return leftInPercentage;
  }

  function detectScroll() {
    let isScrolling = false;

    function handleScroll() {
      if (!isScrolling) {
        document.querySelectorAll('.Works')[currentIndex].children[1].classList.remove('ActualCaroussel');
        if (event.deltaY > 0 && currentIndex < lastIndex) {
          currentIndex++;
        } else if (event.deltaY < 0 && currentIndex > 0) {
          currentIndex--;
        }
        document.querySelectorAll('.Works')[currentIndex].children[1].classList.add('ActualCaroussel');
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
