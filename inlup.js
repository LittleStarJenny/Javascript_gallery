'use strict'

let startIndex = 0;
let currentIndex;
let smallImg;

window.addEventListener("load", function () {
smallImg = document.getElementById("thumbnailrow").getElementsByTagName("img");

for (let i = 0; i < smallImg.length; i++) {
smallImg[i].addEventListener("click", thumbClickListener);
smallImg[i].setAttribute("data-index", i);
smallImg[i].onclick = function () {
    console.log(smallImg[i]);
    try {
	 document.querySelector('.thumbBorder').classList.remove('thumbBorder');    
    } catch(e) {
    }
        smallImg[i].classList.add('thumbBorder');
    }
     
}

currentIndex = startIndex;
displayImgFromIndex(currentIndex);

document.getElementById("headpicture").addEventListener("click", headClickListener);
document.getElementById("overlay").addEventListener("click", removeOverlay);
document.addEventListener("keydown", keyListener);


document.getElementById("nextImg").addEventListener("click", function(myEvent){
    myEvent.stopPropagation();
    displayNextImg();
});
document.getElementById("prevImg").addEventListener("click", function(myEvent){
    myEvent.stopPropagation();
    displayPreviousImg();
});
    });


//Mina funktioner
function keyListener (e) {
    if (e.key == "ArrowLeft") {
        console.log("Du tryckte på vänsterknappen!")
        displayPreviousImg();
    }

    if (e.key == "ArrowRight") {
        console.log("Du tryckte på högerknappen!")
        displayNextImg();
    }
}

function displayNextImg() {
    currentIndex = currentIndex + 1;
    console.log(currentIndex);
    if (currentIndex >= smallImg.length) {
        currentIndex = 0;
    }
    displayOverlayImageFromIndex(currentIndex);
}

function displayPreviousImg() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        // Högsta index i en numerisk 0-indexerad array är length - 1
        currentIndex = smallImg.length - 1;
    }
    displayOverlayImageFromIndex(currentIndex);
    // Till slut ska vi sätta ny src på big img. Men till vilket värde?
}

function displayImgFromIndex(index) {
    document.getElementById("headpicture").src = "imgs/" + smallImg[index].getAttribute("data-bigimgsrc") ;
}

function displayOverlayImageFromIndex(index) {
    document.querySelector("#overlay .overlay-image").src = "imgs/" + smallImg[index].getAttribute("data-bigimgsrc") ;
}

function thumbClickListener() {
    currentIndex = parseInt(this.dataset.index);
    document.getElementById("headpicture").src = "imgs/" + this.dataset.bigimgsrc; 
    
}

function headClickListener() {
    let elem = document.querySelector("#overlay .overlay-image");
    elem.src = this.src;
    showOverlay();
}

function showOverlay() {
    document.getElementById("overlay").classList.add("visible");
}

/* Dölj #overlay genom att ta bort klassen visible */
function removeOverlay() {
    document.getElementById("overlay").classList.remove("visible");

};