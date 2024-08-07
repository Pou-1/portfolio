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

function cursor() {
    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.visibility = 'hidden';

    document.addEventListener('mousemove', function (e) {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
        customCursor.style.visibility = 'visible';
    });
}

function cursorHover(query, text, color) {
    const links = document.querySelectorAll(query);
    const customCursor = document.getElementById('cursor');

    links.forEach(link => {
        link.addEventListener('mouseenter', function () {
            customCursor.classList.remove('custom-cursor');
            if (text != '') {
                addParagraphAndHrToDiv(customCursor, text)
                customCursor.classList.add('hoveredWithText');
            }
            else {
                customCursor.classList.add('hovered');
            }

            if (color != '') {
                customCursor.style.backgroundColor = `rgba(${color}, 0.6)`
            }
        });

        link.addEventListener('mouseleave', function () {
            customCursor.classList.add('custom-cursor');
            if (text != '') {
                customCursor.classList.remove('hoveredWithText');
            }
            else {
                customCursor.classList.remove('hovered');
            }
            if (color != '') {
                customCursor.style.backgroundColor = ``
            }
            deleteParagraphAndHrToDiv(customCursor)
        });
    });
}

function HoverText(id, text) {
    document.getElementById(id).addEventListener('mouseover', function (e) {
        document.getElementById('hoverText').style.display = 'block';
        document.getElementById('hoverText').innerText = text;
    });

    document.getElementById(id).addEventListener('mouseleave', function (e) {
        document.getElementById('hoverText').style.display = 'none';
    });

    document.getElementById(id).addEventListener('mousemove', function (e) {
        var hoverText = document.getElementById('hoverText');
        hoverText.style.left = e.pageX + 'px';
        hoverText.style.top = e.pageY - 70 + 'px';
        hoverText.style.zIndex = 9;
    });
}

function UwU(trans) {
    const newDiv = document.createElement('div');
    newDiv.className = 'animated-div';
    const surname = document.querySelector('.Index_Slide1-NameAndSurnameLink');
    if (trans == 1) {
        document.documentElement.style.setProperty('--red', '#dd81be');
        document.documentElement.style.setProperty('--redRGB', '223, 39, 51');
        if (document.getElementById('IndexProfilImg')) {
            document.getElementById('IndexProfilImg').src = 'img/illustrations/index/pfp/profil3.jpg';
            document.getElementById('IndexProfilImg').style.top = '66px';
            surname.innerText = "Emily D'Harambure";
        }
        newDiv.textContent = `you've been transified hehe OwO`;
    }
    else {
        document.documentElement.style.setProperty('--red', '#df2733');
        document.documentElement.style.setProperty('--redRGB', '221, 129, 190');
        if (document.getElementById('IndexProfilImg')) {
            document.getElementById('IndexProfilImg').src = 'img/illustrations/index/pfp/profil.jpg';
            surname.innerText = "Cyprien D'Harambure";
            document.getElementById('IndexProfilImg').style.top = '0';
        }
        console.log(document.getElementById('IndexProfilImg'))
        newDiv.textContent = `you've been put into the closet :c`;
    }
    document.body.appendChild(newDiv);
    setTimeout(function () {
        newDiv.style.opacity = 0;
        setTimeout(function () {
            document.body.removeChild(newDiv);
        }, 1000);
    }, 1000);
}

function EasterEgg() {
    let userInput = '';
    var yes = 1;
    document.addEventListener('keydown', (event) => {
        userInput += event.key.toLowerCase();
        if (event.key === '6' || userInput.includes('trans') || userInput.includes('closet')) {
            if (userInput.includes('trans')) {
                UwU(1);
            }
            if (userInput.includes('closet')) {
                UwU(0);
            }
            if (event.key === '6') {
                UwU(yes);
            }
            yes = (yes === 1) ? 0 : 1;
            userInput = '';
        }
    });
}

function animateTextOfElement(element, cmpt) {
    if (!element) {
        console.error("L'élément spécifié n'existe pas.");
        return;
    }

    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = 1;

    text.split("").forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.setAttribute('aria-hidden', 'true');
        charSpan.style.animationDelay = `${cmpt * 0.02}s`;

        if (char === ' ') {
            charSpan.innerHTML = '&nbsp;';
        } else {
            charSpan.textContent = char;
        }

        element.appendChild(charSpan);
        cmpt++;
    });
    return cmpt;
}

document.addEventListener('DOMContentLoaded', function () {
    cursor();

    cursorHover('.NavBar a, .NavBarLiHasChildren a', '', '');
    cursorHover('.media > a', '', '');
    cursorHover('.DivPassionsMusics > div > .vinyl > .PlayButton', '', '');
    cursorHover('.DivPassionsMusics > div > .Text > .Volume > input', '', '');
    cursorHover('.DivPassionsMusics > div > .Text > .Volume > i', '', '');

    EasterEgg();
});