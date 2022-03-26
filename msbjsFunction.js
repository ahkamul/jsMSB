// 8.1 Function Basics

// Function Declaration:

// function aboutMe (){
//     const message = 'I am John and 20 years old.'
//     console.log(message);
// };

// // Function call

// aboutMe();

// Function with parameter:

// function aboutMe(name, age){
//     const message = `I am ${name} and ${age} years old.`;
//     console.log(message);
// }

// aboutMe('Shafi', 45);
// aboutMe('Sujon', 46);

// Solution of adding problem;

// const num1 = 10; const num2 = 20;

// const sum = num1 + num2;

// console.log(sum);

// // Above solution can be done with function:

// function calcSum(num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }

// const result = calcSum(10, 20);

// console.log('Result = ' + result);


// // 8.2 Default Parameter

// function addThreeNumbers (num1, num2, num3 = 7){
//     const sum = num1 + num2 + num3;
//     return sum;
// }
// // console.log(addThreeNumbers(2, 7));

// const result = addThreeNumbers(2, 7);

// console.log('Result = ' + result);


// 8.3 Hoisting, Function as an Expression

// Hoisting 

// function calcSum (num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }
// console.log(calcSum(10, 20)); 

// // Expression

// const calcSumExp = function (num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }
// console.log(calcSumExp(100, 200)); 

// Difference between Hoisting and Expression is that function can be called even before declaration at the time of Hoisting. On the other hand, function can be called after declaration. 


// 8.4 Arrow Function 

// const calcSumArr = function (num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }
// console.log(calcSumArr(10, 20));

// // The above solution can be done by Arrow Function:

// const calcSumArrF = (num1, num2) => num1 + num2;

// // console.log(calcSumArrF(20, 30));
// const result = calcSumArrF(20, 30);
// console.log('Result = '+ result);

// Multiply by Two Problem: 

// const mulByTwo = function(num1){
//     return num1 * 2;
// }
// console.log(mulByTwo(6));

// const mulByTwoArr = (num1) => num1 * 2;

// console.log(mulByTwoArr(7));


// 8.5 Rest Parameter

// function multiply(... args){
//     //console.log(args);
//     let mul = 1;
//     for (let num of args){
//         mul = mul * num;
//     }
//     return mul;
// }
// console.log(multiply(2, 3, 4, 5, 6, 7));


// 8.6 Exercise - Area of Circle

// const circleArea = function(r){
//     const mul = 22/7 * (r * r);
//     return mul;
// }
// console.log(circleArea(7));

// // Solution alternatively

//  const circleOfArea = function(r){
//      const mul = Math.PI * r * r;
//      return mul;
//  }
//  console.log(circleArea(7));

//  // Solution another way:

//  const cirOfArea = function(radious){
//      return Math.PI * radious * radious;
//  }

//  const area = cirOfArea(7);

//  console.log('Area of Circle = ' + area);

//  // Solution with Arrow Function: 

//  const cirOfAreaArr = radious => Math.PI * radious * radious;

//  console.log(cirOfAreaArr(7));


// 8.7 Exercise - Max of Arguments:

let result = maxOfArgument (15, 42, 13, 42, 10, 12, 100);
console.log (result);

function maxOfArgument (... args){
    console.log(args);
    let maxValue = - 1;
    for(let i = 0; i < args.length; i++){
        if (maxValue < args[i]){
            maxValue = args[i]
        }
    }
    return maxValue;
}