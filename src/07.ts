//TS requires an Index signature if we try to access an object property dynamically or if we don't know what the properties of an interface are ahead of time

interface TransactionObj {
  //   readonly [index: string]: number; //Index signature - all keys are strings, all values are numbers
  [index: string]: number;
  pizza: number; //adding required properties to our interface below the creation of the index signature
  books: number;
}

const todaysTransactions: TransactionObj = {
  pizza: 50,
  books: 10,
};

todaysTransactions.gelato = 40; //adding a property that conforms to the index signature ("string": number)

//Accessing property dynamically
let prop: string = 'pizza';
console.log(todaysTransactions[prop]);

//Accessing property dynamically inside of a loop
const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction]; 
  }

  return total;
};

console.log(todaysNet(todaysTransactions));

////////////////////////////////////////////////////////////////

//keyof assertion is a combo of the `keyof` and `as` keywords. They let us iterate through objects without an index signature.

interface Student {
  // [key: string]: string | number | number[] | undefined; //Removed index signature
  name: string;
  gpa: number;
  classes?: number[];
}

const student: Student = {
  name: 'Doug',
  gpa: 3.5,
  classes: [100, 200],
};

//Ex.1
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); //keyof creates a union type which is a string literal of name, gpa and classes.
}

//Ex.2
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]); //we don't know what the typeof student is so we are retrieving it by referencing itself
});

//Ex.3
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

///////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
//   [key: 'salary']: number; //this is invalid, but the Record utility type solves this for us
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<Streams, number | string>; //can provide literal types to represent keys of an interface when using the Record utility type

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 200,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
