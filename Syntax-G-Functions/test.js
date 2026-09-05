function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Tae"));

const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));

const multiply = (a, b) => a * b;
console.log(multiply(4, 2));

function welcome(user = "friend") {
    console.log(`Hello, ${user}!`);
}
welcome("Tae");