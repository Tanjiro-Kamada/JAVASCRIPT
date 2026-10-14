let my_arr = [
    23,
    "Jane",
    560,
    ["Lesson", "Maths", { currency: "KES" }],
    987,
    76,
    "John"
];

// 1. Display KES
console.log(my_arr[3][2].currency);

// 2. Display 560
console.log(my_arr[2]);

// 3. Display Maths
console.log(my_arr[3][1]);


let my_arr = [
    23,
    "Jane",
    560,
    ["Lesson", "Maths", { currency: "KES" }],
    987,
    76,
    "John"
];

// Question 4: Add amount to the currency object
my_arr[3][2].amount = 90;

// Question 5: Reverse 987 to 789 without reverse()
let num = my_arr[4];
let digits = String(num).split("");
let reversed = "";

for (let i = digits.length - 1; i >= 0; i--) {
    reversed += digits[i];
}

my_arr[4] = Number(reversed);

// Question 6: Change John to Jane
my_arr[6] = "Jane";

console.log(my_arr);
