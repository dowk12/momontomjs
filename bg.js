const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    console.log(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumeber = genRandom();
    paintImage(randomNumeber)
}

init();