let score = 85;

if (score >= 90) {
    console.log("excellent"); 
} else if (score >= 70) {
    console.log("good"); 
} else if (score >= 50) {
    console.log("average");
} else {
    console.log("poor");
}

// Ternary Operator - if/else in brief
let age = 18;
let canVote = age >= 18 ? "can vote" : "cannot vote";
console.log(canVote); // "can vote"