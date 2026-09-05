// Simple arithmetic operations
let sum = 10 + 5;
let dif = 10 - 5;
let pro = 10 * 5;
let quo = 10 / 5; 
let mod = 10 % 3;
let exp = 2 ** 3;

console.log("Sum:", sum);
console.log("Difference:", dif);
console.log("Product:", pro);
console.log("Quotient:", quo);
console.log("Modulus:", mod);
console.log("Exponentiation:", exp);

// Compound assignment operators
let x = 5;
x += 3;
x -= 2;
x *= 4;
x /= 2;

console.log("x after += 3:", x);
console.log("x after -= 2:", x);
console.log("x after *= 4:", x);
console.log("x after /= 2:", x);

// Comparison operators
console.log(5 == "5");  // true  (check value only, not recommended)
console.log(5 === "5"); // false (checks both value and type, recommended)

// Logical operators
let isAdult = true;
let hasTicket = false;
console.log(isAdult && hasTicket); // false (AND)
console.log(isAdult || hasTicket); // true  (OR)
console.log(!isAdult);             // false (NOT)