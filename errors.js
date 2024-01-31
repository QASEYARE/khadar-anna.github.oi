// 1. 
// a) Write a function that takes a JSON string as input and returns
// the parsed object. Use a try catch block to catch any 
// errors during parsing and print the error message using console.error.
// If the parsing is successful, return the parsed object.
// b) Add a console warning before the parsing begins
function JSONTester(){
    console.warn("About to parse");
    try{

let parsed = JSON.parse(JSON);
return parsed;

    }
    catch(error){
        console.error("parsing not successful");

    }
}
Json = {'name':"John", "age": 30, "car": null};
console.log(JSONTester(Json))

// 2.
// a)
// Create a function that validates user input. The function
// should check if the input is a non-empty string.
// If the input isn't a non-empty string, throw a TypeError along with
// an error message. Place a try catch block around the function call and
// log the error using console.error.
// If the input is valid, log an appropriate message.
// b)
// Add a finally block that indicates that input validation is complete.
function InputValidater(){
    if(InputValidater!=""){
        return "input valid";
    }
    else{
        throw new error("Invalid input");
    }
}

try{
    InputValidater("")
    

}
catch(error){
    console.error(error);
}

finally{
console.log("run the code redgardless errors ");
}
InputValidater();
// 3.
// Write a function that simulates processing a user's information.
// Using Math.random, mak thee function randomly work and not work correctly.
// Throw a TypeError for invalid types and RangeError for invalid values
// (for example invalid age).
// Use a try catch block to catch these errors by logging different 
// messages for each type of error using console.error.
function processUserInfo(user) {
    try {
      // Simulate random success or failure using Math.random()
      const randomSuccess = Math.random() < 0.5;
  
      if (randomSuccess) {
        // Simulate successful processing
        console.log("Processing user information successfully:", user);
      } else {
        // Simulate failure with random errors
        const randomErrorType = Math.random();
  
        if (randomErrorType < 0.25) {
          // Simulate a TypeError
          throw new TypeError("Invalid data types in user information");
        } else if (randomErrorType < 0.5) {
          // Simulate a RangeError
          throw new RangeError("Invalid age in user information");
        } else {
          // Simulate other errors
          throw new Error("Unknown error occurred during processing");
        }
      }
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("TypeError: Invalid data types in user information");
      } else if (error instanceof RangeError) {
        console.error("RangeError: Invalid age in user information");
      } else {
        console.error("Error: ", error.message);
      }
    }
  }
  
  // Example usage:
  const user = {
    name: "John",
    age: 25,
    email: "john@example.com",
  };
  
  processUserInfo(user);
  

// 4.
// a)
// Using a loop, create an array that contains over 1000 elements.
// Create another array that contains 500 elements. You can use a function 
// or just loops.
// Create a third, empty array.
// b)
// Write a function that sums array elements. Use a parameter for the array.
// If the array length is over 1000, log a warning to the console that warns
// about potential performance issues.
// Proceed with the calculation and return the sum.
// Test your function with all 3 arrays.
// Create an array with over 1000 elements
const array1 = [];
for (let i = 0; i < 1200; i++) {
  array1.push(i);
}

// Create another array with 500 elements
const array2 = [];
for (let i = 0; i < 500; i++) {
  array2.push(i * 2);
}

// Create a third, empty array
const array3 = [];

// Function to sum array elements
function sumArrayElements(arr) {
  if (arr.length > 1000) {
    console.warn("Warning: Potential performance issues with array length over 1000.");
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Test the function with all 3 arrays
const sum1 = sumArrayElements(array1);
console.log("Sum of Array 1:", sum1);

const sum2 = sumArrayElements(array2);
console.log("Sum of Array 2:", sum2);

const sum3 = sumArrayElements(array3);
console.log("Sum of Array 3:", sum3);


// 5.
// a)
// Write a series of simple functions that call one another and log messages to the console.
// First -> Second -> Third..
// Create at least 3 functions. Observe the order of messages and how they are displayed in the console.
function firstFunction() {
    console.log("First Function: Started");
    secondFunction();
    console.log("First Function: Completed");
  }
  
  function secondFunction() {
    console.log("Second Function: Started");
    thirdFunction();
    console.log("Second Function: Completed");
  }
  
  function thirdFunction() {
    console.log("Third Function: Started");
    // Additional logic or further function calls can be added here
    console.log("Third Function: Completed");
  }
  
  // Call the first function to start the chain
  firstFunction();
  





// b)
// Modify the functions to include a deliberate error in the last function.
// This could be a reference to an undefined variable or something else.
// Observe the error message in the console when the code is running.
// Check how the stack trace works.

// 6.
// Cause a stack overflow error by creating a recursive function
// (a function that calls itself)
// that never stops. Try to catch this error and display a custom error message.

function infiniteRecursion() {
    // This function calls itself indefinitely
    infiniteRecursion();
  }
  
  try {
    // Try to execute the recursive function
    infiniteRecursion();
  } catch (error) {
    // Catch the stack overflow error and display a custom message
    console.error("Custom Error: Stack Overflow - The recursive function caused the error.");
  }