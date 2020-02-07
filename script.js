//special characters
var newPassword = [""];

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

    function eraseText() {
      document.getElementById("password").value=""
    };


    var passwordLength = parseInt(prompt("How many characters would you like in this password?"));

    if (passwordLength < 8) {
        alert("Password must be at least 8 characters to proceed!"); return;
    }
    if(passwordLength > 128) {
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
    
    alert("Thank you. I will now generate your password.");
    console.log(okLowerCaseLetters);
    console.log(okNumbers);
    console.log(okUpperCaseLetters);
    console.log(okSpecialCharacters);
    console.log(passwordLength);

    var randomUpper = upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)+1];
    var randomLower = lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)+1];
    var randomSpecial = specialCharacters[Math.floor(Math.random()*specialCharacters.length)+1];
    var randomNumber = numberArray[Math.floor(Math.random()*numberArray.length)+1];
    console.log(randomLower);
    console.log(randomNumber);
    console.log(randomSpecial);
    console.log(randomUpper);

    for (i = 0; i < passwordLength; i++) {
      if (okLowerCaseLetters === true){
          newPassword.push(lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)]);
          if (newPassword.length === passwordLength +1){
          break;
          }
      }
      if (okUpperCaseLetters === true){
          newPassword.push(upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)]);
              if (newPassword.length === passwordLength +1){ break;}
      }
      if (okSpecialCharacters === true){
          newPassword.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);
          if (newPassword.length === passwordLength +1){
          break;
          }
      }
      if (okNumbers === true){
          newPassword.push(numberArray[Math.floor(Math.random()*numberArray.length)]); 
          if (newPassword.length === passwordLength +1){
          break;
          }
      }
  }
  
console.log(newPassword);
var passwordarea = document.getElementById("password");
newPassword = newPassword.join('');
passwordarea.textContent = newPassword



}







    

