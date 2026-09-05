let numbers = [10, 20, 30, 40];
console.log(numbers[0]);

numbers.push(50);      // [10, 20, 30, 40, 50]
numbers.pop();         // [10, 20, 30, 40]
numbers.unshift(0);    // [0, 10, 20, 30, 40]
numbers.shift();       // [10, 20, 30, 40]

// map: create a new array by applying a function to each element
let doubled = numbers.map(num => num * 2);

// filter: create a new array with elements that satisfy a condition
let greaterThan15 = numbers.filter(num => num > 15);

// reduce: create a single value from an array
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(doubled);         // [10, 20, 40, 60, 80]
console.log(greaterThan15);   // [20, 30, 40]
console.log(sum);             // 100