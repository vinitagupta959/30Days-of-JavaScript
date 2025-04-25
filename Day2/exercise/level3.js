// 1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let count = sentence1.match(/love/gi).length;
console.log(count);

// Yaha pe hum gi use kar rahe hain — jisme g ka matlab hota hai global, yani jitni baar wo word string me milega, match method sabko dikhayega. Aur match() method hamesha ek array return karta hai jisme saare matched words hote hain. isliye hum isme ".length" ka use karne se uska count aa rha





// 2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
sentence1='You cannot end a sentence with because because because is a conjunction'
console.log(sentence1.match(/because/gi).length);






// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).


// 4.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'