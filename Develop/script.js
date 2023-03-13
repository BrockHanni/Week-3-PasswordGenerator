// 4 sets of characters; Lowercase, Uppercase letters. numbers 0-9. and special characters
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",";",":","[","]","{","}","?","<",">"]

// adding the alerts to select characters to include


function passwordinfo() {
  var length = parseInt(
    prompt("How long would you like your password to be? (8-128")
  );
  if (length < 8) {
    alert("Length must be between 8 & 128 characters")
  }
  if (length > 128){
    alert("Length must be between 8 & 128 characters")
  }

  var includeslower = confirm("Click OK to add lowercase Letters")
  var includesupper = confirm("Click OK to add UPPERCASE letters")
  var includesnumbers = confirm("Click OK to add numbers")
  var includesspecial = confirm("Click OK to add special characters")

  if (
    includeslower === false &
    includesupper === false &
    includesnumbers === false &
    includesspecial === false   
  ) {
  alert("Select at least one character type")
  }
  var passwordinfo = {
    length: length,
    includeslower: includeslower,
    includesupper: includesupper,
    includesnumbers: includesnumbers,
    includesspecial: includesspecial,
  }
  return passwordinfo;
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
