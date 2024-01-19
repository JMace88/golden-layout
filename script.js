// JS file for Secure the Vault Workshop

// 1. Pseudocode

// 2. Make a string with the intro phrase

const introMessage =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

console.log(introMessage);

// 3. Make 3 variables
// -1st variable must equal 10
// -2nd var must equal 40
// -3rd var must equal 39

const num1 = 2 * 5;
const num2 = 8 * 4 + 8;
const num3 = 289 % 50; // % modulo (modulus) operator returns the "remainder"

// const isEven = (37 % 2) === 0 // Easy modulo check for evens and odds

console.log("Number 1:", num1);
console.log("Number 1:", num2);
console.log("Number 1:", num3);
// 4. (comment code)

// 5. Create a dialogue box with the values
alert(introMessage + "\n" + num1 + " " + num2 + " " + num3);
