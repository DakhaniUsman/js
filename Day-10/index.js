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

// Printing number from array who are odd

console.log("Printing number from array who are odd");
var array = [25, 27, 34, 36, 45, 47, 54, 56];
var i = 0; // declaration

while (i < array.length) {
  // condition
  if (array[i] % 2 != 0) {
    console.log(array[i]);
  }
  i++; // sequence
}

console.log("----------------------");

// Printing numbers from array which are not equal to targets

console.log("Printing numbers from array which are not equal to targets");
var array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var i = 0;
target1 = 30;
target2 = 70;

while (i < array.length) {
  if (array[i] != target1 && array[i] != target2) {
    console.log(array[i]);
  }
  i++;
}

console.log("----------------------");

console.log("////////// DAKHANI USMAN //////////");


console.log("Printing number from array who are odd");
var array = [25, 27, 34, 36, 45, 47, 54, 56];

var i = 0;
while (i < array.length) {

  if (array[i] % 2 == 1) {

    console.log(array[i])

  }

  i++;

}