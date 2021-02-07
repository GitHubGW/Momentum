const API_KEY='ff26d804d0d9d838fc3e57227eed4bcc';
const COORDS='coords';


function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoError(position){
  console.log("handleGeo실패");
  console.log(position);
}

function handleGeoSuccess(position){
  console.log("handleGeo성공");
  const latitude=position.coords.latitude;
  const longitude=position.coords.longitude;
  const coordsObj={
    latitude: latitude,
    longitude: longitude,
  }
  console.log(coordsObj);
  saveCoords(coordsObj);
}

function getWeather(){
  
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
  const loadedCoords=localStorage.getItem(COORDS);
  if(loadedCoords === null){
    console.log("loadedCoords 없음");
    askForCoords();
  }else if(loadedCoords !== null){
    console.log("loadedCoords 있음");
    getWeather();
  }
}

function init(){
  loadCoords();
}
init();