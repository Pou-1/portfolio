/* --------------------------------------- INDEX --------------------------------------- */
const boxes = document.querySelectorAll('.Box');
let index = 0;

function animateBoxes() {
  if (index < boxes.length) {
    boxes[index].style.opacity = '1';
    boxes[index].style.flexBasis = '100px';
    index++;
    setTimeout(animateBoxes, 300);
  }
}

if(document.getElementById("List")){
    document.getElementById("List").addEventListener('mouseover', function(){
        let child = "ListLi";
        for(let i = 0; i < document.getElementById("List").children.length; i++) {
            setTimeout(function() {
                document.getElementById(child + i).style.display = "block";
            }, i * 40); 
        }
    });

    document.getElementById("List").addEventListener('mouseout', function(){
        let child = "ListLi";
        for(let i = 0; i < document.getElementById("List").children.length; i++) {
            setTimeout(function() {
                document.getElementById(child + i).style.display = "none";
            }, i * 40); 
        }
    });
}
function iterateList(){
let child = "ListLi";
    for(let i = 0; i < document.getElementById("List").children.length; i++) {
        setTimeout(function() {
            document.getElementById(child + i).style.display = "block";
        }, i * 40); 
    }
}

if(document.getElementById("AppearAnimationButton")){
    document.getElementById("AppearAnimationButton").addEventListener("click", function () {
        if(this.innerText == "Apparaitre"){
            this.innerText = "Disparaitre";
            for(let i = 0; i < children.length; i++){
                document.getElementById("AnimationDiv").children[i].style.animation = "roll-in-left " + i/3 + "s ease-out both";
            }
        }else{
            this.innerText = "Apparaitre";
            for(let i = 0; i < children.length; i++){
                document.getElementById("AnimationDiv").children[i].style.animation = "slide-out-top " + i/3 + "s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
            }
        }
    });
}

let children = document.getElementById("AnimationDiv").children;

for(let i = 0; i < children.length; i++){
    children[i].addEventListener("mouseover", function () {
        children[i].style.animation = "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both";
    });
    children[i].addEventListener("mouseout", function () {
        children[i].style.animation = "scale-back-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both";
    });
    children[i].addEventListener("click", function () {
        children[i].style.animation = "color-change-5x 8s linear infinite alternate both";
    });
}

/* --------------------------------------- END INDEX --------------------------------------- */
