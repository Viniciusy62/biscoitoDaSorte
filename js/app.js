import { randomGenerate } from "./randomGenerate.js";
import { messages } from "./messages.js";


export const app = document.querySelector('#app');
export const cookie = document.querySelector('#cookie');

const btnRestartApp = `
<div>
  <button id="btn-new-cookie">Abrir outro biscoito</button>
</div>
`

export function newMessage() {
  return app.innerHTML = `
  <h1 class="title">Aqui está a sua sorte de hoje:</h1>
  
  <p class="message">${messages[randomGenerate()]}</p>
  
  <img src="./images/cookie-open.svg" alt="Biscoito da Sorte aberto" class="cookie" ">

  ${btnRestartApp}
  `
}

cookie.addEventListener("click", newMessage)
