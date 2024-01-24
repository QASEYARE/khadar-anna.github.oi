// Debugging tasks
// See what errors arise from these pieces of code.
// Uncomment and fix them one by one. 

// 1: 
// function printNumber() {
//     console.log(num);
// }
let  num= 5;
function  printNumber(){

}
console.log(num);

// let num = 5;
// printNumber(); // Output should be 5

// 2:
// function addFive(number) {
//     return number + five;
// }
const result = addFive(10)


function addFive(){
    return 10+5
}
console.log(result);
 
  
// const result = addFive(10); // Should return 15
// console.log(result);

// 3:
// function greet(name) {
//   return 'Hello, ' name + '!';
const name =("omar");
function greet(name){
   
 return name;




}
console.log(greet("hello,omar"));

// console.log(greet('Omar')); // Should output "Hello, Omar!"

// 4:
// function isEven(number) {
//     return number % 2 = 0;
// }
  
function isEven(number) {
    return number % 2===0;
    
}
console.log(isEven(4));
console.log(isEven(5));
// console.log(isEven(4)); // Should return true
// console.log(isEven(5)); // Should return false

// 5:
// function countToThree() {
//     for (let i = 0; i <= 3; i++) {
//         console.log(i);
//     }
//     console.log("Final value of i:", i);
// }
// countToThree(); // This should print 1, 2, 3 and "Final value of i: 4"

function countToThree() {
    let i;
    for (i = 0; i <= 3; i++) {
        console.log(i);
    }
    console.log("Final value of i:", i);
}

countToThree();


// 6:
// Solve this array indexing problem, the loop should iterate over all elements in the foods array:
// const foods = ["Hamburger", "Pizza", "Tortilla"];
// for (let i = 1; i <= foods.length; i++) {
//     console.log(foods[i]);
// }

const foods =["Hamburger", "Pitz","Tortilla"];

for(let i = 1; i <= foods.length; i++) {

    console.log(foods[i]);

}


// 7:
// function printNumbersWithDelay() {
//      for (let i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
function printNumbersWithDelay() {
         for (let i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
       }
     }
     printNumbersWithDelay();
    
// printNumbersWithDelay(); // Expected to print 1, 2, 3, 4, 5 at 1-second intervals

// 8:
// function createMultiplier(multiplier) {
//     multiplier = 3;
//   return function (value) {
//     return value * multiplier;
//   };
// }
// const double = createMultiplier(2);
// console.log(double(5)); // Should output 10, not 15

function createMultiplier(multiplier){
    return function(value) {
        return value * multiplier;

        
    };
}
const double = createMultiplier(2);
console.log(double(5));