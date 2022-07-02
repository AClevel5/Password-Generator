// Assignment Code
var generateBtn = document.querySelector("#generate");

//create arrays
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "u",
  "z"
]
const upperCase = ["A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialCharacters = ["!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",]

//prompts & pushing characters & numbers into the variable
function generatePassword() {
  let passwordLength = prompt("What length would you like your password to be? (Must be 8-128 Characters)")
  let numpasswordLength = parseInt(passwordLength)
  let newPassword = [];
  if (numpasswordLength < 128 && numpasswordLength > 7) {
    let lowerConfirm = confirm("Do you want to use lower case characters?");
    let upperConfirm = confirm("Do you want to use upper case characters?");
    let specialConfirm = confirm("Do you want to use special Characters?");
    let numberConfirm = confirm("Do you want to use numbers?");
    let availableCharacters = [];
    if (lowerConfirm == true) {
      //if true pushes 1 character of lowercase to the newPassword & adds lowerCase array availableCharacters array
      availableCharacters = availableCharacters.concat(lowerCase)
      newPassword.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
    }
    if (upperConfirm == true) {
      //if true pushes 1 character of uppercase to the newPassword & adds upperCase array availableCharacters array
      availableCharacters = availableCharacters.concat(upperCase)
      newPassword.push(upperCase[Math.floor(Math.random() * upperCase.length)])
    }
    if (specialConfirm == true) {
      //if true pushes 1 character of specialCharacters to the newPassword & adds specialCharacters array availableCharacters array
      availableCharacters = availableCharacters.concat(specialCharacters)
      newPassword.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
    }
    if (numberConfirm = true) {
      //if true pushes 1 character of numbers to the newPassword & adds numbers array availableCharacters array
      availableCharacters = availableCharacters.concat(numbers)
      newPassword.push(numbers[Math.floor(Math.random() * numbers.length)])
    }
    // after one of each desired character/number is entered it starts at the total # already entered and pushes randomly to newPassword from availableCharacters until desired length of password is met.
    for (let index = newPassword.length; index < numpasswordLength; index++) {
      newPassword.push(availableCharacters[Math.floor(Math.random() * availableCharacters.length)])

    }
  }
  // error message if they do not enter a viable #
  else {
    alert("Sorry you must select a number between 8-128")
  }

  console.log(newPassword);
  // get rid of the commas
  return newPassword.join('');
}



// Write password to the #password input
function writePassword() {

  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//SUDO CODE

//Assign Arrays
//Function Generate Password
  //Needs to prompt user for legnth
  //Confirms for Upper Case, Lowercase, Special Characters, and Numericals. (booleans)
  //Validate input and make sure at least one character type was selected (if, else)
//generate password off of user input & determine character make up of password
//return password to  display