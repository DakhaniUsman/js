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
        console.log(i, j);
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

// check wheter number is even or odd

var number = 7;

function isEvenOdd(number) {
  if (number % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

console.log(isEvenOdd(number));

var array = [1, 2, 3, 4, 5];

function accessArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    const mid = Math.floor(array.length / 2); // middle element

    console.log(array[mid]);

    const last = array.length - 1;

    console.log(array[last]); // last element
  }
}

console.log(accessArray(array));

// search element in an array

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 7;

function searchElement(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log("target found at ", i, " index");
    }


  }

  array.push(10);

  console.log(array)

  array.pop();
  console.log(array)
}

console.log(searchElement(array, target));
