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

// 8. Search methods
// 8.1 Linear Search
// 8.2 Binary Search

// 9. Nested Loops
// 9.1 Nested for loop

var array = [2, 3, 6, 7, 2, 4, 6, 8, 99];
var target = 6;

// checking each value other evry other value for all posibilties
// 2
// 2 + 3
// 2 + 6
// 2 + 7
// 2 + 2
// 2 + 4
// 2 + 6
// 2 + 8
// 2 + 99

for (var i = 0; i < array.length; i++) {
  //   console.log(i, array[i]); // index, value

  for (var j = i + 1; j < array.length; j++) {
    // console.log(j, array[j]);
    if (array[i] + array[j] == target) {
      console.log(array[i], array[j]);
    }
  }
}

console.log("-------------------")
console.log("//////////---Dakhani Usman---//////////")
