///////////////////////////////////////////////////////////
/* Arrays and Tuples */

let strArr: string[] = ['one', 'hey', 'Andy'];
let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150];
let mixedData: (string | number | boolean)[] = ['evh', 1984, true];

// strArr.push(42);
strArr[0] = 'John';

guitars[0] = 1984;
guitars.unshift('Jim');

//Tuple - more strict than an array, specified length with specified data at each position

let tuple: [string, number, boolean] = ['Dave', 1, false];

//cant assign array to tuple because array.length can be n items long, whereas tuple is predefined

///////////////////////////////////////////////////////////
/* Objects and Enums */

let obj: object; //undefined
obj = []; //From JS fundamentals, we know that functions and arrays are type object, so this is technically valid
console.log(typeof obj); //object
obj = {};

const exampleObj = {
  key1: 'andy',
  key2: true,
};

type Guitarist = {
  name: string;
  active?: boolean; //?makes property optional
  albums: (string | number)[];
};

//Can use both type or interface to define Objects. Interfaces seem to be the preferred option
interface Drummer {
  name: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [123, 456, '789'],
};

let jp: Guitarist = {
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

enum Grade {
  F = 1,
  D, //2
  C, //3
  B, //4
  A, //5
}
