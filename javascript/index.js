/* --------------------------------------- SLIDE 1 START ANIMATION  --------------------------------------- */
function slide1StartAnimation() {
  const NavBar = document.getElementById('NavBar');
  NavBar.style.opacity = 0;

  const ScrollBar = document.getElementById('ScrollBar');
  ScrollBar.style.opacity = 0;

  const IndexSlide1H1 = document.querySelector('.Presentation > div > div > h2');
  var cmpt = animateTextOfElement(IndexSlide1H1, 0);

  const IndexSlide1RedText = document.querySelector('.Presentation > div > div > div > a');
  animateTextOfElement(IndexSlide1RedText, cmpt);

  setTimeout(() => {
    const IndexSlide1SubText = document.querySelector('div.Index_Slide1 > div.Index_Slide1-TextDiv > p.Index_Slide1-SubText');
    IndexSlide1SubText.style.animation = 'fadeInUp 1.5s normal forwards';

    setTimeout(() => {
      const IndexSlide1Button = document.querySelector('div.Index_Slide1 > div.Index_Slide1-TextDiv > div > button.Index_Slide1-CvLinkButton');
      IndexSlide1Button.style.animation = 'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';

      setTimeout(() => {
        const IndexSlide1Image = document.querySelector('div.Index_Slide1 > div.Index_Slide1-ImageDiv');
        IndexSlide1Image.style.animation = 'slide-in-right-rotating 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';

        setTimeout(() => {
          NavBar.style.animation = 'slide-in-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';

          setTimeout(() => {
            ScrollBar.style.animation = 'slide-in-right 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
          }, (cmpt * 20));
        }, (cmpt * 20));
      }, (cmpt * 40));
    }, (cmpt * 60));
  }, (cmpt * 70));
}
/* --------------------------------------- END OF SLIDE 1 START ANIMATION  --------------------------------------- */

/* --------------------------------------- CARROUSSEL --------------------------------------- */
function carrousel() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slides = document.querySelector('.slides');
  let currentIndex = 0;
  var lastIndex = document.querySelectorAll('.Works').length - 1;

  prevBtn.style.display = "none"

  function displayButton() {
    if (currentIndex == 0) {
      prevBtn.style.display = "none"
    } else {
      prevBtn.style.display = "flex"
    }
    if (currentIndex == lastIndex) {
      nextBtn.style.display = "none"
    } else {
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
  detectScroll();

  function disableScrollButton() {
    scrollButtonDisable = true;
    setTimeout(function () {
      scrollButtonDisable = false;
    }, 1000);
  }

  function getPercenntage(add) {
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
        setTimeout(function () {
          isScrolling = false;
        }, 1000);
      }
    }
    slides.addEventListener('wheel', handleScroll);
  }
}
/* --------------------------------------- END OF CARROUSSEL --------------------------------------- */

