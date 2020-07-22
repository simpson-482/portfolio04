// Assignment Code

//var generateBtn = document.querySelector("#generate");


// let's prompt the user for his criteria ad generate a ne password

function generatePassword() {

    let specialChars   = ["!","#","$","%","&","'","\,","(",")","*","+","-",".","/",":",";","<",">","=","?","@","[","]","\"","^","_","`","{","}","|","~"];
    let alpabeticChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let myTypeOfCharsPrompts = ['Would you like to include lowercase characters in your new password? (y|n)',
        'Would you like to include uppercase characters in your new password? (y|n)',
        'Would you like to include numeric characters in your new password? (y|n)',
        'Would you like to include special characters in your new password? (y|n)'];

    let myLengthPrompt = 'How long would you like your password to be? (Please choose from 8 to 128 characters)';

    let myAnswers = [];
    let myAnswer = '';
    let myDefaultCharLength = '8';
    let myCharLength = '';
    let gotAtLeastOneY = false;
    let numberFrom8to128 = false;
    let myNewPassword = '';
    let myRandom = '';

    do {

        alert('OK, let\'s get the criteria selections for the new password....');

        gotAtLeastOneY = false;
        myAnswers = [];

        for (let myTypeOfCharsPrompt of myTypeOfCharsPrompts) {

            myAnswer = prompt(myTypeOfCharsPrompt, '');
            if (myAnswer === 'y') {
                gotAtLeastOneY = true;
            }
            else {
                myAnswer = 'n';
            }
            myAnswers.push(myAnswer);
        }

        //for (let i = 0; i < myAnswers.length; i++) {
        //    if (myAnswers[i] === 'y') {
        //        gotAtLeastOneY = true;
        //    }
        //}

    } while (!gotAtLeastOneY);

    // let's check what we got
    console.log(myAnswers);

    do {

        alert('OK, let\'s get the character length for the new password....');

        numberFrom8to128 = false;

        myCharLength = prompt(myLengthPrompt, myDefaultCharLength);
        if (myCharLength >= 8 && myCharLength <= 128) {
            numberFrom8to128 = true;
        }

    } while (!numberFrom8to128);

    // let's check what we got
    console.log(myCharLength);

    // at this point we got all the info we need from the user
    // so let's generate and return the new password

    for (i = 0; i < myCharLength; i++) {

        // get a random number between 0 - 3, and keep looping until
        // we get a number that matches an index of a 'y' in the
        // myAnswers array, ex. 0,2 for 'y','n','y','n'

        do {
            // get a random number between 0 -3
            myRandom = Math.floor(Math.random() * 4);
            //console.log('myRandom: ' + myRandom);
        }   while (myAnswers[myRandom] === 'n'); // keep looping until we hit upon something that is not equal to 'n' OR
        //} while (myAnswers[myRandom] !== 'y'); // keep looping until we hit upon something that is equal to 'y'

        switch(myRandom) {

            case 0: // alphabetic lowercase character
                myNewPassword += alpabeticChars[Math.floor(Math.random() * alpabeticChars.length)];
                break;
            case 1: // alpahbetic uppercase character
                myNewPassword += alpabeticChars[Math.floor(Math.random() * alpabeticChars.length)].toUpperCase();
                break;
            case 2: // single digit number from 0 - 9
                myNewPassword += Math.floor(Math.random() * Math.floor(10));
                break;
            case 3: // special character
                myNewPassword += specialChars[Math.floor(Math.random() * specialChars.length)];
                break;
            default: // what??^&^?
                console.log('What what what what what???');
                break;

        }
    }

    return myNewPassword;

}

// generate the new password and then place it in the textarea element

function writePassword() {

    // 1 .call the function to generate the new password
    let myNewPassword = generatePassword();

    // 2. get the element with id="password"
    //let passwordText = document.querySelector("#password");

    // 3. place the generated myNewPassword into the elemets textarea
    //passwordText.value = myNewPassword;

    // OR replace 2. and 3. with this one statement:
    document.querySelector("#password").value = myNewPassword;
}

// Add an event listener to the generate button
//generateBtn.addEventListener("click", writePassword);

// OR combine the statement at the top and the statement above with this:
document.querySelector("#generate").addEventListener("click", writePassword);