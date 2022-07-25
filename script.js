// Assignment code for the variables that will be used to generate the password

var alpha = "abcdefghijklmnopqrstuvwxyz";
var calpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
// Setting password value to blank as we initiate the generator
var password = " ";

// Sets variable groups for specific variables shown above to be utilized and called below. 
// The use of the .getElementById is to encampsolate the combined elements together and make them callable globally in this sheet
var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  // combining the upper and lowercase alphabet into one variable for the prompt
  var characters = alpha + calpha;
  // .checked ? verifies if box condition is checked. Determines weather to include characters
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  // Providing function to enclose the generate password function with the specified length determined by user as well as what characters and variables to include in the result.
  passwordTxt.value = generatePassword(length.value, characters);
});

// Generating password with the determined length and characters
var generatePassword = (length, characters) => {
  // Initiating a for loop to determine random selection of characters, symbols, & numbers for random password generator
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      // Math.floor is responsible for returning the largest integer less than or equal to the give number.
      // with math.random() being initiated, the math.floor is randomly shuffling variables available from the characters, symbols, & numbers and restricted to the length chosen by user.
      Math.floor(Math.random() * characters.length)
    );
  }
  // Return password retrieves the completed compilation of the password generator once the user clicks the button.
  return password;
};

  // This eventlistener is waiting for every click to following the initial load of the site. 
  // It sets the value of password text box back to " " (blank)
generateBtn.addEventListener("click", () => {
  password = "";
});