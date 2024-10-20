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

// Question we have to find the index of target using Binary Search method

// searching middle element
//  comparing middle element with target
//  if array[middleIndex] > target then we have to go on right side 
//  if array[middleIndex] < target  then we will go on left side 


// going on right side scenario 
//  array[middleIndex] = 5 & target = 8  
//      => 5 < 8 => go right
//      left = 5 & right = 8    // index
//  now we have to gain calculate the middleIndex of new array 
//      6,7,8,9 => 
// array[middleIndex] = 7 having index middleindex = 6

//  again compare the middleIndex with target if
//  array[middleIndex] < target go right
//  7 < 8  => go right again
//   left = 6 & right = 8      // index

// now we have to calculate the middleIndex of new array
//  7,8,9
//  middleIndex = 7  & array[middleIndex] => array[7] => 8
//  compare array[7] = 8  & target = 8
//  8 == 8
// we have found the target at index 7



var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 8;

function BinarySearch(array, target) {

    var left = 0;
    var right = array.length - 1; 
}

// console.log(BinarySearch(array, target));
