// 1. Using console.log() print out the following statement:
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

// second tarika
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");





// 2. Using console.log() print out the following quote by Mother Teresa:
console.log("'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'-By Mother Teresa");




// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log("10"==10)


//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8')==10); //false

let num = parseFloat('9.8');
let roundedNum = Math.round(num);
console.log(roundedNum == 10);  // Output: true



// 5. Check if 'on' is found in both python and jargon
let str1 = 'python';
let str2 = 'jargon';

console.log(str1.includes('on') && str2.includes('on'));  



// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence="I hope this course is not full of jargon."
console.log(sentence.includes('jargon'));



// 7. Generate a random number between 50 and 100 inclusively.

console.log(Math.random()*10) //9.480792306491011
console.log(Math.random()*100)
console.log(Math.floor(Math.random() * 51) + 50);





// 11.Use console.log() and escape characters to print the following pattern.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 6\n5 1 5 25 125");


// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substr(31,23));
console.log(sentence.substring(31,54));



// substring(start, end) Start index se begin karta hai, aur end index se pehle tak ka part return karta hai.
// end index include nahi hota.
// Syntax: str.substring(startIndex, endIndex)

// substr(start, length) Start index se begin karta hai, aur length ke hisaab se characters nikaalta hai.
// Syntax: str.substr(startIndex, length)