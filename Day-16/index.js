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

// 9. Nested Loops
// 9.1 Nested for loop

// 10. Object
// 10.1 Accessing Object Elements object.key object[key]
// 10.2 ObjectConstructor using new keyword
//        var newObject = new Object();
// 10.3 Loop on object (runs till presence of key)
// 10.4 Function in object
// 10.5 Object Destructuring

// DSA Palindrome

//setTimeout () // setTimeout (handler anonymous function () => {} , time)
// setTimeinterval () // setInterval (handler anonymous function () => {} , time)
//fetch

//  setTimeout
// it adds a delay to the code execution
// it requires two value a handler function () => {} in most cases and a timeout time

console.log("----- setTimeout() -----")

setTimeout(() => {
  console.log("Hi I am setTimeout()");
}, 3000);

// () = > is called handler function , 3000 is time mentioned in milisecond 300ms = 3 sec

// setInterval
// it adds interval meaning a time duration to the code where code runs after each interval
// it also requires two parameters handler function and a timeout time

// console.log("----- setInterval() -----")

setInterval(() => {
    console.log("I am groot");
  }, 2000);
  
var count = 0;
const id = setInterval(() => {
    count++;
    console.log(count);

    if (count > 5){
        console.log(id)
        clearInterval(id);
        console.log("Interval cleared.")
    }
  }, 2000);

// console.log("----- Dakhani Usman -----")


// localstorage is permanent storage on a website and is not deleted on closing tab

// sessionstorage is temporary storage on a website and is deleted on closing tab (used for sensitive data like banking application)

// cookies are also kinf of storage but it is front end restricted and only can be delted or modified through backedn


// localstorage permanent storage untill deleted personally
