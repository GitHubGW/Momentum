const clockContainer=document.querySelector('.js-clock');
const clockTitle=clockContainer.querySelector('.js-title');
const dateTitle=clockContainer.querySelector('.js-date');

// console.log(clockContainer);
// console.log(clockTitle);
// console.log(dateTitle);

function getTime(){
  const date=new Date();
  const minutes=date.getMinutes();
  const hours=date.getHours();
  const seconds=date.getSeconds();
  const year=date.getFullYear();
  const month=date.getMonth()+1;
  const day=date.getDate();

  dateTitle.innerHTML=`${year}년 ${month}월 ${day}일`;
  clockTitle.innerHTML=`${hours<10 ? `0${hours}` : `${hours}`}시 ${minutes<10 ? `0${minutes}` : `${minutes}`}분 ${seconds<10 ? `0${seconds}` : seconds}초`;
  
  // if(seconds>9){
  //   clockTitle.innerHTML=`${hours}시 ${minutes}분 ${seconds}초`;
  // }else if(seconds<=9){
  //   clockTitle.innerHTML=`${hours}시 ${minutes}분 0${seconds}초`;
  // }
}

function init(){
  // console.log("init함수 실행");
  // getTime();
  setInterval(getTime, 1000);
}

init();

