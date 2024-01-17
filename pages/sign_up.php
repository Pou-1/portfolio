<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>SignUp</title>

        <link rel="stylesheet" href="../style/form.css">

        <?php include('component/navbar.php'); ?>

        <div class="FormDiv">
            <form action="" method="get" class="form-Global">
                <h1>You</h1>
                <div class="flex">
                    <div class="left-section">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="FormName" placeholder="Stephane Pizza" required />
                        
                        <label for="birth">Birthday</label>
                        <input type="date" name="birth" id="FormBirth" placeholder="18/01/2002" required />

                        <label for="email">Email</label>
                        <input type="email" name="email" id="FormEmail" placeholder="cutie@pie.com" required />
                        <p id="informationFromEmail"></p>
                    </div>
                
                    <div class="right-section">
                        <label for="pseudo">Pseudo</label>
                        <input type="text" name="pseudo" id="FormPseudo" placeholder="Hoopy" required />
                        
                        <label for="password">Password</label>
                        <div class="password-container">
                            <input type="password" name="password" id="FormPassword" placeholder="*********" required />
                            <input type="checkbox" class="ShowHidePassword" id="ShowHidePassword"/>
                        </div>

                        <label for="password2">Confirm Password</label>
                        <div class="password-container">
                            <input type="password" name="password2" id="FormPassword2" placeholder="*********" required />
                            <input type="checkbox" class="ShowHidePassword" id="ShowHidePassword2" />
                        </div>
                        <p id="informationFromPassword"></p>
                    </div>
                </div>

                <h1>Payment</h1>
                <div class="FormPayment">
                    <div class="RowFormPayment">
                        <label for="FormCardNumber">Card number</label>
                        <input type="text" name="FormCardNumber" id="FormCardNumber" placeholder="2003 1020 2301 120" maxlength="18" required />
                    </div>
                    <div class="RowFormPayment">
                        <label for="FormCardExpiry">Expiry</label>
                        <input type="date" name="FormCardExpiry" id="FormCardExpiry" placeholder="20/28" required />
                    </div>
                    <div class="RowFormPayment">
                        <label for="FormCardPassword">CVV</label>
                        <input type="password" name="FormCardPassword" id="FormCardPassword" placeholder="***" maxlength="3" required />
                    </div>
                </div>

                <div class="Prices">
                    <div class="inline">
                        <p class="textleft">Subtotal</p>
                        <p class="textright" id="price0">20$</p>
                    </div>
                    <div class="inline">
                        <p class="textleft SoftColor">Tax</p>
                        <p class="textright SoftColor" id="price1">10$</p>
                    </div>
                    <div class="inline">
                        <p class="textleft">Shipping</p>
                        <p class="textright" id="price2">0$</p>
                    </div>
                    <div class="inline">
                        <p class="textleft bold">Total</p>
                        <p class="textright" id="priceTotal">0$</p>
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