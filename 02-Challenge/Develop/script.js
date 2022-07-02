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
var password = []

//prompts
function generatePassword() {
  let passwordLength = prompt("What length would you like your password to be? (Must be 8-128 Characters)")
  let numpasswordLength = parseInt(passwordLength) 
  if (numpasswordLength < 128 && numpasswordLength > 7){
      let lowerConfirm = confirm("Do you want to use lowe case characters?");
      let upperConfirm = confirm("Do you want to use upper case characters?")
      let specialConfirm = confirm("Do you want to use special Characters?")
      let numberConfirm = confirm("Do you want to use numbers?")
      if (numpasswordLength > 7){
        if (numpasswordLenth < 128){
          if (lowerConfirm == true);{
    // logic goes here for selecting lower case characters & pushing to password array
          }
          if (upperConfirm == true);{
    // logic goes here for selecting upper case characters & pushing to password array
        }
          if (specialConfirm == true);{
    // logic goes here for selecting special characters & pushing to password array
          }
          if (numberConfirm = true);{
    // logice goes here for selecting numbers & pushing to password array
          }
    
        }
    
        }
    }else {
      alert("Sorry you must select a number between 8-128")
    }

  
}
  
  // Write password to the #password input
function writePassword() {
  

  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//Assign Arrays
//Function Generate Password
  //Needs to prompt user for legnth
  //Confirms for Upper Case, Lowercase, Special Characters, and Numericals. (booleans) 
  //Validate input and make sure at least one character type was selected (if, else)
//generate password off of user input & determine character make up of password
//return password to  display