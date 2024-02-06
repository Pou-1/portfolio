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
                <i class="fa-brands fa-github-alt"></i><span>1</span>
                <i class="fa-regular fa-envelope"></i><span>1</span>
                <i class="fa-brands fa-linkedin"></i><span>1</span>
            </div>
            <div class="content aligne Column">
                <div class="titleAbout Column">
                    <h1>Passions</h1>
                    <hr>
                </div>
                <div class="content">
                    <div class="Column SubTitleAbout aligne" id="AboutMusic">
                        <h1>Musics</h1>
                    </div>
                    <div class="content">
                        <div class="DivPassionsMusics aligne">
                            <a href="" class="aligne Line" id="Music1">
                                <div class="TextWithHr">
                                    <p>Matcha Puff</p>
                                    <hr>
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
                            </a>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="Column SubTitleAbout aligne" id="AboutDrawing">
                        <h1>Drawing</h1>
                    </div>
                    <div class="content">
                        aaaaaaaaaaa
                    </div>
                </div>
                <div class="content">
                    <div class="Column SubTitleAbout aligne" id="AboutDesign">
                        <h1>Design</h1>
                    </div>
                    <div class="content">
                        Andgel Je t'aime ! <3 
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