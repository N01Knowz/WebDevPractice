import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

//~~~Classes start

const invOne = new Invoice("Mario", "Debt on eating too much mushroom", 250);
const invTwo = new Invoice("Luigi", "Debt on eating too much turtles", 599);
invOne.format();
invTwo.format();

// console.log(invOne, invTwo);

let invoices: Invoice[] = [invOne]; // Makes it so that only variables that is Invoice class is allowed.
invoices.push(invTwo);

console.log(invoices);

invOne.amount = 600; // Even though invOne is const. You can change the properties.
// invOne.client = "Yoshi" // Not allowed because client property is in readonly and "Mario" is initialized for the value of invOne.client
// invTwo.amount = 'Peach'; // Not allowed because amount property is declared as a number
console.log(invoices);

invoices.forEach((invoice) => {
  console.log(
    "This is a foreach",
    invoice.client,
    // invoice.details, // details is now getting an error because details is in private
    invoice.amount,
    invoice.format()
  );
});

invoices.map((invoice) => {
  console.log(
    "This is a map",
    invoice.client,
    // invoice.details, // details is now getting an error because details is in private
    invoice.amount,
    invoice.format()
  );
});

let docOne: HasFormatter;
let docTwo: HasFormatter;
docOne = new Invoice("Yoshi", "Web Work", 500);
docTwo = new Payment("Mario", "Plumbing Work", 200);

let docs: HasFormatter[] = [docOne, docTwo];

console.log(docs);

//~~~Classes end

// ~~~ DOM start

// Querying for anchor element
const anchor = document.querySelector("a"); // Typescript doesn't know whether it exists or not
// console.log(anchor.href); // Not allowed because TypeScript doesn't know if anchor exists.

// Checking if anchor element exists before accessing its properties
if (anchor) {
  console.log(anchor.href);
}

// Querying for anchor element with assertion
const anchorCertain = document.querySelector("a")!; // TypeScript asserts that it exists.
console.log(anchorCertain.href); // No error because TypeScript is certain that anchorCertain exists.

// Querying for form element
// const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement; // TypeScript knows that it exists and it is a form.
// console.log(form.children);

// Querying for input elements
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// console.log(type.value);
const ul = document.querySelector(".item-list") as HTMLUListElement;
let list = new ListTemplate(ul);
// Handling form submission
form.addEventListener("submit", (e: Event) => {
  // console.log("HELLO");
  e.preventDefault();
  let doc: HasFormatter;

  if (type.value == "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  // Tuple use it to spread the values.

  // let values = [tofrom.value, details.value, amount.valueAsNumber]; // values array is not allowed to spread variable because it doesn't know if certain indexes should be the right data type.
  let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]; // Now allowed because it now knows that it has the right data type for the right index.
  if (type.value == "invoice") {
    doc = new Invoice(...values); // Array is not allowed because it doesn't know if it has the right data type to spread. Tuple is allowed because it knows it has the right data type spread.
  } else {
    doc = new Payment(...values); // Array is not allowed because it doesn't know if it has the right data type to spread. Tuple is allowed because it knows it has the right data type spread.
  }
  // // console.log(
  // //   type.value,
  // //   tofrom.value,
  // //   details.value,
  // //   amount.valueAsNumber // Converts input value to a number
  // // );
  // console.log(doc);
  // console.log(doc.format());

  list.render(doc, type.value, "end");
});
//~~~DOM end

//~~~Generics Start

// const addUID = <T>(obj: object) => {
// Doesn't know other properties other than uid.
// const addUID = <T>(obj: T) => {
// <T> is generic. But doesn't tell what data type so can pass in any data type.
// const addUID = <T extends object>(obj: T) => {
// <T> is generic. T should be an object.
const addUID = <T extends { name: string }>(obj: T) => {
  // <T> is generic. T should be an object and should have the property name.
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid }; // adds another key and value to the object
};

let varOne = addUID({ name: "Yoshi", age: 40 });
// let varTwo = addUID("HELLO"); //Allowed if <T> only and does not extend object

console.log(varOne);

console.log(varOne.name); // Error because addUID doesn't know any other property other than uid that it created. Allowed if the function is generic.

interface Resource<T> {
  // <T> Any data type you have coded
  uid: number;
  resourceName: string;
  data: T;
}

const varThree: Resource<string> = {
  // Since <T> is now a <string> [data: T;] is now = [data: string;]
  uid: 1,
  resourceName: "Person",
  data: "Shaun",
};

//~~~Generics End


//~~~Enum Start

enum ResourceType { // If no value given then it will be the index.
  BOOK, 
  AUTHOR, 
  FILM, 
  DIRECTOR, 
  PERSON
}

enum ResourceType2 { // If value given then it will be like an object with key and value.
  BOOK = "Ronaldo's Adventure", 
  AUTHOR = "Ronaldo", 
  FILM = "Ronaldo's World", 
  DIRECTOR = "Ronaldo Arnibal", 
  PERSON = "Arnibal"
}

interface Resource2<T> {
  // <T> Any data type you have coded
  uid: number;
  resourceType: ResourceType2;
  data: T;
}

const resOne: Resource2<object> = {
  // Since <T> is now a <object> [data: T;] is now = [data: object;]
  uid: 1,
  resourceType: ResourceType2.AUTHOR,
  data: { title: "name of the wind"},
};

const resTwo: Resource2<object> = {
  // Since <T> is now a <object> [data: T;] is now = [data: object;]
  uid: 1,
  resourceType: ResourceType2.PERSON,
  data: {name: "Yoshi"},
};

console.log(resOne, resTwo)

//~~~Enum End

//~~~Tuples Start
// Like array but certain index will have fixed data type

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'Yoshi';
arr = [30, false, 'Yoshi'];

let tup: [string, number, boolean] = ['Ryu', 25, false]; // 1st element should be string, 2nd should be number, 3rd should be boolean or it will throw an error.
// tup[0] = 25; // Not Allowed because index 0 should be string
tup[0] = "Ken" // Allowed because index 0 should be string.

let student: [string, number];
student = ['Chun-li', 28]; // Now we know that the first index should be a string and the 2nd is a number.
// student = [25, 'Ken']; // Which makes this not possible and make sure that we don't mix up what should be in what index

//~~~Tuples End