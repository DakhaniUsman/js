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

// Palindrome are words which are same when reveresed
// madam  abba radar abccba

// abcdcba
// a a      0 6
// b b      1 5
// c c      2 4
// d d      3 3 not requried

// noticed hwo one side is increasing till mid and other side is decreasing till mid

var word = "madam";

// console.log(word.length);

function Palindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    // console.log(i, word[i], word.length - 1 - i, word[word.length - 1 - i]);
    if (word[i] !== word[word.length - 1 - i]) {
      return "Word is not a palindrome";
    }
  }

  return word + " is Palindrome";
}

console.log(Palindrome(word));

console.log("-----------------");

console.log(Palindrome("abcdedcba"));
console.log("-----------------");

// How is works
// we know for a word to be palindrome its reverese should be same means that
// for madam
// m a d a m
// 0 1 2 3 4

// 0 == 4
// 1 == 3
// 2 == 2 not requried since same index

// we will run the for loop till the mid element
// on the way till mid element we will see these index positions 0 comparing with 4 , 1 comparing with 3

// if 0 == 4 and 1 == 3
//  then it means that the word is a palindrome

var word = "usman";

// u s m a n
// 0 1 2 3 4    0 == 4 , 1 == 3

// length = 5 // 5 - 1 // 4 //  4/2  = 2 => m

function newPalindrome(word) {
  for (let i = 0; i < Math.floor((word.length - 1) / 2); i++) {
    // console.log(i, word[i], word.length - 1 - i, word[word.length - 1 - i]);

    if (word[i] !== word[word.length - 1 - i]) {
      return word + " is not a Palindrome";
    }
  }

  return word + " is a Palindrome";
}

console.log(newPalindrome(word));

console.log("-----------------");
console.log("-------- Dakhani Usman --------");

function NeWPalindrome() {
  var name = "abba";

  for (var i = 0; i < Math.floor(name.length - 1) / 2; i++) {
    console.log(i, name[i], "  ", name.length - i, name[name.length - 1 - i]);

    if (name[i] !== name[name.length - 1 - i]) {
      return "Word is not a palindrome";
    }
  }
  return "Word is a palindrome";
}

console.log(NeWPalindrome());
