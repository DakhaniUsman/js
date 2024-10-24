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
// 10.1 Accessing Object Elements

// Objects are similar to array and are used for storing multiple data along with different datatypes
// But the special thing is Object gives you the freedom to choose your own key (key are similar to index in array)

// syntax   var myObject = { key : value , key2 : value2 }


var myObject = {
    name: "Naruto",
    title: "Hokage",
    age: 31,
    childrens: ["Boruto", "Himawari"],
    childrensData: { name: "Boruto", age: 12 },
    alive: true
}

console.log("myObject", myObject);
console.log(typeof (myObject));

console.log("------------------")


// Accessing the elements of object

// console.log(array[]) // array
// console.log(objectName.keyName); // object

console.log("name", myObject.name);
console.log("title", myObject.title);
console.log("age", myObject.age);
console.log("childrens", myObject.childrens);
console.log("childrensData", myObject.childrensData);
console.log("alive", myObject.alive);

console.log("------------------")


console.log("Creating a new object through new keyword")
var characters = new Object();
// var characters = {};

console.log(characters, "characters")
console.log(typeof (characters))
console.log("------------------")

// assigning a new key vakue pair to the new object created

characters.character1 = "Luffy";
characters.character2 = "Zoro";
characters.character3 = "Nami";
characters["new character"] = "Sanji";

console.log(characters);

console.log(characters['new character'] , "new character");

console.log("--------------------")


// ways of adding elements in object

// directly mentioning inside object {key : value}
// using . notation object.name = "Usman"
// using [] notation object["name"] = "Usman"


var object = { name: "Usman" , age: 21 , skills : "unknown"};     // Declaration
// object.name = "Dakhani Usman";
object["name"] = "Usman Dakhani";   // Re Assign
console.log(object, "object");

console.log("--------------------")

// checking wheter the key property exists in object or not
console.log("existence of key property using 'in' operator ")
console.log("skills" in object);


console.log("--------------------")

// deleting element from object
console.log("deleting element from object")
var object = {
    name : "Usman",
    age : 21,
    skills : "unknown"
}


console.log(object);

delete object.skills;
console.log(object);


console.log("-----------------")


// Loop on objects
// loop on objects can be ran untill there is availability of key within object
console.log("Loop on objects")
for (var key in object){
    console.log(key , object[key]);
}

console.log("------------")

// function in an object
console.log("function in an object")
var object = {
    name : "Usman",
    age : function (){  // anonymous function => a function that does not have any name
        console.log(21);
        console.log(this.name);     // this refers to the correct object and using this u can access anything within the object
    }
}


console.log(object.age());
console.log("------------")


// Object Destructuring

var newObject = {
    name : "ABCD",
    age : 20,
    details : { height : 5.5 , weight : 60 }
}

console.log(newObject.details);
console.log(newObject.details.height, "height")


var {name , age , details} = newObject;  // keys can be used as variables like this
var {height} = details;
console.log(name, age , height);




// Trying on Array
// console.log("-----------")

// console.log("Creating a new array through new keyword")
// var characters = new Array()
// console.log(characters, "characters")
// console.log(typeof(characters))
// console.log("------------------")

// // assigning a new key vakue pair to the new object created

// characters[0] = "Luffy";
// characters[1] = "Zoro";
// characters[2] = "Nami";

// console.log(characters);
// console.log(typeof(characters));
