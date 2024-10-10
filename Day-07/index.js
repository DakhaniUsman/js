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

// every question in function

// DSA Question 1
// print numbers from 30 to 60 with range of 5

var start = 30;
var end = 60;
var sequence = 5;

function questionOne(start, end, sequence) {
  console.log("DSA Question 1 - 30 to 60 with range of 5");

  for (let i = start; i <= end; i += sequence) {
    console.log(i);
  }
  // a function should return some value since this function is not returning anything it shows undefined
}

console.log(questionOne(start, end, sequence));
console.log("-------------");

// DSA Question 2
// print numbers from 50 to 100 with range of 3 and count them

var start = 50;
var end = 100;
sequence = 3;
count = 0;

function questionTwo(start, end, sequence) {
  console.log(
    "DSA Question 2 - print numbers from 50 to 100 with range of 3 and count them"
  );
  for (let i = start; i <= end; i += sequence) {
    // console.log(i); // testing
    count++;
    console.log(count);
  }
  return count + " Final Count - Inside of loop";
}

console.log(questionTwo(start, end, sequence));

console.log(count, "Final count - Outside of loop ");
console.log("-------------");

// DSA Question 3
// print number form 10 to 50 with range 2
// add 10 for each value
// reutrn in array

var start = 10;
var end = 50;
var sequence = 2;
var array = []; // creating empty array

function questionThree(start, end, sequence) {
  console.log(
    "DSA Question 3 - 10 to 50 with range 2 , add 10 , store in array"
  );
  // console.log(start, end, sequence);

  for (var i = start; i <= 50; i += sequence) {
    // console.log(i);  10 to 50 with range 2
    // console.log(i + 10); value + 10

    array.push(i + 10); // pushing each value in array
  }
  return array; // final statment of function
}

console.log(questionThree(start, end, sequence));
console.log("---------------");

// DSA Question 4
// print count from range 233 to 456, who are odd

var start = 233;
var end = 456;
var sequence = 1;
count = 0;

function questionFour(start, end, sequence) {
  console.log(
    "DSA Question 4 - print count from range 233 to 456, who are odd"
  );

  for (var i = start; i <= end; i += sequence) {
    // console.log(i); //  testing all
    // if(i % 2 == 1){
    //     console.log(i); // odd values
    // }

    if (i % 2 == 1) {
      count++;
    }
  }
  console.log("final count is ", count);
  return count + " number are odd number";
}

console.log(questionFour(start, end, sequence));
console.log("---------------");

console.log("////////// DAKHANI USMAN //////////");
