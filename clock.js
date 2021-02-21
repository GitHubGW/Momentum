const clockContainer=document.querySelector('.js-clock');
const clockTitle=clockContainer.querySelector('.js-title');
const dateTitle=clockContainer.querySelector('.js-date');

const monthArr=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const dayOfWeekArr=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getTime(){
  const date=new Date();
  const minutes=date.getMinutes();
  const hours=date.getHours();
  const seconds=date.getSeconds();
  const year=date.getFullYear();
  const month=date.getMonth();
  const day=date.getDate();
  const dayOfWeek=date.getDay();

  const currentMonth=monthArr[month];
  const currentDay=dayOfWeekArr[dayOfWeek];

  dateTitle.innerHTML=`${currentDay}, ${currentMonth} ${day<10 ? `0${day}` : day}`;
  clockTitle.innerHTML=`${hours<10 ? `0${hours}` : `${hours}`}:${minutes<10 ? `0${minutes}` : `${minutes}`}:${seconds<10 ? `0${seconds}` : seconds}`;
  
  // if(seconds>9){
  //   clockTitle.innerHTML=`${hours}시 ${minutes}분 ${seconds}초`;
  // }else if(seconds<=9){
  //   clockTitle.innerHTML=`${hours}시 ${minutes}분 0${seconds}초`;
  // }
}

function init(){
  setInterval(getTime, 1000);
}

init();

