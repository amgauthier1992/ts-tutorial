"use strict";
//Literal types
let nom;
// interface PostId = stringOrNumber; //we can't use aliases with interfaces
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const addTwo = (a, b) => {
    //adding a function return type alongside types for parameters
    return a + b;
};
const logMsg = (message) => {
    //return type is void because it doesn't return anything (no return statement)
    console.log(message);
};
logMsg('hello');
logMsg(addTwo(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathyFn {
//   (a: number, b: number): number;
// }
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(2, 2));
//Optional Parameters
// 1. Have to be last in the list of params
// 2. Add a type guard to ensure that TS doesn't complain. This is our if statement. Not sure what the difference of this is versus just doing a null/undefined check i.e. if(!c)
const addAll = (a, b, c) => {
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
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2)); //7
logMsg(addAll(2, 3)); //5
logMsg(sumAll(2, 3)); //7
// logMsg(sumAll(undefined, 2));
// Rest Params
//1. Have to come at the end of all params (we know this from React)
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3)); //15
// Never type - Explicitly for functions that throw Errors
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infiniteLoop = () => {
    let i = 1;
    while (true) {
        i++;
        // if(i > 100) break; //makes this fn a type void
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrStringFunc = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    //without this below return we would get the error: function lacks ending return statement amd return type does not include undefined
    return createError('This should never happen!');
};
