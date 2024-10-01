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