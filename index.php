<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyprien De La Poëze D'Harambure - Portfolio</title>

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
                    <h2>Hello there, I am Cyprien De La Poëze D'Harambure</h2>
                    <p>
                        I'm a student in Software & Web Developpement.
                        Currently studing in the University of Caen in Normandie (France) for a University Bachelor.
                    </p>
                </div>
                <div class="aligne">
                    <img src="../img/pfp.jpeg" alt="A picture of me">
                </div>
            </div>

            <div class="Skills slide aligneCenterHorizontally Column">
                <div class="title titleWhite Column">
                    <h1>Skills</h1>
                    <hr>
                </div>
                <div class="Subtitle SubtitleBlack Column">
                    <h1>Web</h1>
                    <hr>
                </div>
                <div class="Line Skills1">
                    <p class="aligne"><i class="fa-brands fa-html5"></i></p>
                    <p class="aligne"><i class="fa-brands fa-css3-alt"></i></i></p>
                    <p class="aligne"><i class="fa-brands fa-square-js"></i></i></p>
                    <p class="aligne"><i class="fa-brands fa-php"></i></i></p>
                </div>
                <div class="Subtitle SubtitleBlack Column">
                    <h1>Other</h1>
                    <hr>
                </div>
                <div class="Line Skills2">
                    <p class="aligne"><i class="fa-solid fa-database"></i></i></p>
                    <p class="aligne"><i class="fa-solid fa-c"></i></i></i></p>
                    <p class="aligne"><i class="fa-brands fa-java"></i></i></i></p>
                </div>
            </div>

            <div class="slide aligne Column">
                <div class="title titleBlack Column">
                    <h1>Skills</h1>
                    <hr>
                </div>
                <div class="Carrousel aligne">
                    <button id="precedent">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <div class="carousel-container">
                        <a class="Works aligne Line" href="pages/work_ptiCuisto.php">
                            <div>
                                <h2 class="aligne">PtiCuisto</h2>
                                <p class="aligne">
                                    A Website to learn easily how to cook
                                </p>
                                <div class="aligne Line">
                                    <p class="Tag">javascript</p>
                                    <p class="Tag">html</p>
                                    <p class="Tag">css</p>
                                    <p class="Tag">php</p>
                                </div>
                            </div>
                            <img src="../img/PtiCuisto_Front.png" alt="Picture of a work on a website">
                        </a>

                        <a class="Works aligne Line" href="#">
                            <div>
                                <h2 class="aligne">2</h2>
                                <p class="aligne">
                                    <i class="fa-brands fa-square-js"></i>
                                    <i class="fa-brands fa-html5"></i>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    <i class="fa-brands fa-php"></i>
                                </p>
                            </div>
                            <img src="img/PtiCuisto_Front.png" alt="Picture of a work on a website">
                        </a>

                        <a class="Works aligne Line" href="#">
                            <div>
                                <h2 class="aligne">3</h2>
                                <p class="aligne">
                                    <i class="fa-brands fa-square-js"></i>
                                    <i class="fa-brands fa-html5"></i>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    <i class="fa-brands fa-php"></i>
                                </p>
                            </div>
                            <img src="img/PtiCuisto_Front.png" alt="Picture of a work on a website">
                        </a>

                        <a class="Works aligne Line" href="#">
                            <div>
                                <h2 class="aligne">4</h2>
                                <p class="aligne">
                                    <i class="fa-brands fa-square-js"></i>
                                    <i class="fa-brands fa-html5"></i>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    <i class="fa-brands fa-php"></i>
                                </p>
                            </div>
                            <img src="img/PtiCuisto_Front.png" alt="Picture of a work on a website">
                        </a>
                    </div>
                    <button id="suivant">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script src="../javascript/script.js"></script>
    <script src="../javascript/index.js"></script>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/8708952b61.js" crossorigin="anonymous"></script>
</body>

</html>