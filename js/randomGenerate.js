import { messages } from "./messages.js";

export function randomGenerate() {
  const randomNumber = Math.round(Math.random() * messages.length);

  if(randomNumber == messages.length) {
    return randomNumber - 1
  }
  return randomNumber
}
