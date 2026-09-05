// 1. Template Literals (Chuỗi nội suy với dấu backtick `)
const name = "Lan";
const age = 22;
console.log(`Tôi tên là ${name}, năm nay ${age} tuổi.`);

// 2. Destructuring (Phân rã mảng / object)
const user = { username: "dev123", email: "dev@gmail.com" };
const { username, email } = user; // Trích xuất trực tiếp thành biến
console.log(username); // "dev123"

const point = [10, 20];
const [x, y] = point;
console.log(x); // 10

// 3. Spread Operator (...) - Trải các phần tử
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// 4. Rest Parameters (...) - Gom các tham số còn lại vào mảng
function sumAll(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 5. Classes (Hướng đối tượng)
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} phát ra tiếng kêu.`);
    }
}
const dog = new Animal("Cún");
dog.speak(); // "Cún phát ra tiếng kêu."