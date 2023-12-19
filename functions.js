 

let siteName = 'W3Docs';
function show() {
  let variable = 'Welcome to ' + siteName;
  console.log(variable);
}
show(); // Welcome to W3Docs
   
let age = 19;
if(age > 20){
   console.log("hello you are a old person go to sleep");
}

else if(age >= 21){
   console.log("you are  a teenage");
}
else{
   console.log("hello anna mene nukkumaan");
}

// switch
let value = [];

switch (typeof value){
   case "number":
      console.log("number")
      break;
      case "string":
      console.log("string")
      break;
      case "boolean":
      console.log("boolean")
      break;
      default:
         console.log("other")
}
function text(Num1, Num2){
   let result = Num1*Num2;
   
   }
   
   let resulta = text(223,23);
   console.log(resulta);
    
   
   for(let num = 0; num < 5; num++){
      console.log("still looping");
   }

// Map function js

let integerArray = [5,7,2,1];
let integerArrayMapped = integerArray.map(x =>x);
console.log(integerArrayMapped);

let numbers = [3,1,4,1,5];
let sorted = numbers.sort((a,b ) => a - b);