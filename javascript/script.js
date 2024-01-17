/* --------------------------------------- MAIN --------------------------------------- */

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