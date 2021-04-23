// Assignment Code

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!","#", "$", "%", "&", "(", ")", "*", "+", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", ":", "^", "_", "`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {
  var length = prompt("How many characters do you want in your password?");

  return
  
}

function upperCase() {
  var upCase = prompt("Do you want Upper Case characters in password?");
  var upperCase = confirm("Do you want Upper Case characters in password?");
  return
}

function lowerCase(){
  var lowCase = prompt("Do you want Lower Case characters in password?");
  var lowerCase = confirm("Do you want Lower Case characters in password?");
  return
}

function numbers() {
  var num = prompt("Do you want number characters in password");
  var numbers = confirm("Do you want number characters in password");
  return
}

function special() {
  var spec = ("Do you want special charcters in password");
  var special = confirm("Do you want special charcters in password");
  return
}

// getPasswordOptions()



function generatePassword() {
  var passwordOptions = getPasswordOptions()
  
  return potenPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






function randomChar(arr) {
  return arr[Math.floor(Math.random() * await.length)];
}

function generatePassword(length) {
    var length = prompt(" select between 8-128 characters ");
 for (i = 0; i <= length; i++) {
   password = password.concat(randomChar(finalArray));
 }



}