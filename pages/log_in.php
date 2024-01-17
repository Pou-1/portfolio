<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Connexion</title>

        <link rel="stylesheet" href="../style/form.css">


        <?php include('component/navbar.php'); ?>


        <div class="FormDiv">
            <form action="" method="get" class="form-Global">
                <h1>You</h1>
                <div class="flex">
                    <label for="pseudo">Pseudo</label>
                    <input type="text" name="pseudo" id="FormPseudo" placeholder="Hoopy" required />
                    
                    <label for="password">Password</label>
                    <div class="password-container">
                        <input type="password" name="password" id="FormPassword" placeholder="*********" required />
                        <input type="checkbox" class="ShowHidePassword" id="ShowHidePassword"/>
                    </div>
                </div>
                <div class="center DivSubmit">
                    <button type="submit" value="Valider!" class="Submit">Valider!</button>
                </div>
            </form>
        </div>

        <?php include('component/footer.php'); ?>

        <script src="../javascript/Form.js"></script>
    </body>
</html>