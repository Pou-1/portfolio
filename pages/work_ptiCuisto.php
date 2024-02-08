<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Cyprien D'Harambure - Portfolio/Work/PtiCuisto</title>
        <link rel="stylesheet" href="../style/work_page.css">
        <?php include('component/link.php'); ?>
    </head>
    <body>
        <?php include('component/navbar.php'); ?>

        <div class="main aligne Column">
            <h1 class="WorkPageTitle">Pti Cuisto</h1>

            <p>pticuisto is a project i did with classmates, we got a client asking
                for a website to teach to the children how to cook</p>
                
            <h2 class="h2Title">Constraints</h2>

            <div class="Subtitle SubtitleWhite Column">
                <h1>Visual identity</h1>
                <hr>
            </div>

            <div class="Line VisualIdentity">
                <p class="aligne">#2a3990</p>
                <p class="aligne">#ffffff</p>
                <p class="aligne">#999999</p>
                <p class="aligne">#7890cd</p>
            </div>

            <div class="Subtitle SubtitleWhite Column">
                <h1>Others Constraints</h1>
                <hr>
            </div>
            <ul>
                <li>Use a MVC design pattern</li>
                <li>Store recipe data in a MySQL database</li>
                <li>Use the framework Bootrstrap</li>
                <li>the website need to be responsive and compliant with W3C HTML and CSS validators</li>
                <li>Meet the accessibility requirements of WCAG AA 2.0</li>
            </ul>
            <h2 class="h2Title">Final product</h2>
            <div class="Column ColumnShare">
                <img src="../../img/pticuisto/Accueil.png" alt="">
                <img src="../../img/pticuisto/Liste_recettes.png" alt="">
                <img src="../../img/pticuisto/Mousse_chocolat.png" alt="">
                <img src="../../img/pticuisto/inscrire.png" alt="">
                <img src="../../img/pticuisto/Mon_compte.png" alt="">
            </div>
        </div>
    </body>
    <script src="../javascript/script.js"></script>
    <script src="../javascript/workPage.js"></script>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/8708952b61.js" crossorigin="anonymous"></script>
</html>