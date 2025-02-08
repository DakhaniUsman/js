// Reverse a String: Write a function that takes a string as input and returns the string reversed.

var string = "hello";

const reverseString = (string) => {

    for(let i = string.length - 1 ; i >=0 ; i--){
        console.log(`${string[i]}`);
    }

}


console.log(reverseString(string));


// using methods

var string = "hello";

const reversed = (string) => {

    var array = string.split("");
    console.log(array);

    var array = array.reverse();
    console.log(array);

    var output = array.join("");

    return output;


}

console.log(reversed(string))