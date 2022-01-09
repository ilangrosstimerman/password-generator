//Assignment code here

//define character sets
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "$&*-?@~";

//conditionals and confirmations
let length = prompt("How many characters would you like to use between 8 and 128?");

if (length < 8 || length > 128) {
  alert("Password must be between 8 and 128 characters");
  location.reload()
  }

else{
let uppercaseuse = confirm("Would you like to use upper-case characters?");
let lowercaseuse = confirm("Would you like to use lower-case characters?");
let numberuse = confirm("Would you like to use numbers?");
let specialuse = confirm("Would you like to use special characters?");
let initialvalue = "";
}


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
