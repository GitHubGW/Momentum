const weather=document.querySelector('.js-weather');
const weatherTemp=document.querySelector('.js-weather-temp');
const weatherMain=document.querySelector('.js-weather-main');

const API_KEY='ff26d804d0d9d838fc3e57227eed4bcc';
const COORDS='coords';


function getWeather(lat, lon){
  // console.log(lat, lon);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
      // console.log("fetch 성공");
      return response.json();
    }).then(function(json){
      console.log(json);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      const temperature=Math.floor(json.main.temp);
      const place=json.name;
      const country=json.sys.country;
      const main=json.weather[0].main;

      weatherTemp.innerText=`${temperature}°`;
      weatherMain.innerText=`${main}`;
      weather.innerText=`${place}, ${country}`;
    }).catch(function(error){
      // console.log("fetch 실패");
    });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError(position){
  console.log("handleGeo실패");
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
    askForCoords();
  }else if(loadedCoords !== null){
    const parsedCoords=JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();
}
init();