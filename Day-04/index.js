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

// Function -> are containers that contain multiple lines of code
//          -> they provide functionality / usecase
//          -> they can be re used and even exported or imported
//          -> they always return something / data
// syntax of function is :
// funtion nameOfFunction(){}  -> everything within its block will be the code of that function
// How to use -> first declare the function then use / call it
// Note : Whenever u see parenthesis understand that it is a function


function greet(){                   // Function Declaration
    console.log("Welcome, User");
}
console.log("greet() is called")
greet();                            // Function Calling
// greet();
// greet();
// greet();
// greet();
console.log("-------------")

// writing multiple lines of code in a function 

function Addition(){
    var number1 = 10;
    var number2 = 20;
    console.log(number1 + number2);
}
console.log("Addition() is called")
Addition();
console.log("-------------")

// Finding the greater number
function findGreaterNumber(){
    var number1 = 99;
    var number2 = 9;
    // conditonal statment if else 

    if (number1 > number2){
        console.log(" Number1 is greater than Number2");
    }
    else if (number1 == number2){
        console.log("Number1 is equal to Number2");
    }
    else {
        console.log( "Number2 is greater than Number1");
    }
}
console.log("findGreaterNumber() is called");
findGreaterNumber();
console.log("-------------")

// parameter and props
// parameter are the var names that are passed inside funtion parenthesis
// props are the values of those var names
// positioning matters first value will be assigned to the first variable and second value will be assigned to the second variable 
// you can use multiple parameters and props positioning shoul be kept in mind

var number1 = 11;
var number2 = 9;
// declaring function
function Multiplication(input1, input2){
    var result = input1 * input2;
    return result;          // a function will reutrn the data inside result that is input1 * input2
};
console.log("Multiplication() is called")
var output = Multiplication(number1, number2); // the return value of function must be stored somewhere in a variable
console.log(output);
console.log("-----------");

// giving props directly
var output2 = Multiplication(5,10);
console.log(output2);
console.log("-----------");



