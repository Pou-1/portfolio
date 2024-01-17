    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="/style/animation.css">
    <link rel="stylesheet" href="/style/nav_bar.css">
    <link rel="stylesheet" href="/style/footer.css">

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
            <button class="menu-btn" type="button" id="ShowNav">
                <span class="menu-btn__line"></span>
                <span class="menu-btn__line"></span>
                <span class="menu-btn__line"></span>
                <span class="menu-btn__line"></span>
                <span class="menu-btn__close"></span>
            </button>
            <nav class="NavBar" id="NavBar">
                <ul id="UlMenu">
                    <li><a href="#"></a></li>
                    <li><a href="#">
                        Home<hr>
                    </a></li>
                    <li class="NavBarLiHasChildren" id="NavBarLiHasChildren1">
                        <a href="#">
                            <div class="Line">
                                Profil
                                <span class="Span aligne">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                            </div>
                            <hr>
                        </a>
                        <ul class="SubMenu">
                            <li><a href="#">
                                Subpage<hr>
                            </a></li>
                            <li class="NavBarLiHasChildren">
                                <a href="#">
                                    <div class="Line">
                                        Subpage
                                        <span class="Span aligne">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </span>
                                    </div>
                                    <hr>
                                </a>
                                <ul class="SubSection">
                                    <li><a href="#">
                                        Subpage<hr>
                                    </a></li>
                                    <li><a href="#">
                                        a<hr>
                                    </a></li>
                                </ul>
                            </li>
                            <li><a href="#">
                                Subpage<hr>
                            </a></li>
                        </ul>
                    </li>
                    <li><a href="pages/array.php">
                        Panier<hr>
                    </a></li>
                    <li class="NavBarLiHasChildren" id="NavBarLiHasChildren2">
                        <a href="#">
                            <div class="Line">
                                Subpage
                                <span class="Span aligne">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                            </div>
                            <hr>
                        </a>
                        <ul class="SubMenu">
                            <li><a href="pages/sign_up.php">
                                Panier<hr>
                            </a></li>
                            <li class="NavBarLiHasChildren">
                                <a href="#">
                                    <div class="Line">
                                        Subpage
                                        <span class="Span aligne">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </span>
                                    </div>
                                    <hr>
                                </a>
                                <ul class="SubSection">
                                    <li><a href="pages/array.php">
                                        a<hr>
                                    </a></li>
                                    <li><a href="#">
                                        Panier<hr>
                                    </a></li>
                                    <li><a href="#">
                                        Panier<hr>
                                    </a></li>
                                </ul>
                            </li>
                            <li><a href="pages/log_in.php">
                                Panier<hr>
                            </a></li>
                        </ul>
                    </li>
                    <li><a href="#"></a></li>
                </ul>
            </nav>
        </header>
        <div class="main">