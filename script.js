// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    // while passLength outside of aletered value range, do prompt for password length input 
    do {
        alert("Your password must be at least 10 and no more than 64 characters");
        passLength = prompt("How long would you like your password?");
    }
    while (passLength < 10 || passLength > 64);
    // define variables for charactertypes in passwordoptions as boolean and false
    var hasUpper = false
    var hasLower = false
    var hasSpecial = false
    var hasNumeric = false
    // while charactertype variables are false, alert and run confirms to define charactertype (forces at least one character type via do-while) 
    do {
        alert("Your password must specify at lease one character type")
        hasUpper = confirm("Should it contain uppercase characters?")
        hasLower = confirm("Should it contain lowercase characters?")
        hasSpecial = confirm("Should it contain special characters?")
        hasNumeric = confirm("Should it contain numeric characters?")
    }
    while (!hasUpper && !hasLower && !hasSpecial && !hasNumeric);
    // return object containing character type password options
    return {
        "passLength": passLength,
        "hasUpper": hasUpper,
        "hasLower": hasLower,
        "hasSpecial": hasSpecial,
        "hasNumeric": hasNumeric
    }
}

// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// TO BE REMOVED BEFORE DEPLOYING - check on getRandom 
console.log(getRandom(upperCasedCharacters));

// Function to generate password with user input
function generatePassword() {
    // variables defined for password, character pool and password options (calling getPasswordOptions function to return obj)
    var password = ''
    var charPool = []
    var passOptions = getPasswordOptions();
    // if statement to inspect password passOptions obj for truthy values on character types as selected by user 
    // add a random character of that type to password string (calling getRandom function on relevant charatcterType array)
    // and concat the character array into available characters pool array 
    if (passOptions.hasUpper) {
        password += (getRandom(upperCasedCharacters));
        charPool = charPool.concat(upperCasedCharacters);
    }
    if (passOptions.hasLower) {
        password += (getRandom(lowerCasedCharacters));
        charPool = charPool.concat(lowerCasedCharacters);
    }
    if (passOptions.hasSpecial) {
        password += (getRandom(specialCharacters));
        charPool = charPool.concat(specialCharacters);
    }
    if (passOptions.hasNumeric) {
        password += (getRandom(numericCharacters));
        charPool = charPool.concat(numericCharacters);
    }
    console.log(password)
    console.log(charPool)
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);