// let: Can be reassigned, block-scoped
let count = 10;
count = 20;

// const: Cannot be reassigned, block-scoped
const PI = 3.14159;

// var: Can be reassigned, function-scoped (not block-scoped), not recommended for use in modern JavaScript
var legacyVar = "Hello";
legacyVar = "World";

console.log(count);
console.log(PI);
console.log(legacyVar);