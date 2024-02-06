/* --------------------------------------- NAVBAR --------------------------------------- */
var homeLink = document.querySelector('.NavBar > ul > li:nth-child(3) a > hr');
homeLink.style.width = '100%';
/* --------------------------------------- END OF NAVBAR --------------------------------------- */

/* --------------------------------------- BUTTON PASSIONS --------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les éléments SubTitleAbout
    var subTitleAboutElements = document.querySelectorAll('.SubTitleAbout');

    // Ajoutez un gestionnaire d'événements au clic sur chaque élément SubTitleAbout
    subTitleAboutElements.forEach(function (element) {
        element.addEventListener('click', function () {
            // Sélectionnez le contenu suivant
            var nextContent = element.nextElementSibling;

            // Ajoutez ou supprimez les classes d'animation et d'activation
            if (nextContent.classList.contains('active')) {
                nextContent.classList.remove('active', 'slide-in');
                nextContent.classList.add('slide-out');
            } else {
                nextContent.classList.add('active', 'slide-in');
                nextContent.classList.remove('slide-out');
            }
        });
    });
});

/* --------------------------------------- END OF BUTTON PASSIONS --------------------------------------- */

/* --------------------------------------- MUSIC API DEEZER --------------------------------------- */
function getTitle(id, DivId) {
    var div = document.getElementById(DivId)
    var imgDiv = div.children[1];
    var Title = div.children[0].children[0]
    const callbackName = 'jsonpCallback_' + Date.now();
    
    window[callbackName] = function (data) {
        console.log(data.title)
        Title.textContent = data.title
        var img = document.createElement('img')
        img.src = data.album.cover_xl
        imgDiv.appendChild(img)

        delete window[callbackName];
        script.remove();
    };

    const script = document.createElement('script');
    script.src = `https://api.deezer.com/track/${id}&output=jsonp&callback=${callbackName}`;
    document.body.appendChild(script);
}

getTitle("803034982", "Music1");
/* --------------------------------------- END OF MUSIC API DEEZER --------------------------------------- */
