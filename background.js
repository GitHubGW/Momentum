const body = document.querySelector("body");
const IMAGE_NUMBER = 6;

// 접속한 기기가 PC인지 모바일인지 구분하는 함수
// 모바일이라면 true를 PC라면 false를 반환한다.
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function handleImgLoad() {
  console.log("Finished loading");
}

function paintImagePC(imgNumber) {
  const image = new Image();
  console.log(image);
  image.src = `images/background${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}
function paintImageMobile(imgNumber) {
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
  const checkMobile = isMobile();

  if (checkMobile === true) {
    paintImageMobile(randomNumber);
  } else {
    paintImagePC(randomNumber);
  }
}
init();
