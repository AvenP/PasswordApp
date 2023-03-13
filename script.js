var characterLength = 8;
var outcomeArr = [];

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['@','#','$','%','^','&','*','(',')','_','+','~','|','}','{','[',']','>','<','/','-','='];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var rightPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if(rightPrompts) {
    var upDatedPassword = generatePassword();
    passwordText.value = upDatedPassword;
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * outcome.length);
    password = password + outcome[randomIndex];
    
  }
  return password;
  
}


function getPrompts(){
  outcome = [];
  
  characterLength = parseInt(prompt("How long would you like your password? 8 to 128 characters. A number please!"));
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password length has to be at least 8 characters and no more than 128 characters. Please try again.")  
    return false;
  } 
  if (confirm("Would you like to include lowercase letters in your password?")) {
    outcome = outcome.concat(lowerCase);
  }
  if (confirm("Would you like to include uppercase letters in your password?")) {
    outcome = outcome.concat(upperCase);
  }
  if (confirm("Would you like to include numbers in your password?")) {
    outcome = outcome.concat(numbers);
  }
  if (confirm("Would you like to include special characters in your password?")) {
      outcome = outcome.concat(specialCharacters);
    }
    return true;
  }
  
  
  