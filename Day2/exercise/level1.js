// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge= '30 Days Of JavaScript';


// 2. Print the string on the browser console using console.log()
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()

console.log(challenge.length);



// 4.Change all the string characters to capital letters using toUpperCase() method
 console.log(challenge.toUpperCase());
 


//  5. Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase());


// 6. Cut (slice) out the first word of the string using substr() or substring() method
let substring=challenge.substring(15,21);
console.log(substring);


// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let str = "30 Days Of JavaScript";
let result = str.slice(3);  
console.log(str.substring(3));
console.log(result);   
// slice() and substring()sono se ho skta  hai 


// 8. Check if the string contains a word Script using includes() method
let word="javaScript"
console.log(word.includes('Script'));//true


console.log(word.includes('script'));//fasle because of case sestive

// 9.Split the string into an array using split() method
console.log(word.split(''));
// ['j', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't']
console.log(word.split());// [ 'javaScript' ]


// 10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(str.split(" "));


// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let company='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(","))



// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(str.replace("JavaScript","Python"))


// 13.  What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(str.charAt(50));

console.log(str.charAt(15));
// charAt argument me number leta hai or btata  hai us  index me kya  hai  and if hum of of length dete hai to ye kuch bhi return nhi karta 



// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(str.charCodeAt(15));
// charCodeAt(index) ek character ko numeric value (ASCII ya Unicode code point) me convert karta hai. or argument me indecx leta hai




// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(str.indexOf('a'));
// ye mthod me jo bhi character hum denge jaha bhi use first vo milga  usi index ko return karta hai






// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(str.lastIndexOf('a'));
// is method me sbse last me vo character kitne number means index mee hai





// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'


let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf('because'));

// 18 .Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'));


// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'));
// ye bilkul indexOf() jaisa  hi hai but  Regular expressions ko support karta hai, jisme hum complex patterns search kar sakti ho (like digits, spaces, etc.).



// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
str = ' 30 Days Of JavaScript ';
console.log(str.trim());




// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(str.startsWith("30"));
// ye abhi false de rha  kyoki humne str me jo value di hai vo space se start ho rhi
str = '30 Days Of JavaScript';
console.log(str.startsWith("30")); //true



// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(str.endsWith("Script")); //true



// 23.Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(str.match('a'));
// [ 'a', index: 4, input: '30 Days Of JavaScript', groups: undefined ]
// isme only first vala a ko le rha or additon info de rha.When you use str.match('a') (without regular expressions), JavaScript gives you an array with the matched result and extra properties:


console.log(str.match(/a/g)); //g stand for global flag (g), which allows matching all occurrences in the string.


// 24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let str1 = "30 Days of";
let str2 = "JavaScript";
console.log(str1.concat(" ", str2));   
// hum jaise  chahe concat  kar skte hai like space se, "," se


// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(str.repeat(2));

