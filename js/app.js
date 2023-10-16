import { randomGenerate } from "./randomGenerate.js";
import { messages } from "./messages.js";


const btnCookie = document.querySelector('#cookie');
const btnRestart = document.querySelector('#btn-new-cookie');
const home = document.querySelector(".home")
const newScreenMessage = document.querySelector('.messages');
const message = document.querySelector('.message');

function newMessage() {
  home.classList.add("empty")
  newScreenMessage.classList.remove("empty")

  message.textContent = messages[randomGenerate()]
}

function restart() {
  newScreenMessage.classList.add("empty")
  home.classList.remove("empty")
}

btnCookie.addEventListener("click", newMessage)
btnRestart.addEventListener("click", restart)