"use strict";
///////////////////////////////////////////////////////////
/* Arrays and Tuples */
let strArr = ['one', 'hey', 'Andy'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['evh', 1984, true];
// strArr.push(42);
strArr[0] = 'John';
guitars[0] = 1984;
guitars.unshift('Jim');
//Tuple - more strict than an array, specified length with specified data at each position
let tuple = ['Dave', 1, false];
//cant assign array to tuple because array.length can be n items long, whereas tuple is predefined
///////////////////////////////////////////////////////////
/* Objects and Enums */
let obj; //undefined
obj = []; //From JS fundamentals, we know that functions and arrays are type object, so this is technically valid
console.log(typeof obj); //object
obj = {};
const exampleObj = {
    key1: 'andy',
    key2: true,
};
let evh = {
    name: 'Eddie',
    active: false,
    albums: [123, 456, '789'],
};
let jp = {
    name: 'Jimmy',
    //   active: false,
    albums: [123, 456, '789'],
};
// evh = jp;
// enum Grade {
//   F, //0
//   D, //1
//   C, //2
//   B, //3
//   A, //4
// }
// console.log(Grade.F); 0
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 1] = "F";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
