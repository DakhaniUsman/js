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