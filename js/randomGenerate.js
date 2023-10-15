import { messages } from "./messages.js";

export function randomGenerate() {
  const randomNumber = Math.round(Math.random() * messages.length);
  return randomNumber
}

//if(messages[i] == undefined) {}

