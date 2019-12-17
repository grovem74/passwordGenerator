//Prompts user for password length
var passwordLength = prompt("Enter password length:");

//validates password length
if (passwordLength < 8 || passwordLength > 128) {
    prompt("Please enter a password length between 8 and 128 characters:");
}

//Request user to choose which character types to use in password
else {
    var confirmSpecial = confirm("Would you like to use special characters?");
    var confirmNumber = confirm("Would you like to use numbers?");
    var confirmLowerCase = confirm("Would you like to use lower case characters?");
    var confirmUpperCase = confirm("Would you like to use upper case characters?");
}

// Request user to choose character types again if no options are chosen
if (confirmSpecial === false && confirmNumber === false && confirmLowerCase === false && confirmUpperCase === false) {
    alert("You must choose at least one character type.");
    var confirmSpecial = confirm("Would you like to use special characters?");
    var confirmNumber = confirm("Would you like to use numbers?");
    var confirmLowerCase = confirm("Would you like to use lower case characters?");
    var confirmUpperCase = confirm("Would you like to use upper case characters?");
}

// Pools of available characters
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X", "Y", "Z"];

// Randomly-generated password
var password = [];

// Adds the chosen random character types to 'password' array. Loops 128 times to cover max password length if only 1 character type is chosen.
for (var i = 0; i < 128; i++) {
    var randomSpecialChar = special[Math.floor(Math.random() * special.length)];
    if (confirmSpecial) {
        password.push(randomSpecialChar);
    }
    var randomNumber = number[Math.floor(Math.random() * number.length)];
    if (confirmNumber) {
        password.push(randomNumber);
    }
    var randomLowerCase = lower[Math.floor(Math.random() * lower.length)];
    if (confirmLowerCase) {
        password.push(randomLowerCase);
    }
    var randomUpperCase = upper[Math.floor(Math.random() * upper.length)];
    if (confirmUpperCase) {
        password.push(randomUpperCase);
    }
}

// The randomly-generated password trimmed to user-specified length
var newPassword = password.slice(0, passwordLength);

// Button to generate password
var generateBtn = document.querySelector("#generate");

// Write password to the password text area
function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Button to copy password to clipboard
var copyBtn = document.querySelector("#copy");
copyBtn.removeAttribute("disabled");

// Function to copy password to clipboard

function copyToClipboard() {
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
}

// Add event listener to copy button
copyBtn.addEventListener("click", copyToClipboard);


console.log("Generated password is: " + newPassword.join(""));
console.log("The password length is: " + newPassword.length);


