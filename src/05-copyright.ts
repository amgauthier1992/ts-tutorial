//Original JS
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();

// year.setAttribute('datetime', thisYear);
// year.textContent = thisYear;

//1st variation
// let year: HTMLElement | null; //explicitly define what TS is inferring
// year = document.getElementById('year');

// let thisYear: string;
// thisYear = new Date().getFullYear().toString();

// if (year) {
//   year.setAttribute('datetime', thisYear);
//   year.textContent = thisYear;
// }

//2nd variation - Improved with assertions
const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();

year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
