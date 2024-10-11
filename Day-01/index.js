// JS is a scripting language which can be runned in computer through run time nvironment that is node js

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

// 1.1 String
//  strings are written in "" '' ``
//  everything written in these quotes are considered as string even numbers and special characters
//  "awdiz" 'awdiz' `awdiz` "123" '123' `123` "!@#$" '!@#$' `!@#$` all are string

//  Functions -> multiple lines of codes
//  two types : inbuilt function  or function which we define

// console.log() is and inbuilt funtion used to print the data within paranthesis
// typeof() is also inbuilt function used to check the type of data within paranthesis

console.log("awdiz", typeof("awdiz"));
console.log("123" , typeof("123"))
console.log("!@#" , typeof("!@#"))

// string data types are shown in white colour in terminal


// 1.2 Number
// number datatype dose not have any syntax
// 123 12.3 12.0065 all are considered as number

console.log(123, typeof(123));
console.log(123.45, typeof(123.45));
console.log(123.07756, typeof(123.07756));

// number data types are shown in yellow colour in terminal


// 1.3 Boolean has only two values true false
// this is written wihtout quotations

console.log(true, typeof(true));
console.log(false, typeof(false));


// 2. Variables are the containers that are used to store data in javascript
//  they are of three types var let and const
//  syntax to declare a variable is var nameOfVariable = value ;
// It has 3 concepts declaration assigning value and re assign


// // 2.1 var
// var myName ; // Declaration
// var myName = "Usman"; // Declaration + Assigning value
// myName = "Dakhani Usman"; // Re assigning // can be re assigned
// var myName = "Dakhani Usman Fqir Mohammed"; // Re Declaration // can be re declared
// console.log(myName);



// // 2.2 let
// // let myName ; // Declaration
// let myName = "Usman"; // Declaration + Assigning value
// myName = "Dakhani Usman"; // Re assigning
// // let myName = "Dakhani Usman Fqir Mohammed"; // Re Declaration // it cannot be redeclared
// console.log(myName);





// // 2.3 const
// // var myName ; // Declaration
// const myName = "Usman"; // Declaration + Assigning value
// // myName = "Dakhani Usman"; // Re assigning // cannot be re assigned
// // const myName = "Dakhani Usman Fqir Mohammed"; // Re Declaration cannot be re declared
// console.log(myName);


// difference between var let and const

// parameter           var             let             const
// re assign           true            true            false
// re declare          true            false           false
// scope          global/function  block-scoped     block-scoped   // block scoped meaning whithin { }
// hoisting           true             false           false


// 3. Operators

// 3.1 Arithmatic

console.log( 10 + 20);   // Add
console.log( 40 - 20);   // Substract
console.log( 10 * 2);    // Multiply
console.log( 100 / 25);  // Divide

// 3.2 Conditional

console.log( 10 > 20);   // Greater than
console.log( 40 < 20);   // Less Than
console.log( 10 >= 8);    // Greater than equal to
console.log( 100 <= 25);  // Less than equal to

// 3.3 Comparison

console.log(10 == 10 ) // equal to only checks data // true
console.log("10" == 10 ) // equal to only checks data // true which is wrong string != number
console.log("10" === 10 ) // strict equal to checks data and data type


// // Hoisting
// // var x; // Declaration is hoisted to the top but not initialization
// console.log("before declaration ",x);  // undefined

// x = 10;
// console.log("after declaration ",x);   // after declaration 10