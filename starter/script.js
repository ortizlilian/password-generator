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

// Object that stores the options chosen by the user to create a customized password
let password = {
  numbers: 0,
  uppercase: true,
  numeric: true,
  specialCharacters: true,
};

// Function to prompt user for password options
function getPasswordOptions() {
  
  password.numbers = prompt("Enter password desired length");
    if (password.numbers < 10 || password.numbers > 64) {
      alert("Password lenght should be between 10 to 64 characters");
      return false; // Stops the code, so the user needs to start over and chose the correct number of characters.
    }

  password.uppercase = confirm("Should your password include uppercase characters?");
  password.numeric = confirm("Should your password include numbers?");
  password.specialCharacters = confirm("Should your password include special characters?");
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

// Empty array to store the password characters as the code appends them.


// Function to generate password with user input
function generatePassword() {

  let arrayPassword = [];
  let i = 0;

    while (arrayPassword.length < password.numbers) { // Perform the loop if the length of password is shorter than what the user wants
      // Checks if user wants special characters, then push them to the password array. Also checks if array is shorter than the number set by the user.
      if (password.specialCharacters && arrayPassword.length < password.numbers) {
        arrayPassword.push(getRandom(specialCharacters));
        i++;
      }
      // Checks if user wants numbers, then push them to the password array. Also checks if array is shorter than the number set by the user.
      if (password.numeric && arrayPassword.length < password.numbers) {
        arrayPassword.push(getRandom(numericCharacters));
        i++;
      }
      // Checks if user wants uppercased letters, then push them to the password array. Also checks if array is shorter than the number set by the user.
      if (password.uppercase && arrayPassword.length < password.numbers) {
        arrayPassword.push(getRandom(upperCasedCharacters));
        i++;
      } 
      // Checks if array is shorter than the number set by the user. If it is, adds lowercase letters.
      if (arrayPassword.length < password.numbers) {
      arrayPassword.push(getRandom(lowerCasedCharacters));
      i++;
      }
    } 
    let result = (arrayPassword.toString()).replaceAll(',', ''); // Converts array to string then removes all commas.
    return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  
  var passwordText = document.querySelector('#password');

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);