// 1. Write a function to serialize a simple object into a JSON string and another function to deserialize it back into an object.
// You can use JSON.stringify and JSON.parse to complete this task.
let personObject = {name: "Juha", age: 38}; // Example object
// The object should look the same in the beginning and the end.
console.log(typeof personObject);

function serialize(obj){
    personObject=JSON.stringify(obj);
}

serialize(personObject);
console.log(typeof personObject);
console.log(personObject)

let deserialized;
console.log(deserialized);

function deserialize(json){
    deserialized=JSON.parse(json);
}

deserialize(personObject);

console.log(deserialized);

// 2. Serialize an array of strings into JSON, and then deserialize it back into an array.
// Again, the array of strings should look the same in the beginning and the end.
let berryArray = ["blueberry", "strawberry", "redberry"];

berryArray=JSON.stringify(berryArray);
console.log(berryArray);
berryArray=JSON.parse(berryArray);
console.log(berryArray);

// 3. Given a nested object, serialize and deserialize it.
let nestedObject = {type: "car", features: {make: "Volvo", model: "V70", powerSource: "gasoline", drivenKm: 90000}}

nestedObject=JSON.stringify(nestedObject);
console.log(nestedObject);

nestedObject=JSON.parse(nestedObject);
console.log(nestedObject);

// 4. Write a function that attempts to parse a JSON string safely. It should handle and catch any errors if the string isn't valid JSON.
// Test your function with these two strings. You can add your own.
'{"name":"John", "age":30, "car":null}' // valid
'{"name:"John", "age":30, "car":null}' // invalid

function parser(str){
    let parsed;
    try{
    parsed=JSON.parse(str);
    }
    catch (e) {
        return "Invalid JSON"
    }
    return parsed;
}

console.log(parser('{"name:"John", "age":30, "car":null}'))

// 5. Write a function saveName that takes a string and saves it in localStorage under the key "name". Write another function getName that retrieves and returns this value.

function saveName(str) {
    localStorage.setItem("name", str);
}

function getName(){
    console.log(localStorage.getItem("name"));
}

saveName("Joni");
getName();

// 6. Create a counter that is used to increment a number that is stored in localStorage every time a function is called.

let number=0;
localStorage.setItem("number", number);

function storageIncrementer(){
    localStorage.setItem("number", number+=1);
    console.log(localStorage.getItem("number"));
}

storageIncrementer();
storageIncrementer();
storageIncrementer();

// 7. Write a function that takes an array, converts it to a JSON string, and stores it in localStorage. Write another function
// to retrieve this JSON string, convert it back to and array, and return it.

let berryArray2 = ["blueberry", "strawberry", "redberry"];

function arrayStorer(arr){
    arr=JSON.stringify(arr);
    localStorage.setItem("arr", arr)
}

arrayStorer(berryArray2);

console.log(localStorage.getItem("arr"));

function arrayGetter(key){
    let received=localStorage.getItem(key);
    received=JSON.parse(received);
    console.log(received); 
}

arrayGetter("arr");

// 8. Simulate a theme preference ("dark", "light") saving function. Save the user's choice in localStorage, and write a function to retrieve it.

let theme="light";


function themeSwitcher(){
    let bodyClassList=document.body.classList;
    bodyClassList.toggle("dark");
    if(bodyClassList.contains("dark")){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

function loadTheme() {
    let theme=localStorage.getItem("theme")
    if(theme=="dark"){
        document.body.classList.add("dark")
    }
}

// 9. Create a simple to-do list where you can add items. Store the items in localStorage. Write functions to add items and retrieve all items.
// The tasks should automatically reload when you refresh the page.

function addTask(){

}