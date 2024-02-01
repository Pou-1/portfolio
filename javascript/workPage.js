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