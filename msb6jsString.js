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

// let message = "Please repeat the 'Repeat' word";

// console.log(message.charAt(1));
// console.log(message.charAt(12));
// console.log(message.charAt(13));  // it will print blank as this index is in space

// console.log(message.charCodeAt(0));
// console.log(message.charCodeAt(7));

// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

// console.log(message.includes('repeat'));
// console.log(message.includes('REPEAT')); // All upper case - false
// console.log(message.includes('Repeat')); // both upper & lower case of repeat - true
// console.log(message.includes('Repeats'));

// console.log(message.startsWith('please')); // false as it starts with lower case
// console.log(message.startsWith('Please'));

// console.log(message.endsWith('word'));
// console.log(message.endsWith('Word')); // false as it ends with Upper case


// 6.3 String Methods: Search, IndexOf, lastIndexOf

// let message = "please repeat the 'repeat' word";

// console.log(message.search('repeat'));
// console.log(message.indexOf('repeat'));
// console.log(message.lastIndexOf('repeat'));

// console.log(message.search('repeaty'));
// console.log(message.indexOf('repeaty'));
// console.log(message.lastIndexOf('repeaty'));

// console.log(message.search('repeat'));
// console.log(message.indexOf('repeat', 14));
// console.log(message.lastIndexOf('repeat', 14));


// 6.4 String Methods: toString, Concat, Split

// toString Method:

// let message = "please repeat the 'repeat' word";
// let temp = 123;
// let tempBoolean = false;
// let tempArray = [1, 2, 3];

// console.log(typeof temp);
// console.log(typeof temp.toString());

// console.log(typeof tempBoolean);
// console.log(typeof tempBoolean.toString());

// console.log(typeof tempArray);
// console.log(typeof tempArray.toString());

// Concat Method:

// let m1 = 'I';
// let m2 = ' Love';
// let m3 = ' You.';

// let m = m1.concat(m2, m3);

// console.log(m);


// Split Method: 

// let message = "please repeat the 'repeat' word."

// console.log(message.split(' '));
// console.log(message.split("'"));
// console.log(message.split(''));
// console.log(message.split('', 3));


// 6.5 String Method: slice, subStr, subString

// let message = "please repeat the 'repeat' word ";

// console.log(message.slice(0, 6));
// console.log(message.slice(3, 9));
// console.log(message.slice(3));
// console.log(message.slice(-5, -1));

// console.log(message.substring(0, 6));

// console.log(message.substr(0, 6));
// console.log(message.substr(0, 13));


// 6.6 Escape Sequences:

let message1 = 'He said, "It\'s a sunny day.'
console.log(message1);

let message2 = '\t He said, "It\'s a sunny day.'
console.log(message2);

let message3 = 'He said, "It\'s a sunny day. \nHave a good day.'
console.log(message3);




