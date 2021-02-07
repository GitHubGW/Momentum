const toDoForm=document.querySelector('.js-toDoForm');
const toDoInput=toDoForm.querySelector('input');
const toDoList=document.querySelector('.js-toDoList');

const TODOS_LS="toDos";
let toDosArr=[];


function deleteToDo(event){
  // console.log(event);
  // console.dir(event.target);
  const targetBtn=event.target;
  const targetLi=targetBtn.parentNode;

  toDoList.removeChild(targetLi);
  // console.log("toDosArr",toDosArr);
  
  const cleanToDos=toDosArr.filter(function(toDosArr){
    // console.log(toDosArr.id);
    // console.log(targetLi.id);
    return toDosArr.id !== parseInt(targetLi.id);
  });
  console.log("cleanToDos",cleanToDos);
  
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

  delBtn.innerText="❌";
  delBtn.addEventListener('click',deleteToDo);
  span.innerText=text;
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