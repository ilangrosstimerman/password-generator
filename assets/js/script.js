//Assignment code here
let generateBtn = document.querySelector("#generate");

//prompts and confirmations
let length = prompt("How many characters would you like to use between 8 and 128?");
let uppercaseuse = confirm("Would you like to use upper-case characters?");
let lowercaseuse = confirm("Would you like to use lower-case characters?");
let numberuse = confirm("Would you like to use numbers?");
let specialuse = confirm("Would you like to use special characters?");
let password = "";

//define character sets
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "$&*-?@~";

//define generatePassword function
function generatePassword () {
  var length = 10,

      password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt (Math.floor(Math.random() * charset.length));
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
