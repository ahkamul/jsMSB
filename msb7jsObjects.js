// 7.1 Object Basics with Dot & Bracket Notation: 

// const user = {
//     name : 'John',
//     age : 47,
//     hobby : 'reading',
// };

// console.log(user); 

// console.log(user.name);  // with Dot notation
// console.log(user.age);
// console.log(user.hobby);

// console.log(user['age']);
// console.log(user['name']);
// console.log(user['hobby']);


// 7.2 Adding, Modifying & Deleting Properties (with Dynamic Property Access):

// const user = {
//     name: 'John',
//     age: 47,
//     hobby: 'reading',
//     isMarried: true,
// };

// // Adding: 

// user.email = 'ahchy@gmail.com'; // using dot notation
// user['phone'] = '+88018******52';  // using bracket notation

// // console.log(user);

// // Update: 

// user.isMarried = false;
// user.age = user.age + 3;

// // Delete: 

// delete user.age;

// console.log(user);


// 7.3 Object Method & This Keyword: 

// const user = {
//     name: 'John',
//     age: 75,
//     isMarried: true,
//     friends: ['Mary', 'Smith'],
//     calculateAge: function(){
//         // console.log('I am 47 years odl!');
//         console.log(`I am ${this.age} years old!`)
//     }
// };

// user.calculateAge();


// 7.4 Traversing Object Entries:

// const user = {
//     name: 'John',
//     age: 47,
//     gender: 'male',
//     email: 'ahchy@gmail.com',
//     phone: '+8801827*****2',
// }

// // Way 1:

// // for (let key in user){
// //     console.log(key, user[key]);
// // }

// // Way 2:

// // console.log(Object.keys(user));
// // console.log(Object.values(user));

// for (let key of Object.keys(user)){
//     console.log(key);
// }

// for (let val of Object.values(user)){
//     console.log(val);
// }


// 7.5 Exercise - Total Salary

// const salaries = {
//     Jhon: 3000,
//     Smith: 4000,
//     Mary: 5000,
//     Carlos: 6000,
//     Robert: 7000,
//     Harry: 8000,
//     David: 9000,
// }

// sum = 0;

// // for (let key in salaries){
// //     //console.log(key, salaries[key]);
// //     //sum = sum + salaries[key];
// //     sum += salaries[key];
// // }

// // console.log('Sum = ' + sum);

// for (let val of Object.values(salaries)){
//     sum += val;
// }

// console.log('Total Salary = ' + sum); 


// 7.6 Object Destructuring :

// const user = {
//     name: 'John',
//     age: 47,
//     favBook: {
//         name: 'Hangor Nadi Granade',
//         author: 'Selina Hosen',
//     },
// };

// // console.log(user.name);
// // console.log(user.age);
// // console.log(user.favBook.name);
// // console.log(user.favBook.author);

// const {name, age, favBook} = user;

// console.log(name);
// console.log(age);
// console.log(favBook.name);
// console.log(favBook.author);

// const {name:title, author} = favBook;

// console.log(name);
// console.log(age);
// console.log(title);
// console.log(author);


// 7.7 Exercise - Doctor Object (Learn Object All in One):

// const docObject = {
//     name: 'John',
//     designation: 'Medicine Specialist',
//     clinic: {
//         name: 'Happy Care Clinic',
//         address: {
//             long: 23.66,
//             lat: 90.44,
//             },
//         },
//     Operation: function(){
//         console.log('He started doing operation')
//     },
// };

// // console.log(docObject);
// // console.log(docObject.name);
// // console.log(docObject.designation);
// // console.log(docObject.clinic.name);
// // console.log(docObject.clinic.address);

// // Object Destructuring

// // const {name, designation, clinic} = docObject;
// // const {name : clinicName, address} = clinic;
// // const {long, lat} = address;

// // Object Destructuring in Oneline: 

// const {name, designation, 
//         clinic: {name : clinicName, 
//             address: {long, lat}} } = docObject

// console.log(name);
// console.log(designation);
// console.log(clinicName);
// console.log(long);
// console.log(lat);

// for (let prop in docObject){
//     console.log(prop, docObject[prop]);
// }


// 7.8 Cloning an Object:

// const user = {
//     name: 'John',
//     age: 34,
// }

// // const copiedUser = {};
// // copiedUser.name = user.name;
// // copiedUser.age = user.age;

// // for (let key in user){
// //     console.log(key, user[key]);
// //     copiedUser[key] = user[key];
// // }

// // const copiedUser = Object.assign({}, user);

// // console.log(copiedUser);

// const copiedUser = {... user};

// console.log(copiedUser);


// 7.9 Math Object

// console.log(Math.PI);
// console.log(Math.random);
console.log(Math.round(1.7));
console.log(Math.round(1.2));

console.log(Math.ceil(1.2));
console.log(Math.ceil(1.6));

console.log(Math.floor(1.2));
console.log(Math.floor(1.6));

console.log(Math.max(1, 2, 3, 100, 2000, -5));
console.log(Math.min(1, 2, 3, 100, 2000, -5));