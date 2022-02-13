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

let names = ['Juthi', 'Bithi', 'Saroti', 'Alo'];

console.log (names);

for (let index in names){
    console.log (index, names [index]);
}



