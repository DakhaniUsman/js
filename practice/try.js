

var input = [2, 7, 11, 15];
var target = 9;

var input = [3, 2, 4];
var target = 6;

var input = [3, 3];
var target = 6;

function Question1() {
    for (let i = 0; i < input.length; i++) {
        // console.log(input[i]);

        for (let j = i + 1; j < input.length; j++) {

            if (input[i] + input[j] === target) {
                console.log(i, j)
            }

        }
    }
}

console.log(Question1());


//

var input = [3, 2, 2, 3];
var element = 3;
var output = [];
function removeElement(input, element) {

    for (let i = 0; i < input.length; i++) {

        if (input[i] !== element) {
            output.push(input[i]);
        }


    }

    return output;
}

console.log(removeElement(input, element));

// binary search method

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 9;

function binarySearchMethod(array, target) {

    var left = 0;
    var right = array.length - 1;

    while (left <= right) {
        const midIndex = Math.floor((left + right) / 2);
        console.log(midIndex, array[midIndex]); // 4, 5
        console.log(left, "left", right, "right");


        if (array[midIndex] == target) {
            console.log("we have found the target at ", midIndex, " index")
            return midIndex;
        }

        else if (array[midIndex] < target) {
            left = midIndex + 1;
        }

        else if (array[midIndex] > target) {
            right = midIndex - 1;
        }

    }
    return "Target not found"
}

// console.log(binarySearchMethod(array,target))

// function BinarySearch(array, target) {


//     var left = 0; // 0 start  // 5  // 7
//     var right = array.length - 1; // 8 end  // 8  // 8

//     while (left <= right) {  // 0 < 8 , true  // 5 < 8 , true  // 7 < 8 , true

//         console.log(left, "left", right, "right"); // 0 left 8 right  // 5 8  // 7 8
//         const midIndex = Math.floor((left + right) / 2); // (0 + 8) / 2  = 4  // (5+8)/2 = 13/2 floor => 6   // (7+8)/2 = 15/2 floor => 7
//         console.log(midIndex, "midIndex", array[midIndex], "midElement"); // 4 midIndex 5 midElement  // 6 7  // 7 8

//         if (array[midIndex] === target) {  // 5 === 8 , false // 7 === 8, false  // 8 === 8 , true
//             console.log(array[midIndex], "midElement", target, "target"); //
//             return "We have found the target at " + midIndex + " index position";
//         }

//         else if (array[midIndex] < target) {  // 5 < 8 , true  // 7 < 8 , true
//             console.log(array[midIndex], " <", target);
//             left = midIndex + 1;  // 4+1 = 5  // 5+1 = 6
//         }

//         else if (array[midIndex] > target) {
//             console.log(array[midIndex], " >", target);
//             right = midIndex - 1;
//         }



//     }
//     return "Target not found"

// }

// console.log(BinarySearch(array, target));


var array = [1, 2, 3, 4, 5, 6, 7, 8];
var target = 7;

// from the given array print the combination of two numbers whose sum is equal to target

function Combination(array, target) {
    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {
            console.log(array[i], array[j]);

            if (array[i] + array[j] == target){
                console.log(array[i], array[j], target)
            }
        }

    }
}

console.log(Combination(array, target))

// palindrome

