// 4.1 Conditional Statement -> statement that are executed as per conditions specified
// if(){}  else if(){}  else{}

var num1 = 15;
var num2 = 20;

console.log(num1 > num2);
console.log(num1 == num2);
console.log(num1 < num2);

if(num1 > num2){
    // false
    console.log(num1, " is greater than ", num2);
} else if (num1 == num2){
    // false
    console.log(num1, " is equal to ", num2);
} else {
    // true
    console.log(num1, " is lesser than ", num2);
}

