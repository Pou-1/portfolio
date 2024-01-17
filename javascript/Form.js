/* --------------------------------------- FORM --------------------------------------- */
if(document.getElementById("FormEmail")){
    document.getElementById("FormEmail").addEventListener('input', function(){
        let value = this.value;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        let textResponse = document.getElementById("informationFromEmail");
        if(value.match(validRegex)){
            textResponse.innerText = "Email correct! 😼";
            textResponse.style.color = "var(--good)";
        }
        else{
            textResponse.innerText = "Email incorrect! 😾";
            textResponse.style.color = "var(--bad)";
        }
    });
}

if(document.getElementById("FormPassword")){
    document.getElementById("FormPassword").addEventListener('input', function(){
        let value = this.value;
        let value2 = document.getElementById("FormPassword2").value;
        
        let textResponse = document.getElementById("informationFromPassword");
        if(value == value2){
            textResponse.innerText = "Password perfect! Like you 😼";
            textResponse.style.color = "var(--good)";
        }
        else{
            textResponse.innerText = "Passwords doesn't match! 😾";
            textResponse.style.color = "var(--bad)";
        }
    });
}

if(document.getElementById("FormPassword2")){
    document.getElementById("FormPassword2").addEventListener('input', function(){
        let value = this.value;
        let value2 = document.getElementById("FormPassword").value;
        
        let textResponse = document.getElementById("informationFromPassword");
        if(value == value2){
            textResponse.innerText = "Password perfect! Like you 😼";
            textResponse.style.color = "var(--good)";
        }
        else{
            textResponse.innerText = "Passwords doesn't match! 😾";
            textResponse.style.color = "var(--bad)";
        }
    });
}

if(document.getElementById("ShowHidePassword")){
    document.getElementById("ShowHidePassword").addEventListener('click', function(){
        var x = document.getElementById("FormPassword");
        if (x.type === "password") {
        x.type = "text";
        this.innerText = "Hide";
        } else {
        x.type = "password";
        this.innerText = "Show";
        }
    });
}

if(document.getElementById("ShowHidePassword2")){
    document.getElementById("ShowHidePassword2").addEventListener('click', function(){
        var x = document.getElementById("FormPassword2");
        if (x.type === "password") {
        x.type = "text";
        this.innerText = "Hide";
        } else {
        x.type = "password";
        this.innerText = "Show";
        }
    });
}

if(document.getElementById("FormCardNumber")){
    document.getElementById("FormCardNumber").addEventListener("input", function () {
        const value = this.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
        this.value = value;
    });
    let total = 0;
    for(let i = 0; i < 3; i++){
        let str = this.document.getElementById("price" + i).innerText;
        const intValue = parseInt(str.replace(/\D/g, ''), 10);
        total = total + intValue;
    }
    document.getElementById("priceTotal").innerText = total + "$"; 

    function ChangePrice(){
        for(let i = 0; i < 3; i++){
            const str = document.getElementById("price" + i).innerText;
            const intValue = parseInt(str, 10);
            document.getElementById("priceTotal").innerText += intValue; 
        }
    }
}

/* ------------------------------- END FORM --------------------------------------- */