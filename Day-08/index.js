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

// 7. Loops -> code which keeps on repeating untill the condition is met
// 7.1 increment and decrement operators
// 7.2 For loop
// 7.3 DSA Questions for loop practice
// 7.4 DSA Question for loop practice (decrement)
// 7.5 Reverse for loop
// 7.6 Array with for loops


// every question in function

// DSA Question 1
// print numbers from 10 to 1

console.log("DSA Question - print numbers from 10 to 1");

for (var i = 10; i > 0; i--) {
  console.log(i);
}

console.log("-------------------------");

// Question 2
// Print numbers from 45 - 25 who are even
console.log("Question 2 -  Print numbers from 45 - 25 who are even");

var start = 45;
var end = 25;
sequence = 1;

function questionTwo() {
  for (var i = start; i >= end; i -= sequence) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

console.log(questionTwo());
console.log("-------------------------");

// Question 3
// print numbers from array

console.log("Question 3 - print numbers from array")

var myCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

function questionThree() {
  for (var i = 0; i < myCharacters.length; i++) {
    // console.log(i);
    console.log(myCharacters[i]);
  }
}

console.log(questionThree());
console.log("-------------------------");

// Question 4
// print count of odd numbers from an array

// print values from array -> completed
// odd numbers only        -> completed
// count of odd numbers

console.log("Question 4 - print count of odd numbers from an array")


var array = [23, 43, 24, 67, 65, 68, 25, 11, 24];
var count = 0;

function questionFour() {
  for (var i = 0; i < array.length; i++) {
    // console.log(i);       // index values
    // console.log(array[i]);   // array values
    if (array[i] % 2 == 1) {
      // console.log(array[i]);  // only odd numbers
      count++;
      // console.log(count);
    }
  }
  console.log(count); // final count of odd numbers
  return count + " numbers are odd numbers from given array";
}

console.log(questionFour());
console.log("-------------------------");

console.log("////////// DAKHANI USMAN //////////");
