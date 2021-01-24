const body = document.querySelector("body");

const IMG_NUMBER = 12;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    //image.addEventListener("loaded", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function changeBg(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
    setInterval(changeBg, 8000);
}

init();