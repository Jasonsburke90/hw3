// Assignment Code
var generateBtn = document.querySelector("#generate");

// 1b. create arrays of letters (lowercase and uppercase), numbers, and symbols
let lcLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let ucLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "`",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
];

// generatePassword
// return a final password as a string
function generatePassword() {
  // 1. assign a variable to the length of the password
  let pwLength = prompt(
    "How long should the password be? (Length must be between 8 and 128 characters)"
  );
  let password = [];
  // 1a. create a password with that length
  // 1c. loop through array of letters
  for (let i = 0; i < pwLength; i++) {
    // 1d. push each letter array into password array
    password.push(lcLetters[i]);
  }

  // 1e. create a random 10 letter password
  let random = Math.floor(Math.random() * password.length);
  console.log(random, password[random]);

  // 1f. convert password array back to string
  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
