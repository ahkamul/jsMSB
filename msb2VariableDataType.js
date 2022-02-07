// 2.4 Reference types: Object (Basics)

// let name ='John';
// let age = 47;
// let hobby = 'reading'

// The above codes can be written with object in JS:

// let user = {
//     name : 'John',
//     age : 47,
//     hobby : 'reading'
// }

// // Printing with dot notation: 
// console.log (user); 
// console.log (user.name);
// console.log (user.age);
// console.log (user.hobby);

// console.log(user['name']);
// console.log(user['age']);
// console.log(user['hobby']);

// 2.5 Reference type: Array (Basics)

// let friends = ['John', 'Mary', 'Smith'];

// console.log(friends);
// console.log(friends[2]);
// console.log(friends[0]);

// console.log(friends.length);


// 2.6 Reference type: Function (Basics)

// function showMyName () {
//     console.log('My name is John');
// } 
// showMyName();  // That is called 'Calling function' 

// function showMyName (name) {
//     //console.log (name);
//     console.log('My name is ' + name)
// }

// showMyName('John');
// showMyName('Mary');
// showMyName('Smith');

// function calcSum (num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let result = calcSum (10, 20);
//  console.log('Result = ' + result); 


// 2.7 Template Literals 

// let name = 'Smith';

// console.log(`My name is ${name}`);
// console.log(`${10 + 11}`);

// let message = 'How are you?  \nWhen can you go ?'

// console.log(message)


// 2.8 Exercise - Person Object 

// let person = {
//     name: 'John',
//     age: 47,
//     isMarried: true,
//     homeAddress: {
//         long:83.33,
//         lat: 24.44},

//     friends: ['Jeff', 'Marry', 'Smith'],
//     }
// console.log(person);
// console.log(person.age);
// console.log(person.isMarried);
// console.log(person.homeAddress);
// console.log(person.homeAddress.lat);
// console.log(person.friends);
// console.log(person.friends [1]);