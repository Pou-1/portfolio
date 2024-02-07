<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Cyprien De La Poëze D'Harambure - Portfolio/About</title>
    <?php include('component/link.php'); ?>
</head>

<body>
    <?php include('component/navbar.php'); ?>
    <link rel="stylesheet" href="../style/about.css">

    <div class="aligne Column">
        <div class="title Column">
            <h1>About Me</h1>
            <hr>
        </div>
        <div class="media">
            <i class="fa-brands fa-github-alt"></i>
            <i class="fa-regular fa-envelope"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
        <div class="content whiteBackground aligne Column" id="whiteBackground">
            <div class="titleAbout aligne">
                <h1>Passions</h1>
                <hr>
            </div>
            <div class="content aligne Column">
                <div class="Column SubTitleAbout aligne" id="AboutMusic">
                    <h1><i class="fa-solid fa-music"></i>Musics<i class="fa-solid fa-headphones"></i></h1>
                </div>
                <div class="content">
                    <div class="DivPassionsMusics aligne Column">
                        <div class="aligne Line" id="Music0">
                            <div class="Text aligne">
                                <div class="Volume aligne Column">
                                    <i class="fa-solid fa-volume-low Volume"></i>
                                    <input type="range" id="volumeSlider" min="0" max="1" step="0.001" value="0.02">
                                </div>
                                <div class="WidthTextMusic aligne">
                                    <div class="TextWithHr">
                                        <p></p>
                                        <hr>
                                        <p class="ArtistName"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="vinyl aligne">
                                <div class="dot"></div>
                                <div class="sillon1 sillon"></div>
                                <div class="sillon2 sillon"></div>
                                <div class="sillon3 sillon"></div>
                                <div class="sillon4 sillon"></div>
                                <div class="sillon5 sillon"></div>
                                <button class="PlayButton aligne"><i class="fa-solid fa-play"></i></button>
                            </div>
                        </div>

                        <div class="aligne Line" id="Music1">
                            <div class="Text aligne">
                                <div class="Volume aligne Column">
                                    <i class="fa-solid fa-volume-low Volume"></i>
                                    <input type="range" id="volumeSlider" min="0" max="1" step="0.001" value="0.02">
                                </div>
                                <div class="WidthTextMusic aligne">
                                    <div class="TextWithHr">
                                        <p></p>
                                        <hr>
                                        <p class="ArtistName"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="vinyl aligne">
                                <div class="dot"></div>
                                <div class="sillon1 sillon"></div>
                                <div class="sillon2 sillon"></div>
                                <div class="sillon3 sillon"></div>
                                <div class="sillon4 sillon"></div>
                                <div class="sillon5 sillon"></div>
                                <button class="PlayButton aligne"><i class="fa-solid fa-play"></i></button>
                            </div>
                        </div>

                        <div class="aligne Line" id="Music2">
                            <div class="Text aligne">
                                <div class="Volume aligne Column">
                                    <i class="fa-solid fa-volume-low Volume"></i>
                                    <input type="range" id="volumeSlider" min="0" max="1" step="0.001" value="0.02">
                                </div>
                                <div class="WidthTextMusic aligne">
                                    <div class="TextWithHr">
                                        <p></p>
                                        <hr>
                                        <p class="ArtistName"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="vinyl aligne">
                                <div class="dot"></div>
                                <div class="sillon1 sillon"></div>
                                <div class="sillon2 sillon"></div>
                                <div class="sillon3 sillon"></div>
                                <div class="sillon4 sillon"></div>
                                <div class="sillon5 sillon"></div>
                                <button class="PlayButton aligne"><i class="fa-solid fa-play"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content aligne Column">
                <div class="Column SubTitleAbout aligne" id="AboutMusic">
                    <h1><i class="fa-solid fa-pencil"></i>Drawing<i class="fa-solid fa-compass-drafting"></i></h1>
                </div>
                <div class="content">
                    aaaaaaaaaaa
                </div>
            </div>
            <div class="content aligne Column">
                <div class="Column SubTitleAbout aligne" id="AboutDesign">
                    <h1><i class="fa-solid fa-pen"></i>Design<i class="fa-brands fa-sketch"></i></h1>
                </div>
                <div class="content">
                    Andgel Je t'aime ! 
                </div>
            </div>
        </div>
    </div>
    <?php include('component/footer.php'); ?>

    <script src="../javascript/about.js"></script>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/8708952b61.js" crossorigin="anonymous"></script>
</body>

</html>