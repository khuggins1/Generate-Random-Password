// have to list all abc, 123, special c place in var
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_+";

var u = false;
var c = false;
var l = false;
var a = false;

var userChoice = ""
var randomPassword;

function generatePassword(){
  var u = false;
  var c = false;
  var l = false;
  var a = false;

  // remove console log after finish
var userChoice = ""
var passwordLength = window.prompt("What is the length of your password? Must be between 8 and 128.");
if(passwordLength >= 8 && passwordLength < 129){ //check length of pass
  u = window.confirm("upper-case letters?");
} else {
  window.alert ("Please enter a number between 8 and 128");
} //u c l a should be true after their choice + upper,lower etc
if(u){
  u = true;
  userChoice = userChoice + upperCase;
}
c = window.confirm("Do you want lower-case letters in your password?");
if(c){
  c = true;
  userChoice = userChoice + lowerCase;
}
l = window.confirm("Do you want numbers in your password?");
if(l) {
  l = true;
  userChoice = userChoice + numbers;
}
a = window.confirm("Do you want any special characters?");
if(a) {
  a = true;
  userChoice = userChoice + specialCharacters;
}
//check solution 5 from activities
if(u != true && c != true && l != true && a != true) {
  window.alert("Please select at least one parameter");
  generatePassword();
}

var randomPassword = ""

for (var i= 0; i < passwordLength; i++) {
var random = Math.floor(Math.random() * userChoice.length);
randomPassword = randomPassword + userChoice.charAt(random);
}

return randomPassword;
}

// i shouldnt have to touch anything below
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






