"use strict";
// ~~~ DOM start
// Querying for anchor element
const anchor = document.querySelector('a'); // Typescript doesn't know whether it exists or not
// console.log(anchor.href); // Not allowed because TypeScript doesn't know if anchor exists.
// Checking if anchor element exists before accessing its properties
if (anchor) {
    console.log(anchor.href);
}
// Querying for anchor element with assertion
const anchorCertain = document.querySelector('a'); // TypeScript asserts that it exists.
console.log(anchorCertain.href); // No error because TypeScript is certain that anchorCertain exists.
// Querying for form element
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form'); // TypeScript knows that it exists and it is a form.
// console.log(form.children);
// Querying for input elements
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// console.log(type.value);
// Handling form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//~~~DOM end
//~~~Classes start
class Invoice {
    constructor(c, d, a) {
        this.client = c; // Needs this so that it knows that it should use the property client of the Invoice class.
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Mario", "Debt on eating too much mushroom", 250);
const invTwo = new Invoice("Luigi", "Debt on eating too much turtles", 599);
invOne.format();
invTwo.format();
// console.log(invOne, invTwo);
let invoices = [invOne]; // Makes it so that only variables that is Invoice class is allowed.
invoices.push(invTwo);
console.log(invoices);
invOne.client = "Yoshi"; // Even though invOne is const. You can change the properties.
// invTwo.amount = 'Peach'; // Not allowed because amount property is declared as a number
console.log(invoices);
//~~~Classes end
