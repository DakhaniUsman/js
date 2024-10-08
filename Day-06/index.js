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

// loop -> repeating block of code untill the condition is met
// syntax =>
// for (initialization, condition, sequence){
// multiple lines of code
// }
// Note : the condition should return a boolean value that is either true or false

// priting values from 1 to 10 using for loop

// Increment and Decrement Operators

// Increment means increasing the value
// ++ => increment operator that increases the value by 1

console.log("-----Increment-----");

var number = 7;
number = number + 1; // 1st way of increasing
console.log(number); // 7 + 1 = 8
number = number + 5; //  u can increase it by any value
console.log(number); // 8 + 5 = 13

number++; // increases the intial value by one like 7 then 7++ => 8
console.log(number); // 13 + 1 = 14

number += 3; // shortcut for increase the initial value by 3  like 7 + 3 => 10
console.log(number); // 14 + 3 = 17

console.log("--------------------");

// Decrement means decreasing the value
// -- +> decrement operator that decrease the value by 1

console.log("-----Decrement-----");

var age = 20;

age = 20 - 1; // decreases the value by 1
console.log(age); // 20 - 1 = 19

age = age - 2; // increases the initial alue of age by 2
console.log(age); // 19 - 2 = 17

age--; // decreases the vinitial value by 1 and stores in back in the age variable
console.log(age); // 17 - 1 = 16

age -= 6; // decreases the initial value by 6 and stores it back in the age variable
console.log(age); // 16 - 6 = 10
console.log("--------------------");

console.log("-----For Loop-----")

// Back to loops
// Printing number from 1 to 10
// for (initialization, condition, sequence)


for (let i = 1; i <= 10; i++) {
  // execute when condition is true

  console.log(i);

  // after all code is executed sequence is executed : i ++
  // increase by 1 at each itteration

}


console.log("on 11th itteration the value of i = 11 and since 11 is not less than 10 condition becomes false and loop ends")
console.log("********************")
// Understanding each itteration - > each cycle

// 1 - itteration 
// i = 1
// i <= 10  => true
// console.log(1) => value of i = 1
// i++ => increasing the value by 1 
// now i = 2

// 2 - itteration 
// i = 2
// i <= 10  => true
// console.log(2) => value of i = 2
// i++ => increasing the value by 1
// now i = 3

// 3 - itteration 
// i = 3
// i <= 10  => true
// console.log(3) => value of i = 3
// i++ => increasing the value by 1
// now i = 4

// 4 - itteration 
// i = 4
// i <= 10  => true
// console.log(4) => value of i = 4
// i++ => increasing the value by 1
// now i = 5

// 5 - itteration 
// i = 5
// i <= 10  => true
// console.log(5) => value of i = 5
// i++ => increasing the value by 1
// now i = 6

// 6 - itteration 
// i = 6
// i <= 10  => true
// console.log(6) => value of i = 6
// i++ => increasing the value by 1
// now i = 7

// 7 - itteration 
// i = 7
// i <= 10  => true
// console.log(7) => value of i = 7
// i++ => increasing the value by 1
// now i = 8

// 8 - itteration 
// i = 8
// i <= 10  => true
// console.log(8) => value of i = 8
// i++ => increasing the value by 1
// now i = 9

// 9 - itteration 
// i = 9
// i <= 10  => true
// console.log(9) => value of i = 9
// i++ => increasing the value by 1
// now i = 10

// 10 - itteration 
// i = 10
// i <= 10  => 10 = 10 true
// console.log(10) => value of i = 10
// i++ => increasing the value by 1
// now i = 11

// 11 - itteration 
// i = 11
// i <= 10  => 11 < 10 false
// condition becomes false then loop ends and run time goes on other lines of code

// DAKHANI USMAN