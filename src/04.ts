//Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

//Literal types
let nom: 'Dave';
// nom = 'Andy'; //cant reassign nom to be something that isn't of type 'Dave'

type UserId = stringOrNumber; //using alias from above on line 2

type GuitarBoi = {
  name: string;
  active?: boolean; //? makes property optional
  albums: stringOrNumberArray; //using alias from above on line 3
};

// interface PostId = stringOrNumber; //we can't use aliases with interfaces

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const addTwo = (a: number, b: number): number => {
  //adding a function return type alongside types for parameters
  return a + b;
};

const logMsg = (message: any): void => {
  //return type is void because it doesn't return anything (no return statement)
  console.log(message);
};

logMsg('hello');
logMsg(addTwo(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number; //alias for math function type, a function that expects 2 params (numbers) and returns a number
// interface mathyFn {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (a, b) {
  return a * b;
};

logMsg(multiply(2, 2));

//Optional Parameters

// 1. Have to be last in the list of params
// 2. Add a type guard to ensure that TS doesn't complain. This is our if statement. Not sure what the difference of this is versus just doing a null/undefined check i.e. if(!c)

const addAll = (a: number, b: number, c?: number): number => {
  //type guard
  if (typeof c !== 'undefined') {
    return a + b + c;
  }

  return a + b;
};

//Default value

//1. Don't have to be last in the list of params, but you would have to explicitly pass undefined as an argument when calling the
// fn in order to supply additional arguments and "skip" over the first argument.
//2. Will not work when we define a function signature or type alias for a function (see line 37)

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2)); //7
logMsg(addAll(2, 3)); //5
logMsg(sumAll(2, 3)); //7
// logMsg(sumAll(undefined, 2));

// Rest Params

//1. Have to come at the end of all params (we know this from React)

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3)); //15

// Never type - Explicitly for functions that throw Errors

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infiniteLoop = (): never => {
  let i: number = 1;
  while (true) {
    i++;
    // if(i > 100) break; //makes this fn a type void
  }
};

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

//use of the never type
const numberOrStringFunc = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';
  //without this below return we would get the error: function lacks ending return statement amd return type does not include undefined
  return createError('This should never happen!');
};
