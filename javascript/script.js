/* --------------------------------------- MAIN --------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', function (e) {
        // Met à jour la position de la div en fonction de la position de la souris
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
});

/* --------------------------------------- END MAIN --------------------------------------- */

/* --------------------------------------- FOOTER --------------------------------------- */
document.getElementById("FooterGithub").addEventListener("mouseover", function () {
    this.src = "img/github.png";
});

document.getElementById("FooterGithub").addEventListener("mouseout", function () {
    this.src = "img/githubPumpkin.png";
});

document.getElementById("FooterLinkedin").addEventListener("mouseover", function () {
    this.src = "img/linkedin.png";
});

document.getElementById("FooterLinkedin").addEventListener("mouseout", function () {
    this.src = "img/linkedinPumpkin.png";
});

document.getElementById("FooterMail").addEventListener("mouseover", function () {
    this.src = "img/mail.png";
});

document.getElementById("FooterMail").addEventListener("mouseout", function () {
    this.src = "img/mailPumpkin.png";
});
/* --------------------------------------- END FOOTER --------------------------------------- */


function init(){
    //animateBoxes();
}

init();