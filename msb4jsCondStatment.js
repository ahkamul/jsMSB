// 4.1 if else 

// let number = 0;

// if (number > 0){
//     console.log('This is positive number.')
// } else if (number < 0){
//     console.log ('This is negative number.')
// } else {
//     console.log('This is zero.')
// }


// 4.2 switch case 

// let color = 'red';

// switch (color) {
//     case 'red':
//         console.log('This is red.');
//         break;
//     case 'white':
//         console.log('This is white.');
//     case 'Green':
//         console.log('This is green.');
//         break;
    
//     default:
//         console.log('This is not a valid color.')
// }



// let number = -9;

// switch (number){
//     case ('number > 0'):
//         console.log('This is positive number.');
//         break;

//     case ('number < 0'):
//         console.log('This is negative number.');
//         break;

//     default:
//         console.log('This is Zero.')  // didn't get result i.e. always getting 'This is Zero'.
// }

// 4.3 Ternary Operator 

// let num1 = 10;
// let num2 = 2;

// let maxValue;

// if (num1 > num2) maxValue = num1;
//     else maxValue = num2; 

// console.log(maxValue);

// Same solution with ternary operator:

// let num1 = 10;
// let num2 = 2;

// let maxValue = num1 > num2 ? num1 : num2;

// console.log(maxValue); // Don't know how it has been happened. 

// Problem - Even & Odd number with Ternary Operator

// let number = 8;
// console.log(number % 2 === 0 ? 'even': 'odd');


// 4.4 Exercise - Fizz Buzz

// let number = 30;

// if (number % 3 === 0 && number % 5 === 0){
//     console.log('FizzBuzz');
// } else if (number % 3 === 0){
//     console.log('Fizz');
// } else if (number % 5 === 0){
//     console.log('Buzz');
// } else{
//     console.log('Nothing');
// }

// 4.5 Exercise - Fizz Buzz (with Ternary Operator)

// let number = 6000000;

// console.log (
//     number % 3 === 0 && number % 5 === 0
//     ? 'FizzBuzz'
//     : number % 3 === 0
//     ? 'Fizz'
//     : number % 5 === 0
//     ? 'Buzz'
//     : 'Nothing'
// ); 


// 4.6 Exercise - Leap Year or not

// let year = 16;

// if (year / 400 === 0){
//     console.log('It is a leap year.');
// } else if (year / 4 === 0 && year / 100 !== 0) {
//     console.log('It is a leap year.')
// } else {
//     console.log('It is not a leap year.')
// }


// 4.7 Exercise - Our Grading System

// let mark = 0;

// if (mark < 0 || mark > 100){
//     console.log('Invalid number')
// } else if (mark >= 80 && mark <= 100){
//     console.log('A+');
// } else if ( mark >= 70 && mark <= 79){
//     console.log('A');
// } else if ( mark >= 60 && mark <= 69){
//     console.log('A-');
// } else if ( mark >= 50 && mark <= 59){
//     console.log('B');
// } else if ( mark >= 40 && mark <= 49){
//     console.log('C');
// } else if ( mark >= 33 && mark <= 39){
//     console.log('D');
// } else {
//     console.log('F');
// }


// 4.8 Switch - case with multiple logical operators

const number = -87;

switch (true){
    case number > 0:
        console.log('This is positive.');
        break;

    case number === 0:
        console.log('This is zero.');
        break;

    default:
        console.log('This is negative.');
       
}