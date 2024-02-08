/* --------------------------------------- NAVBAR --------------------------------------- */
var homeLink = document.querySelector('.NavBar > ul > li:nth-child(3) a > hr');
homeLink.style.width = '100%';
/* --------------------------------------- END OF NAVBAR --------------------------------------- */

/* --------------------------------------- MUSIC API DEEZER --------------------------------------- */
function getTitle(ids, DivId) {
    for (var i = 0; i < ids.length; i++) {
        (function (index) {
            var div = document.getElementById(DivId + index);
            var imgDiv = div.children[1];
            var Title = div.children[0].children[1].children[0].children[0];
            var ArtistName = div.children[0].children[1].children[0].children[2];

            const callbackName = 'jsonpCallback_' + Date.now() + '_' + index;

            var currentAudio = null;
            window[callbackName] = function (data) {
                var audio = new Audio(data.preview);
                var playButton = div.children[1].children[6];
                var playIcon = playButton.querySelector("i");
                var volumeSlider = div.children[0].children[0].children[1];
                var volumeIcon = div.children[0].children[0].children[0];
                var progressBar = div.children[0].children[1].children[0].children[1];
                audio.volume = volumeSlider.value;
                
                volumeSlider.addEventListener('input', function() {
                    var volumeIcon = div.querySelector(".Volume i");
                    var volumeLevel = parseFloat(volumeSlider.value);
                    if (volumeLevel === 0) {
                        volumeIcon.className = 'fa-solid fa-volume-xmark';
                    } else if (volumeLevel <= 0.5) {
                        volumeIcon.className = 'fa-solid fa-volume-low';
                    } else {
                        volumeIcon.className = 'fa-solid fa-volume-high';
                    }
                    audio.volume = volumeLevel;
                });
                
                audio.addEventListener('timeupdate', function() {
                    if(!audio.paused){
                        progressBar.value = audio.currentTime;
                        var percentage = (audio.currentTime / audio.duration) * 100;
                        progressBar.style.width = percentage + '%';
                    }
                });
                
                playButton.addEventListener('click', function(event) {
                    event.preventDefault();
            
                    if (currentAudio && currentAudio !== audio) {
                        currentAudio.pause();
                        currentAudio.currentTime = 0;
                    }
            
                    currentAudio = audio;
            
                    if (audio.paused) {
                        audio.play();
                        playIcon.className = 'fa-solid fa-square';
                    } else {
                        audio.pause();
                        audio.currentTime = 0;
                        playIcon.className = 'fa-solid fa-play';
                        progressBar.style.width = '100%';
                    }
                });
            

                ArtistName.textContent = 'By ' + data.artist.name
                Title.textContent = data.title;
                var img = document.createElement('img');
                img.src = data.album.cover_xl;
                imgDiv.appendChild(img);

                delete window[callbackName];
                script.remove();
            };

            const script = document.createElement('script');
            script.src = `https://api.deezer.com/track/${ids[index]}?output=jsonp&callback=${callbackName}`;
            document.body.appendChild(script);
        })(i);
    }
}

//get the id with "https://api.deezer.com/search?q=My%20GenerationThe%20Who"
let ids = ["803034982", "1016945932", "1177977552"];

getTitle(ids, "Music");

/* --------------------------------------- END OF MUSIC API DEEZER --------------------------------------- */

/* --------------------------------------- FIREFLIES FOR MUSIC --------------------------------------- */
function createFirefly(container) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';

    const rect = container.getBoundingClientRect();
    firefly.style.left = Math.random() * rect.width + 'px';
    firefly.style.top = (Math.random() * rect.height + window.scrollY) + 'px';
    const size = Math.random() * 3 + 1;
    firefly.style.width = size + 'px';
    firefly.style.height = size + 'px';
    container.appendChild(firefly);

    firefly.animate(
        [
            { opacity: 0 },
            { opacity: Math.random() * 0.5 + 0.5 },
            { opacity: 0 }
        ],
        {
            duration: Math.random() * 2000 + 1000,
            iterations: Infinity
        }
    );
}

const numberOfFireflies = 50;
var vinylElements = document.querySelectorAll('.vinyl');
var numberOfVinyls = vinylElements.length;
for (let i = 0; i < numberOfFireflies + 1; i++) {
    for (let j = 0; j < numberOfVinyls; j++) {
        createFirefly(document.getElementById('Music' + j));
    }
}
/* --------------------------------------- END OF FIREFLIES FOR MUSIC --------------------------------------- */

/* --------------------------------------- SCROLL ON WHITE BACKGROUND --------------------------------------- */
document.addEventListener("scroll", () => {
    if(document.getElementById('whiteBackground').getBoundingClientRect().top < 135){
        const NavBarTexts = document.querySelectorAll('.NavBar > ul > li > a')
        NavBarTexts.forEach(NavBarText => {
            NavBarText.style.color = 'var(--black)'
        });
    }
    if(document.getElementById('whiteBackground').getBoundingClientRect().top >= 135){
        const NavBarTexts = document.querySelectorAll('.NavBar > ul > li > a')
        NavBarTexts.forEach(NavBarText => {
            NavBarText.style.color = 'var(--white)'
        });
    }

    for(var i = 0; i < 3; i++){
        var actualMusicDiv = document.getElementById('Music' + i);
        if(actualMusicDiv.getBoundingClientRect().top < 135){
            actualMusicDiv.style.width = '800px'
            actualMusicDiv.children[0].style.width = '500px'
            actualMusicDiv.children[0].children[1].children[0].style.fontSize = '27px'
        }
        if(actualMusicDiv.getBoundingClientRect().top < -280 || actualMusicDiv.getBoundingClientRect().top >= 135){
            actualMusicDiv.style.width = ''
            actualMusicDiv.children[0].style.width = ''
            actualMusicDiv.children[0].children[1].children[0].style.fontSize = ''
        }
    }
});