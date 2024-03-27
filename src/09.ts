/* Partial- create a new type with all the properties of type T, but with all properties set to optional */

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

//using Partial here for the propsToUpdate param which is a type Assignment. Since we might want to only update 1 property, this is useful
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {
    ...assign,
    ...propsToUpdate,
  };
};

const assign1: Assignment = {
  studentId: 'compsci123',
  title: 'final',
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

/* Required - create a new type with all the properties of type T, and with all properties set to required */

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

/* Readonly - ensures that we can't overwrite any properties of type T */

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

/* Record - Construct a type with a set of properties K of type T */

//Ex.1
const hexColorMap: Record<string, string> = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
};

//Ex.2
type Students = 'Sara' | 'Kelly'; //keys
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'F'; //values

const finalGrades: Record<Students, LetterGrades> = {
  Sara: 'B',
  Kelly: 'A',
};

//Ex.3
interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 88 },
  Kelly: { assign1: 94, assign2: 95 },
};

/* Pick- create a new type by selecting properties from an existing type T */

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

const score: AssignResult = {
  studentId: '123',
  grade: 85,
};

/* Omit- Opposite of Pick. Create a new type by omitting specified properties from an existing type. */

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>; //omitting grade and verified from Assignment type

const preview: AssignPreview = {
  //passing in the other properties required by the interface we did not explicitly omit to satisfy compiler
  studentId: '123',
  title: 'final',
};

/* Exclude- exclude from T those types that are assignable to U */

type adjustedGrade = Exclude<LetterGrades, 'F'>;

/* Extract- extract from T those types that are assignable to U */

type highGrades = Extract<LetterGrades, 'A' | 'B'>;

/* Non-nullable- Exclude null and undefined from T */

type AllPossibleGrades = 'A' | 'B' | 'C' | 'D' | 'F' | null | undefined;
type GradesOnly = NonNullable<AllPossibleGrades>;

/* ReturnType- Obtain the return type of a function type */

// type newAssign = { title: string; points: number };

// const createNewAssign = (title: string, points: number): newAssign => {
//   return {
//     title,
//     points,
//   };
// };

const createNewAssign = (title: string, points: number) => {
  return {
    title,
    points,
  };
};

type NewAssign = ReturnType<typeof createNewAssign>; //derive return type from function

const tsAssign: NewAssign = createNewAssign('Utility Types', 100);

/* Parameters- Obtain the return type of function parameters */

type AssignParams = Parameters<typeof createNewAssign>; //tuple

const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

/* Awaited- helps us with the ReturnType of a Promise */

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

//Promise<User[]> signifies that fetchUsers is an async function that returns a promise. When the promise resolves, it will contain an array of User objects
const fetchUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    //checking if res is ok before parsing JSON response
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Re-throw the error for the caller to handle
  }
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; //note that the ReturnType without using Awaited is a promise. We can change this using awaited so that it becomes the resolved promise which is the array of users

fetchUsers().then((users) => console.log(users));
