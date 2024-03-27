// TypeScript does allow for generics because sometimes we simply don't know what types

//abstracting out the type so that this function works with any type that's passed into it.

// <T> is a type variable
// Using <T> inside the parameter. arg can be any type
// echo returns a T type

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Andy' }));
console.log(isObj(null)); //null returns typeof object

// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   if (Array.isArray(arg) && !arg.length) {
//     return {
//       arg,
//       is: false,
//     };
//   }
//   if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//     return {
//       arg,
//       is: false,
//     };
//   }

//   return { arg, is: !!arg }; //!! (double bang) operator is used when we want to ensure that a value is coerced to it's boolean equivalent in a concise manner
// };

/* Quick lowdown of !! */
let value = 5;
console.log(!!value); // Output: true  (step 1: !5 is false / step 2: !false is true)

value = 0;
console.log(!!value); // Output: false (step 1: !0 is true / step 2: !true is false)

// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue('Dave'));
// console.log(isTrue(''));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({})); //our function says empty obj is false, even though it's technically true
// console.log(isTrue({ name: 'Andy' }));
// console.log(isTrue([]));
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));

///////////////////////////////////////////////////////////////////////////

interface BoolCheck<T> {
  value: T; //type placeholder in interface
  is: boolean;
}

//using interface as a return type with type variable
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return {
      value: arg,
      is: false,
    };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return {
      value: arg,
      is: false,
    };
  }

  return { value: arg, is: !!arg }; //!! (double bang) operator is used when we want to ensure that a value is coerced to it's boolean equivalent in a concise manner
};

////////////////////////////////////////////////////

interface hasId {
  id: number;
}

const processUser = <T extends hasId>(user: T): T => {
  //narrowing the type variable so that whatever we pass as an argument for `user` needs to have an id property
  return user;
};

// console.log(processUser({ name: 'Andy' })); //error
console.log(processUser({ id: 1, name: 'Andy' }));

////////////////////////////////////////////////////

const getUsersProperty = <T extends hasId, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map((user) => user[key]);
};

////////////////////////////////////////////////////

class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject('John'); //after we assign John as a string type to our state, TS infers this and doesn't let us reassign state to another type
console.log(store.state);

store.state = 'Dave';
// store.state = 12; //error

const myState = new StateObject<(string | number | boolean)[]>([15]); //now our state will accept an array of strings, numbers or booleans after we assign it to [15]
