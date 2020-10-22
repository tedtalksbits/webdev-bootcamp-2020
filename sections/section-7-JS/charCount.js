let charMax = 6;
let tweet = "1234567890";

console.log("You have written " + tweet.length + " characters, you have " + (charMax - tweet.length) + " characters left.");

// using slice
// slices takes position range (x, y) will receive from x upto but not including y
console.log(tweet.slice(0, charMax));

// Changing casing
let name = "tedane";

let upperCaseName = name.toUpperCase();

console.log(upperCaseName);

// captitalize firstletter in a string

let userName = "jon michAlle";

let properUserName = userName.slice(0,1).toUpperCase() + userName.toLowerCase().slice(1);

console.log(properUserName);
