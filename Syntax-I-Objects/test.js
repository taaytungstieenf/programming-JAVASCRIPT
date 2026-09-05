const person = {
    firstName: "Tae",
    lastName: "Nguyen",
    birthyear: 1999,
    skills: ["JS", "HTML", "CSS"],

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.firstName);     // "Tae" (Dot notation)
console.log(person["birthyear"]);  // 1999  (Bracket notation)

person.city = "Saigon";            // add city
person.job = "Developer";          // add job

console.log(person.getFullName()); // "Tae Nguyen"
console.log(person);