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
var newPassword = []

//prompts
function generatePassword() {
  let passwordLength = prompt("What length would you like your password to be? (Must be 8-128 Characters)")
  let numpasswordLength = parseInt(passwordLength)
  if (numpasswordLength < 128 && numpasswordLength > 7) {
    let lowerConfirm = confirm("Do you want to use lower case characters?");
    let upperConfirm = confirm("Do you want to use upper case characters?");
    let specialConfirm = confirm("Do you want to use special Characters?");
    let numberConfirm = confirm("Do you want to use numbers?");
    let numofTrue = 0;
    if (lowerConfirm == true) {
      numofTrue++
    }
    if (upperConfirm == true) {
      numofTrue++
    }
    if (specialConfirm == true) {
      numofTrue++
    }
    if (numberConfirm = true) {
      numofTrue++
    }
    console.log(numofTrue)
    if (lowerConfirm == true) {
      for (let index = 0; index < numpasswordLength / numofTrue; index++) {
        newPassword.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
      }
      //logic to select specified # of elements from lowecase array, & push to newPassword array
    }
    if (upperConfirm == true) {
      for (let index = 0; index < Math.floor(numpasswordLength / numofTrue); index++) {
        newPassword.push(upperCase[Math.floor(Math.random() * upperCase.length)])
        //logic to select specified # of elements from uppercase array, & push to newPassword array
      }
    }
    if (specialConfirm == true) {
      for (let index = 0; index < Math.floor(numpasswordLength / numofTrue); index++) {
        newPassword.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
        //logic to select specified # of elements from special array, & push to newPassword array
      }
    }
    if (numberConfirm = true) {
      for (let index = 0; index < Math.floor(numpasswordLength / numofTrue); index++) {
        newPassword.push(numbers[Math.floor(Math.random() * numbers.length)])
        //logic to select specified # of elements from number array, & push to newPassword array
      }
    }

  }
  else {
    alert("Sorry you must select a number between 8-128")
  }
  console.log(newPassword)
  return newPassword.join('');
}

// Write password to the #password input
function writePassword() {


newPassword = []
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//Assign Arrays
//Function Generate Password
  //Needs to prompt user for legnth
  //Confirms for Upper Case, Lowercase, Special Characters, and Numericals. (booleans)
  //Validate input and make sure at least one character type was selected (if, else)
//generate password off of user input & determine character make up of password
//return password to  display


// fix comma quirk, pick strings from array at random