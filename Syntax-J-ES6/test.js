// 1. Template Literals - backtick `` 
const fullname = "Tae Nguyen";
const age = 27;
const job = "Developer";
console.log("My name is " + fullname + ", I am " + age + " years old.");
console.log(`My name is ${fullname}, I am ${age} years old.`);

// 2. Destructuring (Array / object)
const user = { name: "Tae", email: "nguyenductay121999@gmail.com" };
const {name, email} = user;
console.log(name);
console.log(email);

const point = [10, 20, 30];
const [x, y, z] = point;
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

// 3. Spread Operator (...)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];   // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// 4. Rest Parameters (...) - Gom các tham số còn lại vào mảng
function sumAll(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 5. Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} bark`);
    }
}
const dog = new Animal("Dog");
dog.speak();