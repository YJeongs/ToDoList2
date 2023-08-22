const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function logout() {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY); //다시 로그인 했을때도 있도록 수정...
    window.location.reload();
}
logOut.addEventListener("click", logout);

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본동작을 막아줌 (새로고침
    loginForm.classList.add(HIDDEN_CLASSNAME); //폼을 숨김
    const username = loginInput.value; //input의 값을 가져옴
    localStorage.setItem(USERNAME_KEY, username); //local storage에 저장
    paintGreetings(username); //유저 정보가 input으로 부터 옴
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}😊`; //h1에 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1에서 hidden 제거
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername); //유저 정보가 local storage부터 옴
}