<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyprien D'Harambure - Portfolio</title>

    <link rel="stylesheet" href="../style/index.css">
    <?php include('pages/component/link.php'); ?>
</head>
<body>
    <?php include('pages/component/navbar.php'); ?>
    <div class="ScrollBar Line" id="ScrollBar">
        <hr>
        <div class="aligne Column PageListDiv">
            <p class="actualPage"><span>1</span></p>
            <p><span>2</span></p>
            <p><span>3</span></p>
        </div>
    </div>
    <div class="main">
        <div class="slider-container" id="slider">
            <div class="Presentation aligne Line slide">
                <div class="Column aligneCenterVertically">
                    <div>
                        <h2>Hello there, I am</h2>
                        <div>
                            <a href="https://github.com/Pou-1">Cyprien D'Harambure</a>
                            <hr>
                        </div>
                    </div>
                    <p>
                        I'm a student in Software & Web Development.
                        Currently studying in the University of Caen in Normandie (France) for a University Bachelor.
                    </p>
                    <div class="aligneRight">
                        <button id="boutonTelechargement">See my CV</button>
                    </div>
                </div>
                <div class="aligne PresentationImg">
                    <img src="../img/profil.jpg" alt="A picture of me">
                </div>
            </div>

            <div class="Skills slide aligneCenterHorizontally Column">
                <div class="titleWithHr Column aligne">
                    <h1>Skills</h1>
                    <hr>
                </div>
                <div class="Subtitle SubtitleBlack Column">
                    <h1>Web</h1>
                    <hr>
                </div>
                <div class="Line Skills1">
                    <p class="aligne Column"><i class="fa-brands fa-html5 aligne"></i><span class="hover-text">HTML</span></p>
                    <p class="aligne Column"><i class="fa-brands fa-css3-alt aligne"></i><span class="hover-text">CSS</span></p>
                    <p class="aligne Column"><i class="fa-brands fa-square-js aligne"></i><span class="hover-text">Javascript</span></p>
                    <p class="aligne Column"><i class="fa-brands fa-php aligne"></i><span class="hover-text">PHP</span></p>
                </div>
                <div class="Subtitle SubtitleBlack Column">
                    <h1>Others</h1>
                    <hr>
                </div>
                <div class="Line Skills2">
                    <p class="aligne Column"><i class="fa-solid fa-database aligne"></i><span class="hover-text">SQL</span></p>
                    <p class="aligne Column"><i class="fa-solid fa-c aligne"></i><span class="hover-text">C</span></p>
                    <p class="aligne Column"><i class="fa-brands fa-java aligne"></i><span class="hover-text">JAVA</span></p>
                </div>
            </div>

            <div class="slide aligne Column">
                <div class="titleWithHrWhite Column aligne">
                    <h1>Works</h1>
                    <hr>
                </div>
                <div class="Carrousel aligne" id="Carou">
                    <button id="prevBtn" class="aligne">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <div class="carousel-container aligne Line slides">
                        <a class="Works aligne Line" href="pages/work_ptiCuisto.php">
                            <div class="Tags">
                                <p class="Tag aligne"><i class="fa-brands fa-html5 aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-css3-alt aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-square-js aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-php aligne"></i></p>
                            </div>
                            <img class="ActualCaroussel" src="../img/pticuisto/Liste_recettes.png" alt="Picture of a work on a website">
                        </a>

                        <a class="Works aligne Line" href="pages/works_sites/InstantWeather/index.html">
                            <div class="Tags">
                                <p class="Tag aligne"><i class="fa-brands fa-html5 aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-css3-alt aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-square-js aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-php aligne"></i></p>
                            </div>
                            <img src="img/works/makima.jpg" alt="Picture of a work on a website">
                        </a>

                        <a class="Works aligne Line" href="pages/works_sites/Pomodoro/index.html">
                            <div class="Tags">
                                <p class="Tag aligne"><i class="fa-brands fa-html5 aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-css3-alt aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-square-js aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-php aligne"></i></p>
                            </div>
                            <img src="img/works/nier.jpg" alt="Picture of a work on a website">
                        </a>

                        <a class="Works aligne Line" href="pages/works_sites/SAE-1.04/templates/index.html">
                            <div class="Tags">
                                <p class="Tag aligne"><i class="fa-brands fa-html5 aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-css3-alt aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-square-js aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-php aligne"></i></p>
                            </div>
                            <img src="img/works/dororo.jpg" alt="Picture of a work on a website">
                        </a>

                        <a class="Works aligne Line" href="#">
                            <div class="Tags">
                                <p class="Tag aligne"><i class="fa-brands fa-html5 aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-css3-alt aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-square-js aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-php aligne"></i></p>
                            </div>
                            <img src="img/works/takina.jpg" alt="Picture of a work on a website">
                        </a>

                        <a class="Works aligne Line" href="#">
                            <div class="Tags">
                                <p class="Tag aligne"><i class="fa-brands fa-html5 aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-css3-alt aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-square-js aligne"></i></p>
                                <p class="Tag aligne"><i class="fa-brands fa-php aligne"></i></p>
                            </div>
                            <img src="img/works/sailor.jpeg" alt="Picture of a work on a website">
                        </a>
                    </div>
                    <button id="nextBtn" class="aligne">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div class="RightSlider"></div>
            <div class="LeftSlider"></div>
        </div>
    </div>

    <script src="../javascript/script.js"></script>
    <script src="../javascript/index.js"></script>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/8708952b61.js" crossorigin="anonymous"></script>
</body>

</html>