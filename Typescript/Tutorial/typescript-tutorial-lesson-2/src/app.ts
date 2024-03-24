// ~~~ DOM start

// Querying for anchor element
const anchor = document.querySelector('a'); // Typescript doesn't know whether it exists or not
// console.log(anchor.href); // Not allowed because TypeScript doesn't know if anchor exists.

// Checking if anchor element exists before accessing its properties
if (anchor) {
    console.log(anchor.href);
}

// Querying for anchor element with assertion
const anchorCertain = document.querySelector('a')!; // TypeScript asserts that it exists.
console.log(anchorCertain.href); // No error because TypeScript is certain that anchorCertain exists.

// Querying for form element
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; // TypeScript knows that it exists and it is a form.
// console.log(form.children);

// Querying for input elements
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// console.log(type.value);

// Handling form submission
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber, // Converts input value to a number
    );
})

//~~~DOM end

//~~~Classes start

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c; // Needs this so that it knows that it should use the property client of the Invoice class.
        this.details = d;
        this.amount = a;
    }

    format() { // When you create a function in a class. No need to write function. This is called a method
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice("Mario", "Debt on eating too much mushroom", 250);
const invTwo = new Invoice("Luigi", "Debt on eating too much turtles", 599);
invOne.format();
invTwo.format();

// console.log(invOne, invTwo);

let invoices: Invoice[] = [invOne]; // Makes it so that only variables that is Invoice class is allowed.
invoices.push(invTwo);

console.log(invoices);

invOne.client = "Yoshi"; // Even though invOne is const. You can change the properties.
// invTwo.amount = 'Peach'; // Not allowed because amount property is declared as a number
console.log(invoices);

//~~~Classes end