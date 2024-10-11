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


// 4.1 revision with another example
// drving license
// rule : age == 18 -> Learning license
//        age > 18 -> Driving license
//        ahe < 18 -> Not Eligible
//  syntax : if(){} else if (){} else{}

// var age = 18;
// var age = 21;
var age = 16;

if (age == 18) {
  console.log("You are", age, " and eligible for learning license :)");
} else if (age > 18) {
  console.log("You are ", age, "and eligible for driving license ;)");
} else {
  console.log("You are ", age, " and not eligible :(");
}

console.log("---------------");
console.log(1 < 2); // true
console.log(2 > 3); // false
console.log("---------------");
// 3. Operators
// 3.4 Logical Operators and (&&) , or (||)
// used to check multiple conditions but return only one value
// && --> true only when all the conditions are true
//    --> false even if one ore more conditions are false
//      1 1 --> 1

console.log("&& - AND Operator");
console.log(1 < 2 && 2 < 3); // both are ture so true
console.log(1 > 2 && 2 < 3); // one is false so false
console.log("---------------");

// || --> false only when all the conditions are false
//    --> true even if one or more conditions are true
//      1 0 --> 1

console.log("|| - OR Operator");
console.log(1 > 2 || 2 > 3); // both are false so false
console.log(1 > 2 || 2 < 3); // one is true so true
console.log("---------------");

// Advance driving conditions

// var newAge = 18;
// var newAge = 30;
var newAge = 99;
// var newAge = 17;
console.log("---ADVANCED RULE----")
if (newAge == 18) {
  console.log("You are ", newAge, " and eligible for learning licence :)");
} else if (newAge > 18 && newAge < 90) {
  console.log("You are ", newAge, " and eligible for driving licence ;)");
}
// else if ( 18 < newAge < 90){
//     console.log( 18 < newAge < 90);
//     console.log("You are ", newAge, " and eligible for driving licence ;)");
// }
else {
  console.log("You are ", newAge, " and not eligible for licence :(");
}

console.log("-----------")

// 4.2 switch conditional statement
// switch allows user to execute multiple conditional statements with giving user freedom to break out of loop or to continue executing
// switch work with key value pair
// syntax-- > switch (key) {
//     case value:
//         console.log("console statement");
//          break;
//     default:
//         console.log("default statement")
// }


var fruit = "mango";
// var fruit = "apple";
// var fruit = "chickoo";
console.log("------SWITCH with break------");

switch (fruit) {
  case "mango":
    console.log("You have selected Mango.");
    break;
  case "apple":
    console.log("You have selected Apple.");
    break;
  case "chickoo":
    console.log("You have selected Chickoo.");
    break;
  default:
    break;
}


var fruit = "mango";
// var fruit = "apple";
// var fruit = "chickoo";

console.log("------SWITCH------");
switch (fruit) {
    case "mango":
      console.log("You have selected Mango.");
    case "apple":
      console.log("You have selected Apple.");
    case "chickoo":
      console.log("You have selected Chickoo.");
    default:
  }


// difference between if else and switch
//    if else execute and break
//    switch keep on executiing if break not used

console.log("------ Character Switch -----");

var character = "ussop";

switch (character){
  case "luffy" :
    console.log("You have selected luffy");
    break;
  case "zoro" :
    console.log("You have selected zoro");
      break;
  case "nami" :
    console.log("You have selected nami");
    break;
  default :
  console.log("Selected character is not available :(");
}