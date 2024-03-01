/* --------------------------------------- MAIN --------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.visibility = 'hidden';

    document.addEventListener('mousemove', function (e) {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
        customCursor.style.visibility = 'visible';
    });

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

    function UwU(trans) {
        const newDiv = document.createElement('div');
        newDiv.className = 'animated-div';
        if (trans == 1) {
            document.documentElement.style.setProperty('--red', '#dd81be');
            document.documentElement.style.setProperty('--redRGB', '223, 39, 51');
            if (document.getElementById('IndexProfilImg')) {
                document.getElementById('IndexProfilImg').src = '../img/illustrations/index/pfp/profil3.jpg';
                document.getElementById('IndexProfilImg').style.top = '180px';
            }
            newDiv.textContent = `you've been transified hehe OwO`;
        }
        else {
            document.documentElement.style.setProperty('--red', '#df2733');
            document.documentElement.style.setProperty('--redRGB', '221, 129, 190');
            if (document.getElementById('IndexProfilImg')) {
                document.getElementById('IndexProfilImg').src = '../img/illustrations/index/pfp/profil.jpg';
                document.getElementById('IndexProfilImg').style.top = '90px';
            }
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
});

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
/* --------------------------------------- END MAIN --------------------------------------- */

/* --------------------------------------- INDEX --------------------------------------- */
HoverText('skillButton_HumanSkill', 'Human Skills')
HoverText('skillButton_MobileDevelopmentSkill', 'Mobile Development')
HoverText('skillButton_DatabaseManagementSkill', 'Database Management')
HoverText('skillButton_SystemAdministrationSkill', 'System Administration')
HoverText('skillButton_ProgrammingSkill', 'Programming')
HoverText('skillButton_WebDevelopmentSkill', 'Web Development')
HoverText('skillButton_VirtualizationSkill', 'Virtualization')
HoverText('skillButton_ProjectManagementSkill', 'Project Management')

/* --------------------------------------- END INDEX --------------------------------------- */
