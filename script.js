// Assignment Code
var generateBtn = document.querySelector("#generate");

let specialChars   = ["!","#","$","%","&","'","\,","(",")","*","+","-",".","/",":",";","<",">","=","?","@","[","]","\"","^","_","`","{","}","|","~"];
let lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let userAnswer1 = "";
let userAnswer2 = "";
let userAnswer3 = "";
let userAnswer4 = "";
let userAnswer5 = "";

let needLowerCase = false;
let needUpperCase = false;
let needNumbers = false;
let needSpecialCharacters = false;
let goodNumber = false;


let generatedPassword = "";

function generatePassword() {

    
    do {
        needLowerCase = false;
        needUpperCase = false;
        needNumbers = false;
        needSpecialCharacters = false;
        goodNumber = false;
    
        userAnswer1 = prompt("Would you like to add lowercase letters to the password? (y|n)", "");
        userAnswer2 = prompt("Would you like to add uppercase letters to the password? (y|n)", "");
        userAnswer3 = prompt("Would you like to add numerical characters to the password? (y|n)", "");
        userAnswer4 = prompt("Would you like to add symbol characters to the password? (y|n)", "");

        if (userAnswer1 === 'y') {
            needLowerCase = true;
        }

        if (userAnswer2 === 'y') {
            needUpperCase = true;
        }

        if (userAnswer3 === 'y') {
            needNumbers = true;
        }

        if (userAnswer4 === 'y') {
            needSpecialCharacters = true;
        }
    } while (userAnswer1 === 'n' && userAnswer2 === 'n' && userAnswer3 === 'n' && userAnswer4 === 'n');


    do {
        userAnswer5 = prompt("Please select a length for your password between 8 and 128 characters", "12");

        if (userAnswer5 >= 8 && userAnswer5 <= 128) {
            goodNumber = true;
        }
    } while(userAnswer5 < 8 || userAnswer5 > 128);
    

    
    generatedPassword = "";
    let count = 0;
    
    do {

        if (needLowerCase) {
            generatedPassword += lowerChars[Math.floor(Math.random() * lowerChars.length)];
            count += 1;
        }

        if (count >= userAnswer5) {
            break;
        }

        if (needUpperCase) {
            generatedPassword += upperChars[Math.floor(Math.random() * upperChars.length)];
            count += 1;
        }

        if (count >= userAnswer5) {
            break;
        }

        if (needNumbers) {
            generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
            count += 1;
        }

        if (count >= userAnswer5) {
            break;
        }

        if (needSpecialCharacters) {
            generatedPassword += specialChars[Math.floor(Math.random() * specialChars.length)];
            count += 1;
        }

        if (count >= userAnswer5) {
            break;
        }

    } while (count <= userAnswer5);

    return generatedPassword;
}

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

