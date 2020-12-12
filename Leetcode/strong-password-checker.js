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


let checkIfLowerCase = (value, hasLowercase) => {
    if(value[i] === value[i].toLowerCase() && !hasLowercase){
        number--;
        hasLowercase = true;
    }
};


var strongPasswordChecker = function(password) {
    let hasLowercase = false;
    let hasUppercase = false;
    let hasDigit = false;
    let characterIsRepeating = false;
    let previousCharacters = [];
    let number = 6;


    if(password.length >= 6 && password.length <= 20) {
        number--;
    }
    
    
    for(let i = 0; i < password.length;i++) {


        if(password[i] === password[i].toLowerCase() && !hasLowercase){
            number--;
            hasLowercase = true;
        }

        if(isNaN(password[i]) && password[i] === password[i].toUpperCase() && !hasUppercase){
            number--;
            hasUppercase = true;
        }

        if(password[i] >= "0" && password[i] <= "9" && !hasDigit){
            number--;
            hasDigit = true;
        }

        // if this is the first cycle push the character into the previousCharacters array
        if(i == 0) { previousCharacters.push(password[i])};

        // if this isnt the first cycle and the previousCharacter matches the current character, add current character to previous characters array
        if(i < 0 && !characterIsRepeating && previousCharacters[0] === password[i]) {
            previousCharacters.push(password[i]);
            characterIsRepeating = true;
        } else if(i < 0 && characterIsRepeating && previousCharacters.length === 2 && previousCharacters[1] === password[i]){
            previousCharacters.push(password[i])
        }else {
            previousCharacters.shift();
        }

        if(i === password.length && !characterIsRepeating){
            number--;
        }

    }
    
    
    return number;
};




console.log(strongPasswordChecker("1337C0d3"));