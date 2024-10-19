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
// 8.2 Biniarry Search

// linear seach means searching each element one after other linearly

// Question given an array find the index of target

var array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
var target = 5;
// output 4
console.log("Linear Search Method");

for (var i = 0; i < array.length; i++) {
  //   console.log(i); // printing index values
  if (array[i] === target) {
    // array[i] 5 == 5 => true
    console.log(i, "is the index value of target");
  }
}

// var i = 0;
// while(i < array.length){
//   if(array[i] === target){
//     console.log(i , " is the index value of target.")
//   }
//   i++;
// }

console.log("----------------");

// Question we have to find the index of target using Binary Search method

//  in binary search method
// first important point is that the array should be sorted either asscending or descending order
// we split the array into two part
// check three condtions
// middle = (array.length - 1) / 2

console.log("Binary Seach Method");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 1;


console.log(array);
console.log(target, " is our target element")
// Linear Search => 8 itterations
// how to do it in less iterations ???

// console.log(array.length);     // total length of array
// console.log((array.length - 1) / 2);     // half length
// console.log(Math.floor((array.length - 1) / 2));   // rounding off half length

var firstIndex = 0; // middle index
var middleIndex = Math.floor((array.length - 1) / 2); // middle index
var lastIndex = array.length - 1; // middle index
// console.log(array[middleIndex]); // middle value of array

// console.log(firstIndex, array[firstIndex]); //  value at index 0
// console.log(middleIndex, array[middleIndex]); // value at index  4
// console.log(lastIndex, array[lastIndex]); // value at last index 8

if (array[middleIndex] === target) {
  // 5 == target
  console.log("1st condition is ", array[middleIndex] == target);

  console.log("We have found the target at", middleIndex, "index value");
} else if (array[middleIndex] < target) {
  // go towards right
  //  5 < target  => true
  console.log("2nd condition is ", array[middleIndex] < target);

  let i = middleIndex; // start from middleIndex

  while (i <= lastIndex) {
    // 5 < 8

    if (array[i] === target) {
      console.log("We have found the target at ", i, " index position");
    }

    i++; // go till last index
  }
} else {
  // go towards left
  // 5 > target
  console.log("3rd condition is ", array[middleIndex] > target);

  let i = middleIndex;
  // console.log(i);

  while (i >= firstIndex) {
    // 5 > 0

    if (array[i] === target) {
      console.log("We have found the target at ", i, " index position");
    }

    i--; // go till first index
  }
}



console.log("----------------------");

console.log("////////// DAKHANI USMAN //////////");