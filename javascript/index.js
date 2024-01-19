/* --------------------------------------- INDEX --------------------------------------- */
const links = document.querySelectorAll('.Works i');
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

/* --------------------------------------- END INDEX --------------------------------------- */
