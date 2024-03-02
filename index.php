<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyprien D'Harambure - Portfolio</title>
    <?php include('pages/component/link.php'); ?>
    <link rel="stylesheet" href="../style/index.css">
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
            <?php include('pages/component/index/slide1.php'); ?>
            <?php include('pages/component/index/slide2.php'); ?>
            <?php include('pages/component/index/slide3.php'); ?>
        </div>
    </div>
    <!-- My scripts -->
    <script src="../javascript/script.js"></script>
    <script src="../javascript/index.js"></script>
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/8708952b61.js" crossorigin="anonymous"></script>
</body>

</html>