"use strict";
//Type Assertion / Type Casting
//convert to more or less specific type
let x = 'hello';
let y = x; //assignment to less specific type (string or number)
let z = x; //assignment to more specific type (string to literal type)
let z1 = 'world'; //This syntax cannot be used in TSX files for React
let z2 = 'world'; //This syntax cannot be used in TSX files for React
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b; //add 2 nums
    return '' + a + b; //add two nums and coerce/concat to string
};
let myVal = addOrConcat(2, 2, 'concat'); //We know that addOrConcat is going to return a string because we told it to (see logic). If we don't include `as string` here, TS will complain
let nextVal = addOrConcat(2, 2, 'concat'); //We're making a mistake here by asserting this will return a number. By passing the 'concat' string as the 3rd arg, we know the func will return a string. But TS is ok with this because the function returns a str or number.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Working with the DOM and Assertions */
// TS doesn't know anything about the document we're linking our JavaScript to.
// Here TS can infer that img variable is an HTMLImage type, but it can also be null (mousing over with Intellisense)
const img = document.querySelector('img'); //We can add a non null assertion (!) to assert that we know the img exists in the document so that TS doesn't think it's HTMLImage | null
// Here we are targeting an element by id, TS knows nothing except it's an HTMLElement | null until we assert it's an HTMLImage type
const myImg = document.getElementById('#myId');
const nextImg = document.getElementById('#myId'); //Again, this won't work in TSX files, but is another way of creating an assertion
img.src = ''; //Object is possibly null - TS acknowledges that it might not be in the document at all. We can add the non-null assertion (!) or `as HTMLImageElement`
myImg.src; //Object is possibly null and src doesn't exist on type HTMLElement. We can assert its an HTMLImageElement and not just an HTMLElement
