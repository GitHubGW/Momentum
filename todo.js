const toDoForm=document.querySelector('.js-toDoForm');
const toDoInput=toDoForm.querySelector('input');
const toDoList=document.querySelector('.js-toDoList');

const TODOS_LS="toDos";
let toDosArr=[];

function checkToDo(event){
  const targetBtn=event.target;
  const targetLi=targetBtn.parentNode;
  const span=targetLi.childNodes[1];
  if(span.style.textDecoration==="line-through"){
    span.style.textDecoration="none";
  }else{
    span.style.textDecoration="line-through";
  }
}

function deleteToDo(event){
  const targetBtn=event.target;
  const targetLi=targetBtn.parentNode;

  toDoList.removeChild(targetLi);
  
  const cleanToDos=toDosArr.filter(function(toDosArr){
    return toDosArr.id !== parseInt(targetLi.id);
  });

  toDosArr=cleanToDos;
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDosArr));
}

function paintToDo(text){
  const li=document.createElement('li');
  const span=document.createElement('span');
  const delBtn=document.createElement('button');
  const strong=document.createElement('strong');

  strong.innerText="✅";
  delBtn.innerText="❎";
  span.innerText=text;
  strong.addEventListener('click',checkToDo);
  delBtn.addEventListener('click',deleteToDo);
  li.appendChild(strong);
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  li.id=toDosArr.length+1;

  const toDoObj={
    id: toDosArr.length+1,
    text: text,
  };
  toDosArr.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue=toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value="";
}

function loadToDos(){
  const loadedToDos=localStorage.getItem(TODOS_LS);
  console.log(loadedToDos);

  if(loadedToDos===null){
    // console.log("todo리스트 없음");
  }else if(loadedToDos!==null){
    // console.log("todo리스트 있음");
    const parsedToDos=JSON.parse(loadedToDos);
    console.log("parsedToDos",parsedToDos);
    parsedToDos.forEach(function(parsedToDos){
      paintToDo(parsedToDos.text);
    });
  }

}

function init(){
  loadToDos();
  toDoForm.addEventListener('submit',handleSubmit);
}

init();