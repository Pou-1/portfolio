/* --------------------------------------- MAIN --------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.visibility = 'hidden';

    document.addEventListener('mousemove', function (e) {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
        customCursor.style.visibility = 'visible';
    });

    function cursorHover(query){
        const links = document.querySelectorAll(query);
        const customCursor = document.getElementById('cursor');

        links.forEach(link => {
            link.addEventListener('mouseenter', function () {
                customCursor.classList.add('hovered');
                customCursor.classList.remove('custom-cursor');
            });

            link.addEventListener('mouseleave', function () {
                customCursor.classList.add('custom-cursor');
                customCursor.classList.remove('hovered');
            });
        });
    }

    /* --------------------------------------- INDEX --------------------------------------- */
    cursorHover('.Works i');
    cursorHover('.Carrousel > button');
    cursorHover('.Carrousel > div > a');
    cursorHover('.NavBar a, .NavBarLiHasChildren a');
    cursorHover('.ScrollBar > div > button');
    cursorHover('.ScrollBar > .PageListDiv > p');
    cursorHover('.Presentation > div > div > div > a');
    cursorHover('.media > i');
    cursorHover('.DivPassionsMusics > div > .vinyl > .PlayButton');
    cursorHover('.DivPassionsMusics > div > .Text > .Volume > input');
    cursorHover('.DivPassionsMusics > div > .Text > .Volume > i');
    /* --------------------------------------- END INDEX --------------------------------------- */
});

/* --------------------------------------- END MAIN --------------------------------------- */