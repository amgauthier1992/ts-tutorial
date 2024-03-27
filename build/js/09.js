"use strict";
/* Partial- create a new type with all the properties of type T, but with all properties set to optional */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//using Partial here for the propsToUpdate param which is a type Assignment. Since we might want to only update 1 property, this is useful
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'compsci123',
    title: 'final',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
/* Required - create a new type with all the properties of type T, and with all properties set to required */
const recordAssignment = (assign) => {
    return assign;
};
/* Readonly - ensures that we can't overwrite any properties of type T */
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
/* Record - Construct a type with a set of properties K of type T */
//Ex.1
const hexColorMap = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
};
const finalGrades = {
    Sara: 'B',
    Kelly: 'A',
};
const gradeData = {
    Sara: { assign1: 85, assign2: 88 },
    Kelly: { assign1: 94, assign2: 95 },
};
const score = {
    studentId: '123',
    grade: 85,
};
const preview = {
    //passing in the other properties required by the interface we did not explicitly omit to satisfy compiler
    studentId: '123',
    title: 'final',
};
/* ReturnType- Obtain the return type of a function type */
// type newAssign = { title: string; points: number };
// const createNewAssign = (title: string, points: number): newAssign => {
//   return {
//     title,
//     points,
//   };
// };
const createNewAssign = (title, points) => {
    return {
        title,
        points,
    };
};
const tsAssign = createNewAssign('Utility Types', 100);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
//Promise<User[]> signifies that fetchUsers is an async function that returns a promise. When the promise resolves, it will contain an array of User objects
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch('https://jsonplaceholder.typicode.com/users');
        //checking if res is ok before parsing JSON response
        if (!res.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = yield res.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching users:', error);
        throw error; // Re-throw the error for the caller to handle
    }
});
fetchUsers().then((users) => console.log(users));
