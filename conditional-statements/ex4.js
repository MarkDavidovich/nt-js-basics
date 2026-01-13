let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if (usernameLength < 5 || passwordLength < 8 || userAge < 14) {
  if (usernameLength < 5) {
    console.log("Username must be at least 5 characters long!");
  }
  if (passwordLength < 8) {
    console.log("Password must be at least 7 characters long!");
  }
  if (userAge < 14) {
    console.log("You must be 14 or older to register!");
  }
} else {
  console.log("User can create an account!");
}
