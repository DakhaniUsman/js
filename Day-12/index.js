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
// 8.2 Binary Search (divide untill u get the target)

// Question we have to find the index of target using Binary Search method

// searching middle element
//  comparing middle element with target
//  if array[middleIndex] > target then we have to go on right side
//  if array[middleIndex] < target  then we will go on left side

// GOING on right side scenario
//  array[middleIndex] = 5 & target = 8
//      => 5 < 8 => go right
//      left = 5 & right = 8    // index
//  now we have to again calculate the middleIndex of new array
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

// GOING on left scenario
// target = 3

// [1,2,3,4,5,6,7,8,9]
// left = 0             array[left]  =  1
// middleindex = 4      array[middleindex]  =  5
// right = 8            array[right]  =  9

//  on comparing array[middleIndex] with target
// array[middleIndex] > target
// array[4] > 3
//  5 > 3   => true
// go on left side

// new array [1,2,3,4]
// left = 0             array[left]  =  1
// middleindex = 2      array[middleindex]  =  3
// right = 3            array[right]  =  4

//  on comparing array[middleIndex] with target
// array[middleIndex] > target
// array[3] > 3
//  4 > 3   => true
// go on right side

// new array [3,4]
// left = 2             array[left]  =  3
// middleindex = 2      array[middleindex]  =  3
// right = 3            array[right]  =  4

//  on comparing array[middleIndex] with target
// array[middleIndex] == target
// array[2] == 3
//  3 == 3   => true
// we have found the target on 2 index position

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 6;

function BinarySearch(array, target) {

    var left = 0; // 0 start  // 5  // 7
    var right = array.length - 1; // 8 end  // 8  // 8

    while (left <= right) {  // 0 < 8 , true  // 5 < 8 , true  // 7 < 8 , true

        console.log(left, "left", right, "right"); // 0 left 8 right  // 5 8  // 7 8
        const midIndex = Math.floor((left + right) / 2); // (0 + 8) / 2  = 4  // (5+8)/2 = 13/2 floor => 6   // (7+8)/2 = 15/2 floor => 7
        console.log(midIndex, "midIndex", array[midIndex], "midElement"); // 4 midIndex 5 midElement  // 6 7  // 7 8

        if (array[midIndex] === target) {  // 5 === 8 , false // 7 === 8, false  // 8 === 8 , true
            console.log(array[midIndex], "midElement", target, "target"); //
            return "We have found the target at " + midIndex + " index position";
        }

        else if (array[midIndex] < target) {  // 5 < 8 , true  // 7 < 8 , true
            console.log(array[midIndex], " <", target);
            left = midIndex + 1;  // 4+1 = 5  // 5+1 = 6
        }

        else if (array[midIndex] > target) {
            console.log(array[midIndex], " >", target);
            right = midIndex - 1;
        }



    }
    return "Target not found"

}

console.log(BinarySearch(array, target))

console.log("--------------------------------")
console.log("///// - Dakhani Usman - /////")
