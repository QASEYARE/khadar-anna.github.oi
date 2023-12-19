// task1
 /*var colorName = [" blue", "red", "yellow", "white"];
    
    colorName.pop("blue");
    
    console.log( colorName );  
//  Task2
    let IsloggedIn = ("khadar");

    if(IsloggedIn){
        console.log("please log in ");
    }
    else{
        console.log(" you singed wrong site");
    }

    // Task3
    let dayOf = "monday";
    let HoliDay =" summer";
    if(dayOf||HoliDay){
        console.log("its a holiday bro");
    }

    else{
        console.log(" Now is not holiday bro ");
    }

    // Task 4
    let bloodPressure = 120;
    let heartRate = 100; 

    if( bloodPressure>100 && heartRate <120 ){
        console.log(" bloodpressure is not well ");
    }

    else{
      console.log(" you are a health bro"); 
    }

    // Task5 functions
   
   // Function is called, the return value will end up in x
let x = myFunction(2);

function myFunction(a) {

  return a;
}
console.log(myFunction(2));

// Datatypes 
// Taks 7

const dataType =["hello"];
dataType.push('chickens', '23', 'True');


console.log("array length:",dataType.length);

// Task 8
function myFunction(a, b, c) {
    return a * b + c ;
  }
  console.log(myFunction(5,3,3));


//Task 9

function gradeClassifier(grade) {
    if (grade >= 0 && grade <= 49) {
        return "Failed";
    } else if (grade >= 50 && grade <= 59) {
        return 1;
    } else if (grade >= 60 && grade <= 69) {
        return 2;
    } else if (grade >= 70 && grade <= 79) {
        return 3;
    } else if (grade >= 80 && grade <= 89) {
        return 4;
    } else if (grade >= 90 && grade <= 100) {
        return 5;
    } else {
        return "Invalid grade. Please enter a grade between 0 and 100.";
    }
}


const numericGrade = 75;
const result = gradeClassifier(numericGrade);
console.log(`Grade for ${numericGrade} points: ${result}`);



let falseString = "false";
let TrueseString =  "True";
console.log("lenght.;"(falseString.length));

 if( falseString="false"){
    console.log("its  is false");
 }

 else{
    console.log(" you are a lier bro");
 }

 console.log(TrueseString);


let myPromise = new Promise(function(myResolve, myReject) {
    let x = 5;
  
  // The producing code (this may take some time)
  
    if (x == 5) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  console.log(myPromise);
*/


 // Example Promise function
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const success = false; // Set to false to simulate a failure
  
        if (success) {
          // Resolve the promise with the data
          resolve('Data fetched successfully');
        } else {
          // Reject the promise with an error
          reject('Error fetching data');
        }
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Using the Promise
  fetchData()
    .then((result) => {
      console.log(result); // Output: Data fetched successfully
    })
    .catch((error) => {
      console.error(error); // Output: Error fetching data
    });
   



