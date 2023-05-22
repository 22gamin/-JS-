const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //js에서의 모든것을 string으로 바꿔줌
}
function deleleToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    //toDo는 toDos DB에 있는 요소 중 하나
    saveToDos();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleleToDo);
    li.appendChild(span);  //자식추가
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
// event의 반응값


const savedToDos = localStorage.getItem(TODOS_KEY);
 
if (savedToDos !== null){
    const parsedToDos =JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // 배열의 값마다 함수를 돌려줌
}
//local storage는 database가 아니라 array들을 복사해두는 곳이다.
// toDos가 데이터베이스
// Date.now()는 (1000분의 1초)를 주는 함수-> 랜덤한 숫자를 줌

function sexyFilter(){

}
//true를 리턴해야함 
//false를 리턴하면 그 item은 새 배열에 포함하지 않을거임

[1,2,3,4].filter(sexyFilter) //sexyFilter를 4번 부름
// filter가 sextFilter가 true면 저장하고 false는 제외하고 배열을 만듦.
// filter 사용
// 원래 배열에서 지우고 싶은 것만 지우는게 아니라
// 지우고 싶은 것만 빼고 새로운 배열을 만든다.

// const todos = [{text:"lalala"},{text:"lololo"}]
// function sexyFilter(todo){ return todo.text !== "lololo"}
// lololo가 아니면 true를 리턴함
// todos.filter(sexyFilter)
// --> lololo 삭제
// --> {text: "lalala"}
