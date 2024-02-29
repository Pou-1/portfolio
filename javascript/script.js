/* --------------------------------------- MAIN --------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.visibility = 'hidden';

    document.addEventListener('mousemove', function (e) {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
        customCursor.style.visibility = 'visible';
    });

    function cursorHover(query, text, color){
        const links = document.querySelectorAll(query);
        const customCursor = document.getElementById('cursor');

        links.forEach(link => {
            link.addEventListener('mouseenter', function () {
                customCursor.classList.remove('custom-cursor');
                if(text != ''){
                    addParagraphAndHrToDiv(customCursor, text)
                    customCursor.classList.add('hoveredWithText');
                }
                else{
                    customCursor.classList.add('hovered');
                }

                if(color != ''){
                    customCursor.style.backgroundColor = `rgba(${color}, 0.6)`
                }
            });

            link.addEventListener('mouseleave', function () {
                customCursor.classList.add('custom-cursor');
                if(text != ''){
                    customCursor.classList.remove('hoveredWithText');
                }
                else{
                    customCursor.classList.remove('hovered');
                }
                if(color != ''){
                    customCursor.style.backgroundColor = ``
                }
                deleteParagraphAndHrToDiv(customCursor)
            });
        });
    }

    function addParagraphAndHrToDiv(targetDiv, text) {
        const existingDiv = targetDiv.querySelector('div');
        const existingParagraph = targetDiv.querySelector('div > p');
        const existingHr = targetDiv.querySelector('div > hr');
      
        if (!existingParagraph && !existingHr && !existingDiv) {
            const div = document.createElement('div');
            const paragraph = document.createElement('p');
            paragraph.textContent = text;
            const hr = document.createElement('hr');
            targetDiv.appendChild(div);
            div.appendChild(paragraph);
            div.appendChild(hr);
        }
    }

    function deleteParagraphAndHrToDiv(targetDiv) {
        const existingDiv = targetDiv.querySelector('div');
        if (existingDiv) {
          targetDiv.removeChild(existingDiv);
        }
    }


    cursorHover('#boutonTelechargement', '', 'var(--whiteRGB)');
    cursorHover('.Works i', '', '');
    cursorHover('.Carrousel > button', '', '');
    cursorHover('.Carrousel > div > a.workLink', 'Go see', '');
    cursorHover('.NavBar a, .NavBarLiHasChildren a', '', '');
    cursorHover('.ScrollBar > div > button', '', '');
    cursorHover('.ScrollBar > .PageListDiv > p', '', '');
    cursorHover('.Presentation > div > div > div > a', '', '');
    cursorHover('.media > a', '', '');
    cursorHover('.DivPassionsMusics > div > .vinyl > .PlayButton', '', '');
    cursorHover('.DivPassionsMusics > div > .Text > .Volume > input', '', '');
    cursorHover('.DivPassionsMusics > div > .Text > .Volume > i', '', '');

    function UwU(){
        const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--red').trim();
        const newColor = (currentColor === '#dd81be') ? '#df2733' : '#dd81be';
        document.documentElement.style.setProperty('--red', newColor);
        
        const currentColorHover = getComputedStyle(document.documentElement).getPropertyValue('--redRGB').trim();
        const newColorHover = (currentColorHover === '221, 129, 190') ? '223, 39, 51' : '221, 129, 190';
        document.documentElement.style.setProperty('--redRGB', newColorHover);

        if(currentColor != '#dd81be'){
            document.getElementById('IndexProfilImg').src = '../img/illustrations/profil3.jpg';
            document.getElementById('IndexProfilImg').style.top = '180px';
        }
        else{
            document.getElementById('IndexProfilImg').src = '../img/illustrations/profil.jpg';
            document.getElementById('IndexProfilImg').style.top = '90px';
        }
    }

    let userInput = '';
    document.addEventListener('keydown', (event) => {
        userInput += event.key.toLowerCase();
        if (event.key === '6' || userInput.includes('femboy') || userInput.includes('closet')) {
            userInput = '';
            UwU();
        }
    });
});

/* --------------------------------------- END MAIN --------------------------------------- */