//special characters
var specialCharacters = [
  "%",
  ";",
  "/",
  "'",
  "@",
  "#",
  "$",
  ".",
  "!",
  ":",
  ",",
  "(",
  ")",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "^",
  "}"
];

//letters
var lowerCaseLetters = [
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
  "y",
  "z"
];
var upperCaseLetters = [
  "A",
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
  "Z"
];

//numbers

var numberArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];

//asking user for info
document.getElementById("generate").addEventListener("click", passwordOptions);

function passwordOptions() {


    var length = parseInt(prompt("How many characters would you like in this password?"));

    if (length < 8) {
        alert("Password must be at least 8 characters to proceed!"); return;
    }
    if(length > 128) {
        alert("Password must be 128 characters or less to proceed!"); return;
    }

    var okSpecialCharacters = confirm("OK to include special characters in password?");
    var okLowerCaseLetters = confirm("OK to include lower case letters in password?");
    var okUpperCaseLetters = confirm("OK to include upper case letters in password?");
    var okNumbers = confirm("Finally, is it OK to include numbers in the password?");

    if (okSpecialCharacters == false &&
        okLowerCaseLetters == false &&
        okUpperCaseLetters == false &&
        okNumbers == false) {
            alert("You must choose at least one character type before proceeding!"); return;
        }
    
    var passwordChoices = {
        length: length,
        okSpecialCharacters: okSpecialCharacters,
        okUpperCaseLetters: okUpperCaseLetters,
        okNumbers: okNumbers,
        okLowerCaseLetters: okLowerCaseLetters
    };
    console.log(passwordChoices.okNumbers);
    console.log(passwordChoices.okSpecialCharacters);
    console.log(passwordChoices.okUpperCaseLetters);
    console.log(passwordChoices.okLowerCaseLetters);
    alert("Thank you. I will now generate your password.");
    for (i = 0; i < length; i++) {

    if(okSpecialCharacters === true) {
        var special = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
        console.log(special);
    }
    if(okUpperCaseLetters === true) {
        var upper = upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
        console.log(upper);
    }
    if(okLowerCaseLetters === true) {
        var lower = lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
        console.log(lower);
    }
    if(okNumbers === true) {
        var passwordNum = numberArray[Math.floor(Math.random()*numberArray.length)];
        console.log(passwordNum);
    }
}
alert(upper+lower+special+passwordNum)*length;
}
