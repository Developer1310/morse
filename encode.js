const inputText = document.querySelector(".input");
const outputText = document.querySelector(".output");
const encodeBtn = document.querySelector(".encode");
let message = "";
let morse = "";
let morseConversion = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "--.-",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
window.onload = () => {
  inputText.value = "";
  outputText.value = "";
};
const convert = (txt) => {
  let j = 0;
  txt = txt.toUpperCase();
  for (j = 0; j < txt.length; j++) {
    if (txt[j] == " ") {
      morse += " ";
    } else morse += morseConversion[txt.charCodeAt(j) - 65] + " ";
  }
};
encodeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let text = inputText.value.toString();
  convert(text);
  outputText.value = morse;
});
