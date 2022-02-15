// 6.1 String Basics

// let country = 'Bangladesh';
// // let country = "Bangladesh";
// // let country = `Bangladesh`;

// console.log(country);
// console.log(typeof country);
// console.log(country[0]);
// console.log(country.charAt(0));
// console.log(country[10]);
// console.log(country.charAt(10));
// console.log(country.length);


// 6.2 String Methods: charAt, charCodeAt, toUpperCase, toLowerCase, includes, startsWith, endsWith

let message = "Please repeat the 'Repeat' word";

console.log(message.charAt(1));
console.log(message.charAt(12));
console.log(message.charAt(13));  // it will print blank as this index is in space

console.log(message.charCodeAt(0));
console.log(message.charCodeAt(7));

console.log(message.toUpperCase());
console.log(message.toLowerCase());

console.log(message.includes('repeat'));
console.log(message.includes('REPEAT')); // All upper case - false
console.log(message.includes('Repeat')); // both upper & lower case of repeat - true
console.log(message.includes('Repeats'));

console.log(message.startsWith('please')); // false as it starts with lower case
console.log(message.startsWith('Please'));

console.log(message.endsWith('word'));
console.log(message.endsWith('Word'));



