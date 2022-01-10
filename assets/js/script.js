//define character sets

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "$&*-?@~";

//define initial variables

var characters = "";
var length= 8;
var generateBtn = document.querySelector("#generate");

//set password generation function

function generatePassword(length, characters) {
  var password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// write password to the #password input

function writePassword() {
var password = "";
var passwordText = document.querySelector("#password");

//make length = to the number specified in the prompt

length = window.prompt("How many characters would you like to use between 8 and 128?");

//set parameters based on prompt and confirms

if ((length >= 8) && (length <= 128)) {

 var uppercaseuse = window.confirm("Would you like to use upper-case characters?"); 
  if (uppercaseuse == true) {
   characters += uppercase;
    }
  
 var lowercaseuse = window.confirm("Would you like to use lower-case characters?"); 
  if (lowercaseuse == true) {
   characters += lowercase;
  }
  
 var numberuse = window.confirm("Would you like to use numbers?"); 
  if (numberuse == true) {
    characters += numbers;
    }
  
 var specialuse = window.confirm("Would you like to use special characters?"); 
  if (specialuse == true) {
    characters += special;
    }
} 

//set action if number isn't within length parameters needed

else {
  alert("Password must be between 8 and 128 characters");

}

//specify running conditions for function generatePassword
//set passwordText value

  password = generatePassword(length, characters);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);