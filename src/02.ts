let myName: string = 'Andy'; //No longer inferring, we explicitly declare this variable as a string
let album: string | number; //Union Type can be more than 2 types as well!
album = 1984;
album = '123';
// album = true; /* Error */

//TypeScript can infer what a function is going to return based on what it knows from the function.
//But we can also explicitly define the types for it's parameters and it's return type.
const sum = (a: number, b: number): number => {
  return a + b;
};

let regExp: RegExp = /\w+/g;
