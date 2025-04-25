// Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.



// The length property of a string returns the number of characters in the string, including spaces.
// length is property not a method because evry methood take () without that we don't called method
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8


let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t





//1. toUpperCase(): this method changes the string to uppercase letters.
// 2.toLowerCase(): this method changes the string to lowercase letters.
// indono me hume argument dene ki need bhi denge bhi to ignore kar deta hai 




// 3.substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(string.substring(4,6))    // Script
console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'Finland'
console.log(country.substring(3, 4))   // land



// 4. split(): The split method splits a string at a specified place. ye string ko array me change kar deta hai 

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]


console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(',')) 
console.log(countries.split(', '))  


// if hum only split() ye likhenge to bhi error nhi milega 
let str = "hello";
let result = str.split(); // No argument passed
console.log(result); // ["hello"]
let result1 = str.split("");
console.log(result1); //[ 'h', 'e', 'l', 'l', 'o' ]




//  5. trim(): Removes trailing space in the beginning or the end of a string.

let string1 = '   30 Days Of JavaScript   '

console.log(string1)
console.log(string1.trim(' '))
let name = ' Asabeneh '
console.log(name)
console.log(name.trim())  // still removes spaces at the beginning and the end of the string



// 7. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

 
console.log(string1.includes('Days'))     // true
console.log(string1.includes('days'))     // false - it is case sensitive!
console.log(string1.includes('Script'))   // true
console.log(string1.includes('script'))   // false
console.log(string1.includes('java'))     // false
console.log(string1.includes('Java'))     // true

 

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false
// include method case sensetivr hota  hai id  hume jo chahiye exact likhna chahiyee 
