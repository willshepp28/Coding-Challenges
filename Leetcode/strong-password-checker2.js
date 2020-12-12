/**
 * 
 * Strong Password Checker
Hard

241

770

Add to List

Share
A password is considered strong if the below conditions are all met:

It has at least 6 characters and at most 20 characters.
It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
It does not contain three repeating characters in a row (i.e., "...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.

In one step, you can:

Insert one character to password,
Delete one character from password, or
Replace one character of password with another character.
 

Example 1:

Input: password = "a"
Output: 5
Example 2:

Input: password = "aA1"
Output: 3
Example 3:

Input: password = "1337C0d3"
Output: 0
 

Constraints:

1 <= password.length <= 50
password consists of letters, digits, dot '.' or exclamation mark '!'.
 */


 /**
 * @param {string} password
 * @return {number}
 */

// let hasLowercase = false;
// let hasUppercase = false;
// let hasDigit = false;
// let characterIsRepeating = false;
// let greaterThanEqualToSix = false;
// let lessThanEqualTo20 = false;
// let previousCharacters = [];
// let number = 6;

// // checks if value is lowercase
// let checkIfCharacterIsLowerCase = (character) => {
//     if(isNaN(character) && character === character.toLowerCase() && !hasLowercase){
//         number--;
//         hasLowercase = true;
//     }
// };

// // checks if value is uppercase
// let checkIfCharacterUpperCase = (character) => {
//     if(isNaN(character) && character === character.toUpperCase() && !hasUppercase){
//         number--;
//         hasUppercase = true;
//     }
// }

// let checkIfCharacterIsDigit = (character) => {
//     if(character >= "0" && character <= "9" && !hasDigit){
//         number--;
//         hasDigit = true;
//     }
// }


// let isGreaterThen6LessThan20 = (string) => {
//     if(string.length >= 6 && string.length <= 20) {
//         number--;
//     }
// };

// let checkIfGreaterThenOrEqualTo6 = (string) => {
//     if(string.length >= 6) {
//         greaterThanEqualToSix = true;
//         number--;
//     }
// };

// let checkIfLessThan20 = (string) => {
//     if(string.length >= 6 && string.length <= 20) {
//         lessThanEqualTo20 = true;
//         number--;
//     }
// };


// let checkIfCharacterRepeatThreeTimes = (currentIndex, string, character) => {
//     if(string.length <= 1) return;

//     if(currentIndex == 0) { 
//         previousCharacters.push(character)
//         return;
//     };

//     // if this isnt the first cycle and the previousCharacter matches the current character, add current character to previous characters array
//     if(currentIndex > 0 && !characterIsRepeating && previousCharacters[0] === character) {
//         previousCharacters.push(character);
//         characterIsRepeating = true;
//     } else if(currentIndex > 0 && characterIsRepeating && previousCharacters.length === 2 && previousCharacters[1] === character){
//         previousCharacters.push(character)
//     }else {
//         characterIsRepeating = false;
//         previousCharacters = [];
//         previousCharacters.push(character)
//     }

//     if(currentIndex + 1 === string.length && !characterIsRepeating && hasLowercase && hasUppercase && hasDigit && greaterThanEqualToSix && lessThanEqualTo20){
//         number--;
//     }
//     console.log(previousCharacters)
// }




var strongPasswordChecker = function(password) {

    let hasLowercase = false;
let hasUppercase = false;
let hasDigit = false;
let characterIsRepeating = false;
let greaterThanEqualToSix = false;
let lessThanEqualTo20 = false;
let previousCharacters = [];
let number = 6;

// checks if value is lowercase
let checkIfCharacterIsLowerCase = (character) => {
    if(isNaN(character) && character === character.toLowerCase() && !hasLowercase){
        number--;
        hasLowercase = true;
    }
};

// checks if value is uppercase
let checkIfCharacterUpperCase = (character) => {
    if(isNaN(character) && character === character.toUpperCase() && !hasUppercase){
        number--;
        hasUppercase = true;
    }
}

let checkIfCharacterIsDigit = (character) => {
    if(character >= "0" && character <= "9" && !hasDigit){
        number--;
        hasDigit = true;
    }
}


let isGreaterThen6LessThan20 = (string) => {
    if(string.length >= 6 && string.length <= 20) {
        number--;
    }
};

let checkIfGreaterThenOrEqualTo6 = (string) => {
    if(string.length >= 6) {
        greaterThanEqualToSix = true;
        number--;
    }
};

let checkIfLessThan20 = (string) => {
    if(string.length >= 6 && string.length <= 20) {
        lessThanEqualTo20 = true;
        number--;
    }
};


let checkIfCharacterRepeatThreeTimes = (currentIndex, string, character) => {
    if(string.length <= 1) return;

    if(currentIndex == 0) { 
        previousCharacters.push(character)
        return;
    };

    // if this isnt the first cycle and the previousCharacter matches the current character, add current character to previous characters array
    if(currentIndex > 0 && !characterIsRepeating && previousCharacters[0] === character) {
        previousCharacters.push(character);
        characterIsRepeating = true;
    } else if(currentIndex > 0 && characterIsRepeating && previousCharacters.length === 2 && previousCharacters[1] === character){
        previousCharacters.push(character)
    }else {
        characterIsRepeating = false;
        previousCharacters = [];
        previousCharacters.push(character)
    }

    if(currentIndex + 1 === string.length && !characterIsRepeating && hasLowercase && hasUppercase && hasDigit && greaterThanEqualToSix && lessThanEqualTo20){
        number--;
    }
    console.log(previousCharacters)
}



    checkIfLessThan20(password);
    checkIfGreaterThenOrEqualTo6(password);
    //isGreaterThen6LessThan20(password);
    for(let i = 0; i < password.length;i++) {

        checkIfCharacterIsLowerCase(password[i]);
        checkIfCharacterUpperCase(password[i]);
        checkIfCharacterIsDigit(password[i]);

        checkIfCharacterRepeatThreeTimes(i, password, password[i])
    
    }
    return number;
};



console.log(strongPasswordChecker("aA123"))
// console.log(strongPasswordChecker("1337C0d3"));
// console.log(strongPasswordChecker("aA1"))
// console.log(strongPasswordChecker("A"))
// console.log(strongPasswordChecker("A"))
// console.log(strongPasswordChecker("House is aabbccc"))