//Assignment code here

function generatePassword () {
  var length=10,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$&*-?@~",
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
