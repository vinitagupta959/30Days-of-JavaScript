// Datatype:- A data type is a category that defines what kind of value a variable holds — like a number, a string (text), or a boolean (true/false).
// Think of it like organizing your kitchen. You have many items, and you sort them into categories like rice, lentils, vegetables, and spices. Similarly, in programming, we categorize different types of data using data types.

// in js  we have two type of datatype 
// first is primitive type and second iss non proimitive
 
/* 
In Primitive Data Types, we have 6 types:

1. Number: Includes both integer and float values.
   In JavaScript, integer and float are both treated as "number" type.

2. Boolean: Boolean has only two values – true and false.

3. Undefined: In JavaScript, if we declare a variable without assigning any value,
   it is considered "undefined". Also, if a function does not return anything, it gives "undefined".

4. Null: Means empty. If we assign null to a variable, it means it currently has no value.

5. String: A string means characters enclosed in quotes.
   Whatever is written inside "" (double quotes) or '' (single quotes) is treated as a string.

6. Symbol (ES6): Used to create unique identifiers. [Optional for beginners, can be added later]

note:- Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it.
*/





// primitive type
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined


//  Primitive types me assign karne par, hum jo value assign karte hain woh ek nayi copy hoti hai. Original value ko directly change nahi kiya jaa sakta.
























// non primitive type
function fruits(){
   console.log("add new")
}
console.log(typeof fruits)


let pens=[];
console.log(typeof pens);
console.log(Array.isArray(pens) ) //isse hum  arry hai ki  nhi pta  kar skte hai kyoki array ka data type object hi btata hai to hum is trh se pta karte hai 


let book={
   "name":"vinita"
}

console.log(typeof book);
console.log(Array.isArray(book));


// Primitive Data Types:
// Primitive types (like Number, String, Boolean, etc.) ko compare kar sakte hain because hum value ko compare karte hain.

// Jab hum do primitive variables ko compare karte hain, toh unka actual value compare hota hai, aur agar dono ki value same hai, toh true aata hai.


let a = 10;
let b = 10;

console.log(a === b); // true, because values are the same


// Non-Primitive Data Types:
// Non-primitive types (like Object, Array, etc.) ko directly compare nahi kar sakte.

// Comparison jab hota hai, toh address compare hota hai, na ki value. Agar dono ka address same hai, tab true aata hai. Agar address different hai, tab false.


let obj1 = { name: "Pihu" };
let obj2 = { name: "Pihu" };

console.log(obj1 === obj2); // false, because different memory addresses



// Jab hum non-primitive type ko ek variable se doosre variable ko assign karte hain, toh address share hota hai, na ki value.Isliye agar same address share ho raha ho, toh comparison true aata hai.


let object1 = { name: "Pihu" };
let object2 = object1;
 // obj2 shares the same address as obj1

console.log(object1 === object2);
// true, because they are pointing to the same address






















/* “What is the type of null in JavaScript?”
Or
“Why does typeof null return ‘object’?” */
// Jab JavaScript banaya ja raha tha tab ek bug ke wajah se `typeof null` ka result "object" aane laga. 
// Null actually ek primitive type hai jo empty ya intentional "no value" dikhata hai. Ye bug fix kiya ja sakta tha, lekin baad me bahut saari purani codes is behavior pe depend ho chuki thi, isliye isse aaj tak fix nahi kiya gaya — backward compatibility ke liye.


// short answer:-- typeof null returns "object" due to a legacy bug,but null is a primitive meant to show "no value".




// Ques:- What is the difference between null and undefined in JavaScript?
// null represents the intentional absence of any value. When you assign null to a variable, it means the variable is purposely empty or has no value. It is an explicit assignment. On the other hand, undefined represents a variable that has been declared but has not been assigned any value. It is the default state for uninitialized variables. Essentially, null is assigned deliberately, while undefined is the default when JavaScript doesn’t know what the value should be.
let x = null;           // 'x' has no value intentionally
let y;                  // 'y' is declared but has no value





//Ques:-  Why does JavaScript treat both integers and floats as number type?
// js me only ek hi number type hai kyoki js ise simple rakhna chahata tha na ki baki languages ki trh two types.


