const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const MAX_TODOS = 10; // 최대 할 일 개수

let toDos = []

//JS 객체를 JSON 문자열로 만들어서 브라우저의 localStorage에 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  
}

//화면과 localStorage에서 li 지우기
function deleteToDo(event){
    //화면상에서 삭제
    const li = event.target.parentElement; //target은 클릭된 HTML의 element = button button의 부모는 li
    li.remove(); //그 li 제거하기
    //localStorage에서 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo의 id가 li의 id와 다른 것을 남기고 싶다. 타입이 달라도 다른 것으로 인식
    saveToDos(); //업데이트
}

//
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; //새로만드는 li에 newTodoObj 객체로 부터 받은 id 부여
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button =document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo); //버튼에 클릭이벤트
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//사용자로부터 입력받은 값 배열과 localStorage에 업데이트
function handleToDoSubmit(event) {
    event.preventDefault(); //브라우저의 자동기능 막기
    const newTodo = toDoInput.value; //사용자로부터 값 입력받기
    toDoInput.value =""; //입력창 초기화
    //입력 받은 값 객체로 만들어서 id 부여
    if (toDos.length >= MAX_TODOS) {
        alert("You can only have up to 10 todos.");
        return; // 할 일 개수가 최대 개수를 초과하면 함수 종료
    }
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //배열에 객체 추가
    paintToDo(newTodoObj); //할일 추가하기
    saveToDos(); //브라우저의 localStorage에 값 추가
}

//form이 제출되는 순간 handleToDoSubmit 함수 실행
toDoForm.addEventListener("submit", handleToDoSubmit);

//savedtoDo 함수에서 저장했던 문자열 받아오기
const savedToDos = localStorage.getItem(TODOS_KEY);

//이 과정이 왜 필요하더라?? 변환시켜주기 위해서였던 것 같은데
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //JSON 문자열을 자바스크립트 객체로 변환, todos key들을 parse해서 저장
    toDos = parsedToDos; //배열에 객체 업데이트
    parsedToDos.forEach(paintToDo);  //parsedToDos에 있는 각각의 item에 대해서 paintToDo 실행
}

