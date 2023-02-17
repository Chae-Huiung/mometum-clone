const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const input = loginForm.childNodes[1];
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.childNodes[1];
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    input.style.color = "orange";
    input.style.animation = "none";
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function stopBlink(event) {
    todoInput.style.animation = "none";
}
//
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    input.value = savedUsername;
    input.style.animation = "none";
    todoInput.style.animation = "formborder_highligt 2s ease infinite";
    todoInput.addEventListener("focus", stopBlink);
}


















