for (let i = 0; i < 3; i++) {
    console.log(`For loop: ${i}`);
}

let count = 0;
while (count < 3) {
    console.log(`While loop: ${count}`);
    count++;
}

const colors = ["Red", "Blue", "Yellow"];
for (const color of colors) {
    console.log(color);
}

const user = { name: "Tae", birthyear: 1999, gender: "Male", country: "Vietnam" };
for (const info in user) {
    console.log(`${info}: ${user[info]}`);
}