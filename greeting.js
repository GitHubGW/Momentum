const form=document.querySelector('.js-form');
const input=form.querySelector('input');
const greeting=document.querySelector('.js-greeting');
const USER_LS="currentUser";
const CLASS_ACTIVE="active";


function saveName(text){
  localStorage.setItem(USER_LS, text);
  // paintGreeting(localStorage.getItem(USER_LS));
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue=input.value;
  console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(CLASS_ACTIVE);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(CLASS_ACTIVE);
  greeting.classList.add(CLASS_ACTIVE);
  greeting.innerText=`Hello ${text}`;
}

function loadName(){
  const currentUser=localStorage.getItem(USER_LS);

  if(currentUser === null){
    // console.log("첫 번째 폼 값 없음");
    askForName();
  }else if(currentUser !== null){
    // console.log("첫 번째 폼 값 있음");
    paintGreeting(currentUser);
  };
}

function init(){
  // console.log("init함수 실행");
  loadName();
}
init();