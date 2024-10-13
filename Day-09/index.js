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
// for loops, while loops
// 7.1 increment and decrement operators
// 7.2 For loop
// 7.3 DSA Questions for loop practice
// 7.4 DSA Question for loop practice (decrement)
// 7.5 Reverse for loop
// 7.6 Array with for loops
// 7.7 While Loop

//  while loop is better than for as we can control the sequence within the  loop itself

// syntax
//  var start ;  // declare
// while ( end ) {   // condition
//  code ;
//  sequence
// }

// Question 1 - print number from 1 - 10 by using while loop

console.log("Question 1 - print number from 1 - 10 by using while loop");

var i = 1; // start
while (i < 11) {
  // end
  console.log(i);
  i++; // sequence u can set sequence as per you requirement
}

// // iteration -1
// i < 11 --> 1 < 11 --> true
// console.log(i);   --> 1
// i++;              --> 2

// iteration -2
// i < 11 --> 2 < 11 --> true
// console.log(i);   --> 2
// i++;              --> 3

// ......

// iteration -10
// i < 11 --> 10 < 11 --> true
// console.log(i);   --> 10
// i++;              --> 11

// iteration -11
// i < 11 --> 11 < 11 --> false
// loop end run time goes on next piece of code

console.log("----------------------");

// Question 2 - print numbers from 10 - 1 using while loop
// Reverse while loop

console.log("Question 2 - print numbers from 10 - 1 using while loop");

var i = 10;

while (i > 0) {
  console.log(i);

  i--; // decreasing the value of i by 1 at each itteration
}
console.log("----------------------");

// Question 3 - print count of numbers from given array by using while loop, who are even

console.log(
  "Question 3 - print count of numbers from given array by using while loop, who are even"
);

var array = [1, 20, 25, 24, 70, 80, 55, 77];

// console.log(array.length);
// console.log(array[0]);

// print value from array   --> completeed
// only even numbers        --> completed
// count of even numbers    --> completed

var i = 0;
count = 0;

while (i < array.length) {
  // console.log(array[i]);  // all values from array
  if (array[i] % 2 == 0) {
    // console.log(array[i]); // only even numbers
    count++;
  }

  i++;
}
console.log(array);
console.log(count + " numbers are even from the given array");
console.log("----------------------");

// Not Equal to operator (!=)

console.log("Not equal to operator != and !==");

console.log(1 == 1); // true  we check if left side is equal to right side
console.log(1 == 2); // true

console.log(1 != 1); // false  we check if left side is not equal to right side
console.log(1 != 2); // true

console.log(1 != "1"); // false  we check if left side is not equal to right side
console.log(1 !== "1"); // true

console.log("----------------------");

console.log("////////// DAKHANI USMAN //////////");
