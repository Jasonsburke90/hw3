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
  // assign variable to the length of the password
  let pwLength = prompt(
    "How long should the password be? (Length must be between 8 and 128 characters)"
  );
  // todo add if/else for if password is within the correct parameters or not
  // define password array
  let password = [];
  // create characters array from chosen arrays  (add code to pull specific arrays with y/n prompts)
  let characters = [];
  characters.push(lcLetters);
  characters.push(ucLetters);
  characters.push(numbers);
  characters.push(specialChars);
  console.log(characters);
  // merge the separate arrays added to the characters array into one
  let mergedChars = [].concat.apply([], characters);
  console.log(mergedChars);
  // create a random password from the merged characters array
  // loop through the array based on length
  for (let i = 0; i < pwLength; i++) {
    // randomize formula
    let random = Math.floor(Math.random() * mergedChars.length);
    // push the random mergedChars array item to the password array
    password.push(mergedChars[random]);
  }

  // convert password array back to string
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
