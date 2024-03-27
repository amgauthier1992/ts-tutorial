"use strict";
//TS requires an Index signature if we try to access an object property dynamically or if we don't know what the properties of an interface are ahead of time
const todaysTransactions = {
    pizza: 50,
    books: 10,
};
todaysTransactions.gelato = 40; //adding a property that conforms to the index signature ("string": number)
//Accessing property dynamically
let prop = 'pizza';
console.log(todaysTransactions[prop]);
//Accessing property dynamically inside of a loop
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'Doug',
    gpa: 3.5,
    classes: [100, 200],
};
//Ex.1
for (const key in student) {
    console.log(`${key}: ${student[key]}`); //keyof creates a union type which is a string literal of name, gpa and classes.
}
//Ex.2
Object.keys(student).map((key) => {
    console.log(student[key]); //we don't know what the typeof student is so we are retrieving it by referencing itself
});
//Ex.3
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 200,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
