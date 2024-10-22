// 1. Datatypes -> Data is every information
// 1.1 String
// 1.2 Number
// 1.3 Boolean
// 1.4 Undefined
// 1.5 Null

// 2. Variables -> containers to store data
// 2.1 var
// 2.1 let
// 2.1 const

// 3. Operators
// 3.1 Arithmatic + - * /
// 3.2 Conditional > < >= <=
// 3.2 Comparison
// 3.3 Logical Operators

// 4. Conditional Statement -> statement that are executed as per conditions specified
// 4.1 if  else if  else
// 4.2 switch

// 5. Functions
// 5.1 In-built functions
// 5.2 User Defines functions

//  Revision of user defined functions
// 6. Array -> storage for multiple data with multiple datatypes
// 6.1 Indexing in array starts from 0
// 6.2 Array.length
// 6.3 Array Indexing
// 6.4 Add Delete last element push pop
// 6.5 Add Delete first element unshift shift

console.log("----------------");

var number1 = 20;
var number2 = 40;

function GreaterNumber(number1, number2) {
  if (number1 > number2) {
    return "Number1 is greater than Number2"; // wherever return statement is executed the function in ended
  } else if (number1 == number2) {
    return "Number1 is equal to Number2";
  }
  console.log("If all condtions are false then below return is executed");
  return "Number2 is greater than Number1";
}

console.log(GreaterNumber(number1, number2));

console.log("----------------");

// texting even and odd number

console.log("----------------");
console.log("Testing even and odd number");

var number1 = 23;
console.log(number1, 21 % 2);
// Odd value will have remainder 1

var number2 = 22;
console.log(number2, 20 % 2);
// Even value will have remainder 0

function EvenOdd(number1) {
  if (number1 % 2 == 1) {
    return "number is an odd number";
  }
  return "number is an even number";
}

console.log(EvenOdd(49));
console.log("----------------");
console.log("**** ARRAY ****   ");

// Array
// Array is basically a storage that can contain multiple data along with multiple datatypes
// syntax : var students = ["Usman", "Rayyan", "Arsalan"]
// values seperated

var characters = ["Luffy", "Zoro", "Nami", "Ussop", "Sanji", "Robbin"];

console.log(characters);

// it can have data of different datatypes as well

console.log("array having different datatypes");

var array = [
  "Luffy",
  21,
  "Zoro",
  true,
  "Nami",
  "Ussop",
  number1,
  "Sanji",
  "Robbin",
];

console.log(array);
console.log("------------------");

// Array indexing -> each value in an array is assigned some index value and indxing in array starts from 0

console.log(characters);

console.log("index 0", characters[0]);
console.log("index 1", characters[1]);
console.log("index 2", characters[2]);
console.log("index 3", characters[3]);
console.log("index 4", characters[4]);
console.log("index 5", characters[5]);

console.log("Finding the length of Array");
console.log(characters.length);
// Note : unlike array indexing the length starts from 1

// accesing the last element wihtin array

console.log("accesing the last element wihtin array");
// array.length will give max length but since array indexing starts from 0 in order to acces last elemet we will use
// array.length - 1

console.log(characters.length - 1); // maximum array index

console.log(characters[characters.length - 1]); // last element

// for middle element array.length / 2
// since it may give a decimal value so we will have to round off the value of index to max(ceil) or min(floor)

console.log(characters.length / 2); // middle length of array

console.log(characters[characters.length / 2]); // middle element of array
console.log(characters[characters.length / 2 - 1]); // middle element of array

var characters = [
  "Luffy",
  "Zoro",
  "Nami",
  "Ussop",
  "Sanji",
  "Robbin",
  "Chopper",
  "Franky",
  "Brook",
];

console.log(characters);
console.log(characters.length);

console.log(characters[characters.length - 1]); // last

console.log(characters[Math.ceil(characters.length / 2) - 1]); // max middle

console.log(characters[Math.floor(characters.length / 2) - 1]); // min middle

console.log("-------------------------");

// Adding element in an array push

console.log(characters);


console.log("Adding last element using push()")

characters.push("Shanks");
console.log(characters);



// Removing element pop
console.log("Deleting last element using pop()")
characters.pop();
console.log(characters)

// adding element at start

console.log("Adding first element using unshift()")
characters.unshift("Roger");
console.log(characters)

// deleting element at start

console.log("Adding first element using shift()")
characters.shift("Roger");
console.log(characters)