const weather=document.querySelector('.js-weather');

const API_KEY='ff26d804d0d9d838fc3e57227eed4bcc';
const COORDS='coords';


function getWeather(lat, lon){
  console.log(lat, lon);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
      console.log("fetch 성공");
      return response.json();
    }).then(function(json){
      console.log(json);
      const temperature=json.main.temp;
      const place=json.name;
      console.log(temperature);
      console.log(place);
      weather.innerText=`${temperature}, ${place}`;
    }).catch(function(error){
      console.log("fetch 실패");
    });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError(position){
  // console.log("handleGeo실패");
}

function handleGeoSuccess(position){
  // console.log("handleGeo성공");
  const latitude=position.coords.latitude;
  const longitude=position.coords.longitude;
  const coordsObj={
    latitude: latitude,
    longitude: longitude,
  }
  console.log(coordsObj);
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
  const loadedCoords=localStorage.getItem(COORDS);
  if(loadedCoords === null){
    // console.log("loadedCoords 없음");
    askForCoords();
  }else if(loadedCoords !== null){
    // console.log("loadedCoords 있음");
    const parsedCoords=JSON.parse(loadedCoords);
    console.log(parsedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();
}
init();