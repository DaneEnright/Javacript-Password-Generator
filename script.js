// Assignment Code

var upperCase = [
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
var lowerCase = [
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
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  ":",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

function getPasswordOptions() {
  var length = parseInt(prompt("Select between 8-128 characters?"));
  if (length < 8 || length > 128) {
    alert("Please select between 8 and 128 characters ");
    return;
  }
  var upperCaseChecked = confirm("Do you want to use Upper Case?");
  var lowerCaseChecked = confirm("Do you want to use lower case?");
  var numbersChecked = confirm("Do you want to use numbers");
  var specialChecked = confirm("Do you want to use special symbols");

  if (
    upperCaseChecked === false &&
    lowerCaseChecked === false &&
    numbersChecked === false &&
    specialChecked === false
  ) {
    alert("Please select at least 1 set of characters");
    return;
  }

  var passwordOptions = {
    upperCaseChecked: upperCaseChecked,
    lowerCaseChecked: lowerCaseChecked,
    numbersChecked: numbersChecked,
    specialChecked: specialChecked,
    length: length,
  };

  return passwordOptions;
}

function randomChar(arr) {
  var randomElem = arr[Math.floor(Math.random() * arr.length)];
  return randomElem;
}

function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (passwordOptions.lowerCaseChecked) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(randomChar(lowerCase));
  }
  if (passwordOptions.upperCaseChecked) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(randomChar(upperCase));
  }
  if (passwordOptions.specialChecked) {
    possibleCharacters = possibleCharacters.concat(special);
    guaranteedCharacters.push(randomChar(special));
  }
  if (passwordOptions.numbersChecked) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(randomChar(numbers));
  }

  for (let i = 0; i < passwordOptions.length; i++) {
    var possibleCharacter = randomChar(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join("");
}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