/* --------------------------------------- SCROLL --------------------------------------- */
function scroll() {
  const slider = document.getElementById('slider');
  let currentSlide = 0;
  const navLinks = document.querySelectorAll('.NavBar > ul > li > a');
  let isTransitioning = false;

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

  function scrollToSlide(index, event) {
    if (!event.target.closest('#Carou')) {
      const offset = -index * 100;
      slider.style.transform = `translateY(${offset}vh)`;

      changeActualPage(index + 1);

      isTransitioning = true;
      setTimeout(function () {
        let color;
        if (index != 1) {
          color = 'var(--white)';
        } else {
          color = 'var(--black)';
        }
        navLinks.forEach(function (link) {
          link.style.color = color;
        });
      }, 200);
    }
  }

  slider.addEventListener('transitionend', function () {
    if (isTransitioning) {
      isTransitioning = false;
      slider.style.transition = '';
    }
  });

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
        setTimeout(function () {
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
}
/* --------------------------------------- END OF SCROLL --------------------------------------- */

/* --------------------------------------- CV DOWNLOAD BUTTON --------------------------------------- */
function downloadPDF() {
  var lienPDF = "../external_files/CV Cyprien D'Harambure.pdf";
  var lienTelechargement = document.createElement('a');
  lienTelechargement.href = lienPDF;
  lienTelechargement.download = 'CV-Cyprien-D-Harambure.pdf';

  document.body.appendChild(lienTelechargement);
  lienTelechargement.click();
  document.body.removeChild(lienTelechargement);
}
/* --------------------------------------- END OF CV DOWNLOAD BUTTON --------------------------------------- */

/* --------------------------------------- PRE CHARGE WEBSITE --------------------------------------- */
/*function chargerPage(url) {
  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Erreur de chargement de la page');
          }
          return response.text();
      })
      .then(data => {
          console.log('OK');
      })
      .catch(error => {
          console.error('Erreur:', error.message);
      });
}

const url = 'http://localhost:8000/pages/works_sites/InstantWeather/index.html';
chargerPage(url);*/
/* --------------------------------------- END OF PRE CHARGE WEBSITE --------------------------------------- */

/* --------------------------------------- SKILLS LOGO --------------------------------------- */
function changeTextAndAnimate(id) {
  var titleSkillDiv = document.getElementById('SkillsTitleBottom');
  titleSkillDiv.classList.add('change-animation');
  var titleSkill = titleSkillDiv.children[0];
  switch (id) {
    case 'skillButton_HumanSkill':
      titleSkill.innerText = 'Human Skills'
      break;
    case 'skillButton_MobileDevelopmentSkill':
      titleSkill.innerText = 'Mobile Development Skills'
      break;
    case 'skillButton_DatabaseManagementSkill':
      titleSkill.innerText = 'Database Management Skills'
      break;
    case 'skillButton_SystemAdministrationSkill':
      titleSkill.innerText = 'System Administration Skills'
      break;
    case 'skillButton_ProgrammingSkill':
      titleSkill.innerText = 'Programming Skills'
      break;
    case 'skillButton_WebDevelopmentSkill':
      titleSkill.innerText = 'Web Development Skills'
      break;
    case 'skillButton_VirtualizationSkill':
      titleSkill.innerText = 'Virtualization Skills'
      break;
    case 'skillButton_ProjectManagementSkill':
      titleSkill.innerText = 'Project Management Skills'
      break;
    default:
      titleSkill.innerText = ''
  }
  setTimeout(() => {
    titleSkillDiv.classList.remove('change-animation');
  }, 500);
}

function skillsLogoAddEventListener() {
  const boutons = document.querySelectorAll('.skillButton');
  var lastIndex = 5;
  var lastbuttonClick = document.getElementById('skillButton_WebDevelopmentSkill');
  boutons.forEach((bouton, index) => {
    bouton.addEventListener('click', function () {
      lastbuttonClick.classList.remove("skillButtonClick");
      this.classList.add("skillButtonClick");
      document.getElementById(`SubSkills${lastIndex}`).classList.remove('SubSkillsVisible');
      document.getElementById(`SubSkills${index}`).classList.add('SubSkillsVisible');

      const elementsLast = document.querySelectorAll(`.Line.SubSkills:nth-child(${lastIndex + 1}) .Column`);
      elementsLast.forEach((el) => {
        el.style.animationDuration = ``;
        el.classList.remove('ColumnSkillsVisible');
      });

      const elements = document.querySelectorAll(`.Line.SubSkills:nth-child(${index + 1}) .Column`);
      elements.forEach((el, index) => {
        el.classList.add('ColumnSkillsVisible');
        el.style.animationDuration = `0.2s`;
        el.style.animationDelay = `${index * 0.2}s`;
      });

      changeTextAndAnimate(this.id);

      lastIndex = index;
      lastbuttonClick = this;
    });
  });
}
/* --------------------------------------- END OF SKILLS LOGO --------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
  slide1StartAnimation();

  var homeLink = document.querySelector('.NavBar > ul > li:nth-child(2) a > hr');
  homeLink.style.width = '100%';

  carrousel();

  cursorHover('#boutonTelechargement', '', 'var(--whiteRGB)');
  cursorHover('.Works i', '', '');
  cursorHover('.Carrousel > button', '', '');
  cursorHover('.Carrousel > div > a.workLink', 'Go see', '');
  cursorHover('.ScrollBar > div > button', '', '');
  cursorHover('.ScrollBar > .PageListDiv > p', '', '');
  cursorHover('.Presentation > div > div > div > a', '', '');

  HoverText('skillButton_HumanSkill', 'Human Skills')
  HoverText('skillButton_MobileDevelopmentSkill', 'Mobile Development Skills')
  HoverText('skillButton_DatabaseManagementSkill', 'Database Management Skills')
  HoverText('skillButton_SystemAdministrationSkill', 'System Administration Skills')
  HoverText('skillButton_ProgrammingSkill', 'Programming Skills')
  HoverText('skillButton_WebDevelopmentSkill', 'Web Development Skills')
  HoverText('skillButton_VirtualizationSkill', 'Virtualization Skills')
  HoverText('skillButton_ProjectManagementSkill', 'Project Management Skills')
  HoverText('IndexProfilImg', 'Me, kinda fruity <3')

  document.getElementById('boutonTelechargement').addEventListener('click', downloadPDF);

  scroll();

  skillsLogoAddEventListener();
});
function adjustSkillsLayout() {
  const screenWidth = window.innerWidth;
  const columnSkills = document.querySelectorAll('.ColumnSkill');
  if (screenWidth <= 577) {
    const combinedButtons = [];
    columnSkills.forEach((column, columnIndex) => {
      const buttons = column.querySelectorAll('.skillButton');
      buttons.forEach((button, buttonIndex) => {
        const combinedIndex = columnIndex + buttonIndex * columnSkills.length;
        combinedButtons[combinedIndex] = button.cloneNode(true);
      });
    });
    columnSkills.forEach(column => {
      const buttons = column.querySelectorAll('.skillButton');
      buttons.forEach(button => button.remove());
    });
    combinedButtons.forEach(button => {
      columnSkills[0].appendChild(button);
    });
    columnSkills[1].style.display = 'none';
  } else {
    columnSkills.forEach((column, columnIndex) => {
      const buttons = column.querySelectorAll('.skillButton');
      buttons.forEach(button => columnSkills[columnIndex].appendChild(button));
    });
    columnSkills[1].style.display = 'flex';
    console.log('za')
    skillsLogoAddEventListener();
  }
}

adjustSkillsLayout();
window.addEventListener('resize', adjustSkillsLayout);