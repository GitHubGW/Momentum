const body = document.querySelector("body");
const IMAGE_NUMBER = 6;

function handleImgLoad() {
  console.log("Finished loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  // console.log(image);
  image.src = `images/background${imgNumber}.jpeg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
