let username = 'Andy'; //Mousing over username to use intelliSense, we can see that TS infers the type of string for this variable
// username = 42; /* Since username has been inferred to be a string, we cannot reassign it to be a number like we are here */

console.log(username);

let a: number = 12;
let b: number = 6;
let c: number = 2;

console.log(a / b);
console.log(a * b);

//Main takeaways: 
//1. Valid JS is valid TypeScript, but that doesn't mean the compiler has to like it. Therefore, we should pay attention to the TS compiler.
//2. We can't reassign a variable to be a different type
