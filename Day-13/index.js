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


// Nested For Loops

var array = [2, 3, 6, 7, 2, 4, 6, 8, 99];
var target = 6;
console.log("array", array);
console.log("target", target);

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

console.log("-_-_-_-_-_-_-_-_-_-_-_-");

var numbers = [1, 2, 3, 4, 5];
var multiplication = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);

  for (var j = 0; j < multiplication.length; j++) {
    // console.log(numbers[i],j);

    console.log(
      numbers[i],
      "*",
      multiplication[j],
      " =",
      numbers[i] * multiplication[j]
    );
  }

  console.log("-----------------------");
}

console.log("-_-_-_-_-_-_-_-_-_-_-_-");

// print the index of numbers that on addition gives target
var array = [1, 2, 3];
var target = 3;

console.log("array", array);
console.log("target", target);
for (var i = 0; i < array.length; i++) {
  // console.log(array[i]);  // 0 , 1

  for (j = 1; j < array.length; j++) {
    // 1, 2
    if (array[i] + array[j] === target) {
      // 1 + 2 === 3 , true
      console.log(i, j); // 0 1
    }
  }
}

console.log("-_-_-_-_-_-_-_-_-_-_-_-");

console.log("-------------------");
console.log("//////////---Dakhani Usman---//////////");


//TestQuestion

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var target = 7;

// from the given array print the combination of two numbers whose sum is equal to target

function TestQuestion(array, target) {

  for (let i = 0; i < array.length; i++) {

    // console.log(array[i]);

    for (let j = i + 1; j < array.length; j++) {

      // console.log(array[j]);

      if (array[i] + array[j] === target) {

        // console.log(`${array[i]} , ${array[j]}`);
        console.log(array[i], array[j]);

      }

    }

  }

}

console.log(TestQuestion(array, target));