// 5.1 For Loop

// for (let index = 1; index <= 5; index ++) {
//     console.log ('Hello World', index);
// }

// for (let index = 5; index >= 1; index --) {
//     console.log ('How are you', index)
// }

// 5.2 While loop 

// let index = 1;

// while (index <= 5){
//     console.log ('Hello World', index);
//     index ++;
// }

// // console.log (index);


// 5.3 Do while loop 

// let index = 1;

// do {
//     console.log('Hello World', index);
//     index ++;
// } while (index <= 5);

// let index = 100;

// do {
//     console.log('Hello World', index);
//     index ++;
// } while (index <= 5);

// console.log(index);  i.e. do while loop will print minimum one time as condition is checked later.


// 5.4 For in loop

// Ex. 1

// const obj = {
//     name : 'John',
//     age : 47,
//     profession : 'Business',
// };

// for (let key in obj){
//     console.log (key, obj [key]);
// }


// Ex.2

// let numbers = [1, 2, 3, 4, 5];

// console.log (numbers);

// for (let index in numbers) {
//     console.log (index, numbers [index]); 
// }

// Ex. 3

// let names = ['Juthi', 'Bithi', 'Saroti', 'Alo'];

// console.log (names);

// for (let index in names){
//     console.log (index, names [index]);
// }


// 5.5 For of loop 

// let numbers = [11, 12, 13];

// for (let num of numbers) {
//     console.log (num);
// }


// 5.6 Break and Continue

// Ex. 1

// for (let index = 1; index <= 20; index++){
//     console.log(index);
//     if(index === 10){
//         break;
//     }
// }

// Ex. 2

// for (let index = 1; index <= 20; index++){
//     if (index === 10){
//         continue;
//     }
//     console.log(index);
// }

// Ex. 3

// for (let index = 1; index <= 20; index++){
//     if (index % 2 === 1){
//         continue;
//     }
//     console.log (index);
// }


// 5.8 Nested loop

// for (let i = 1; i <= 5; i++){
//     for (let j = 1; j <= 5; j++){
//         console.log (i, j);
//     }
// }


// 5.9 Exercise - Even Odd Numbers

// for (let index = 1; index <= 10; index++){
//     if (index % 2 === 1){
//         console.log(`${index} is an odd number`);
//     } else {
//         console.log (`${index} is an even number`)
//     }
// }

// Another way to print even - odd numbers

// for (let index = 1; index <= 10; index += 2){
//     console.log(`${index} is an odd number`);
// }

// for (let index = 2; index <= 10; index += 2){
//     console.log(`${index} is an odd number`);
// }


// 5.10 Exercise - Sum Of Numbers

// let numbers = [10, 20, 30, 40, 50, 60];
// let sum = 0;

// for (let index = 0; index < numbers.length; index++){
//     //sum = sum + numbers[index];
//     sum += numbers[index];
// }
// console.log('Sum = ' + sum);

// How the above program works:

// 0
// 0 + 10
// 0 + 10 + 20
// 0 + 10 + 20 + 30
// 0 + 10 + 20 + 30 + 40
// 0 + 10 + 20 + 30 + 40 + 50 
// 0 + 10 + 20 + 30 + 40 + 50 + 60

// 5.11 Exercise - Prime Numbers

// Ex. 1 

// let number = 13;

// let isPrime = true;

// for (let i = 2; i < number - 1; i++){
//     if (number % i === 0){
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime){
//     console.log('This is a prime number');
// } else {
//     console.log('This is not a prime number');
// }

// Ex. 2

let number = 10;

for (let number = 10; number <= 20; number++){
    let isPrime = true;
    for(let i = 2; i < number - 1; i++){
        if (number % i === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(number);
}

