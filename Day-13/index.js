

var array = [2, 3, 6, 7, 2, 4, 6, 8, 99];
var target = 6;
console.log("array",array);
console.log("target",target);

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

console.log("array",array);
console.log("target",target);
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
