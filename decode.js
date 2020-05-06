const inputText = document.querySelector(".input");
const outputText = document.querySelector(".output");
const decodeBtn = document.querySelector(".decode");
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
  outputText.value = "";
  let j = 0;
  let code = "";
  let arr = txt.split(" ");
  for (j = 0; j < arr.length; j++) {
    message +=
      String.fromCharCode(
        65 +
          morseConversion.findIndex((element) => {
            return element === arr[j];
          })
      ) + " ";
    code = "";
  }
};
decodeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let morse = "";
  morse = inputText.value;
  convert(morse);
  outputText.value = message;
});
