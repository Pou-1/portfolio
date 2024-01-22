<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyprien De La Poëze D'Harambure - Portfolio</title>
    <link rel="stylesheet" href="../style/style.css">
    <link rel="stylesheet" href="../style/animation.css">
    <link rel="stylesheet" href="../style/nav_bar.css">
    <link rel="stylesheet" href="../style/footer.css">

    <link rel="stylesheet" href="../style/index.css">

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

</head>

<body>
    <header class="site-header">
        <nav class="NavBar" id="NavBar">
            <ul id="UlMenu">
                <li><a href="#"></a></li>
                <li><a href="/">Home<hr></a></li>
                <li><a href="/pages/about.php">About<hr></a></li>
                <li><a href="#"></a></li>
            </ul>
        </nav>
    </header>
    <div class="ScrollBar Line" id="ScrollBar">
        <hr>
        <div class="aligne Column PageListDiv">
            <p class="actualPage"><span>1</span></p>
            <p><span>2</span></p>
            <p><span>3</span></p>
        </div>
    </div>
    <div class="custom-cursor" id="cursor"></div>
    <div class="main">
        <div class="slider-container" id="slider">
            <div class="slide">
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
            </div>

            <div class="slide">
                <div class="Skills slide aligneCenterHorizontally Column">
                    <div class="titleWhite Column">
                        <h1>Skills</h1>
                        <hr>
                    </div>
                    <p>
                        afeafafaegggggg
                        afeafafaeggggggad
                        fafa
                    </p>
                </div>
            </div>

            <div class="slide aligne Column">
                <div class="title Column">
                    <h1>Works</h1>
                    <hr>
                </div>

                <div class="Carrousel aligne">
                    <button id="precedent">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <div class="carousel-container">
                        <a class="Works aligne Line" href="#">
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