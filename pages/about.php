<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Cyprien D'Harambure - Portfolio/About</title>
    <?php include('component/link.php'); ?>
</head>

<body>
    <?php include('component/navbar.php'); ?>
    <link rel="stylesheet" href="../style/about.css">

    <div class="aligne Column">
        <?php include('component/about/about_me.php'); ?>
        <div class="content whiteBackground aligne Column" id="whiteBackground">
            <div class="titleAbout aligne">
                <h1>Passions</h1>
                <hr>
            </div>
            <?php include('component/about/musics.php'); ?>
            <?php include('component/about/drawing.php'); ?>
            <?php include('component/about/design.php'); ?>
        </div>
    </div>

    <script src="../javascript/about.js"></script>
    <script src="../javascript/script.js"></script>

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/8708952b61.js" crossorigin="anonymous"></script>
</body>

</html>