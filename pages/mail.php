<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>aaaa</title>

        <link rel="stylesheet" href="../style/mail.css">
        <?php include('component/navbar.php'); ?>

        <div class="aligne Column">
            <div class="title Column">
                <h1>Mail</h1>
                <hr>
            </div>
            <div class="content aligne">
                <form action="verificator/send_email.php" method="post" class="FormEmail">
                    <div>
                        <label for="email">Email :</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div>
                        <label for="message">Content :</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <input type="submit" value="Send">
                </form>
            </div>
        </div>
        <?php include('component/footer.php'); ?>
    </body>
</html>