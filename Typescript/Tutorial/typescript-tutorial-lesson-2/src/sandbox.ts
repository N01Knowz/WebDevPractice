// TypeScript extends JavaScript with static typing and other language features,
// providing developers with stricter guidelines for writing robust and maintainable code.


//~~~Variables Start

// Declaring variables without specifying types (implicitly typed)
var characterName = "Mario"; // If String then can only update value to string.
var characterAge = 25; // If Number then can only update value to number.
var characterIsMale = true; // If boolean then can only update value to boolean.

// Declaring variables with explicit types
var characterName: string; // Can also declare without putting any value.
var characterName: string = "Mario"; // Can also use this syntax to declare datatype.
// characterName = 13; // Error: Type 'number' is not assignable to type 'string'.
characterName = 'Luigi'; // Valid: Updating string variable.

var characterAge: number;
var characterAge: number = 25;
// characterAge = "25"; // Error: Type 'string' is not assignable to type 'number'.
characterAge = 26; // Valid: Updating number variable.

var characterIsMale: boolean;
var characterIsMale: boolean = true;
// characterIsMale = "25"; // Error: Type 'string' is not assignable to type 'boolean'.
characterIsMale = false; // Valid: Updating boolean variable.

var anyVariable: any; // Declaring variable with 'any' type, allowing any value to be assigned
anyVariable = "Hello";
anyVariable = 25;
anyVariable = true;

var unionVariable: string | number; // Declaring variable with union type (string or number)
unionVariable = "Hello"; // Valid: Can be assigned a string
unionVariable = 42; // Valid: Can be assigned a number
// unionVariable = true; // Error: Type 'boolean' is not assignable to type 'string | number'

// Declaring variables with const keyword (constants)
const PI = 3.14;
// PI = 3.14159; // Error: Cannot assign to 'PI' because it is a constant.

const MAX_SIZE: number = 100; // Const variable with explicit type.
// MAX_SIZE = 200; // Error: Cannot assign to 'MAX_SIZE' because it is a constant.

// Declaring variables with chosen types of values
let sword: "Rapier" | "Longsword"; // Declaring a variable with only two possible string values
let polearm: "Spear" | "Halberd" = "Halberd"; // Declaring a variable with only two possible string values and have a value.
sword = "Rapier"; // Valid: Can be assigned "Rapier"
// sword = "Spear"; // Error: Type '"Spear"' is not assignable to type '"Rapier" | "Longsword"'

//~~~Variables End


//~~~Type Aliases Start

// Creating a type alias for a string or number
type StringOrNumber = string | number;

// Creating a type alias for an object with specific properties
type Character = {
    name: string;
    age?: number; // Age is optional
};

// Creating a type alias for a function signature
type MathFunction = (x: number, y: number) => number;

// Using type aliases
const printID: StringOrNumber = "ABC123";
const player: Character = { name: "Mario" };
const add: MathFunction = (a, b) => a + b;

// Use in a function
const TypeAliasFunction = (var1: StringOrNumber) => {
    console.log(var1);
}

TypeAliasFunction("HELLO");

console.log("Print ID:", printID);
console.log("Player:", player);
console.log("Addition:", add(5, 3));

//~~~Type Aliases End



//~~~Arrays Start Once an array, always an array

// String Array. Only string values are allowed to be pushed
let arrayName = ['luigi', 'mario', 'yoshi'];
let arrayNameString: string[] = ['luigi', 'mario', 'yoshi']; // Same result but with declared data type
arrayName.push('ryu'); // Allowed because 'ryu' is a string
arrayName[3] = 'Ken'; // Update the value of the element at the index
// arrayName.push(25); // Not allowed because 25 is a number

// Number Array. Only number values are allowed to be pushed
let numberArray = [5, 6, 7];
let numberArrayNumber: number[] = [5, 6, 7]; // Same result but with declared data type
numberArray.push(8); // Allowed because 8 is a number
// numberArray.push('Samus'); // Not allowed because 'Samus' is a string

// Mixed Array. Only data types of the values inside the initialized array are allowed.
let mixedArray: (string | number | boolean)[] = ['Link', 12, true]; // Array with explicitly declared types
mixedArray.push('Orc'); // Allowed because it is a string, number, or boolean
mixedArray.push(25); // Allowed because it is a string, number, or boolean
mixedArray.push(false); // Allowed because it is a string, number, or boolean

// 2D String Array. Only string arrays are allowed.
let mixed2dStringArray: string[][] = [["Link", "Zelda"], ['Mario', 'Luigi']];

// Array with 'any' type. Allows any type of value.
let anyArray: any[] = ['Hello', 42, true];
anyArray.push({ key: 'value' }); // Allowed because 'any' type allows any value
anyArray.push(undefined); // Allowed because 'any' type allows any value
anyArray.push(null); // Allowed because 'any' type allows any value

//~~~Arrays End



//~~~Functions Start

let functionDefined: Function; // Define a variable will be a function.

// Arrow Function
const ArrowFunction = () => {
    console.log("This is an arrow function");
}

ArrowFunction();

const TestingArrowFunction = (diameter: any) => {
    return diameter * Math.PI;
}

// Arrow Function with data type
const TestingArrowFunctionWithDataType = (diameter: number): number => {
    return diameter * Math.PI;
}

let variableArrowReturnWithDataType = TestingArrowFunctionWithDataType(15); // variableArrowReturnWithDataType will now only allow number type values because the function returns number.
variableArrowReturnWithDataType = 15; // Allowed because the value is a number.
// variableArrowReturnWithDataType = 'Luigi' // Not llowed because the value is string.

// Arrow Function with optional parameter and default value
const TestingArrowFunctionWithOptionalParameter = (name?: string, greeting: string = "Hello"): string => {
    return greeting + " " + (name ? name : "World");
}

// Arrow Function with rest parameters
const TestingArrowFunctionWithRestParameters = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Arrow Function with mixed parameters
const TestingArrowFunctionWithMixedParameters = (var1: string | number) => {
    console.log(var1);
}

TestingArrowFunctionWithMixedParameters(23);

console.log("Test Function");
console.log("Arrow Function:", TestingArrowFunction(13));
console.log("Arrow Function with data type:", TestingArrowFunctionWithDataType(13));
console.log("Arrow Function with optional parameter:", TestingArrowFunctionWithOptionalParameter());
console.log("Arrow Function with rest parameters:", TestingArrowFunctionWithRestParameters(1, 2, 3, 4, 5));

// Call Arrow Function with optional parameter and provide value only for 'name'
console.log("Call Arrow Function with optional parameter and provide value only for 'name':", TestingArrowFunctionWithOptionalParameter("Alice"));

// Arrow Function with parameters of type 'any'
const TestingArrowFunctionWithSingleAnyParameter = (arg: any): any => { // 'any' type allows any type of value for arg
    // Perform some operation with the argument
    return arg;
}

console.log("Arrow Function with single parameter of type 'any':", TestingArrowFunctionWithSingleAnyParameter(13));

// Arrow Function with parameters of type 'any'
const TestingArrowFunctionWithAnyParameters = (...args: any[]): any => { // 'any' type allows any type of value for args
    // Perform some operation with arguments
    return args;
}

console.log("Arrow Function with parameters of type 'any':", TestingArrowFunctionWithAnyParameters(13, "Hello", true, [1, 2, 3]));

// Arrow Function returning void
const TestingArrowFunctionReturningVoid = (): void => { // Returns void. Whole purpose is that it should not return anything and just do something.
    console.log("This function returns void.");
}

TestingArrowFunctionReturningVoid();



// Traditional Function
function TraditionalFunction() {
    console.log("This is a traditional function");
}

TraditionalFunction();

function TestingTraditionalFunction(name: any) {
    return "Hello " + name;
}

// Traditional Function with data type
function TestingTraditionalFunctionWithDataType(name: string): string { // Will return string
    return "Hello " + name;
}

let variableTraditionalReturnWithDataType = TestingTraditionalFunctionWithDataType("Mario"); // variableTraditionalReturnWithDataType will now only allow string type values because the function returns string.
variableTraditionalReturnWithDataType = 'Luigi' // Allowed because the value is string.
// variableTraditionalReturnWithDataType = 15; // Not allowed because the value is a number.

// Traditional Function with optional parameter and default value
function TestingTraditionalFunctionWithOptionalParameter(name?: string, greeting: string = "Hello"): string { // Will return string
    return greeting + " " + (name ? name : "World");
}


// Traditional Function with rest parameters
function TestingTraditionalFunctionWithRestParameters(...numbers: number[]): number { // Will return number
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Traditional Function with mixed parameters
function TestingTraditionalFunctionWithMixedParameters(var1: string | number) {
    console.log(var1);
}

TestingTraditionalFunctionWithMixedParameters(23);

console.log("Test Function");
console.log("Traditional Function:", TestingTraditionalFunction("Ron"));
console.log("Traditional Function with data type:", TestingTraditionalFunctionWithDataType("Ron"));
console.log("Traditional Function with optional parameter:", TestingTraditionalFunctionWithOptionalParameter());
console.log("Traditional Function with rest parameters:", TestingTraditionalFunctionWithRestParameters(1, 2, 3, 4, 5));

// Call Traditional Function with optional parameter and provide value only for 'name'
console.log("Call Traditional Function with optional parameter and provide value only for 'name':", TestingTraditionalFunctionWithOptionalParameter("Alice"));

// Traditional Function with parameters of type 'any'
function TestingTraditionalFunctionWithSingleAnyParameter(arg: any): any { // 'any' type allows any type of value for arg
    // Perform some operation with the argument
    return arg;
}

console.log("Traditional Function with single parameter of type 'any':", TestingTraditionalFunctionWithSingleAnyParameter("Hello"));

// Traditional Function with parameters of type 'any'
function TestingTraditionalFunctionWithAnyParameters(...args: any[]): any { // 'any' type allows any type of value for args
    // Perform some operation with arguments
    return args;
}

console.log("Traditional Function with parameters of type 'any':", TestingTraditionalFunctionWithAnyParameters(13, "Hello", true, [1, 2, 3]));

// Traditional Function returning void
function TestingTraditionalFunctionReturningVoid(): void { // Returns void. Whole purpose is that it should not return anything and just do something.
    console.log("This function returns void.");
}

TestingTraditionalFunctionReturningVoid();

//~~Functions End



//~~~ Objects Start Key and Value

let playerCharacter = {
    name: 'Ryu',     // playerCharacter.name is now declared as string
    age: 69,         // playerCharacter.age is now declared as number
    isMale: true,    // playerCharacter.isMale is now declared as boolean
}

let npc: { // Declare the properties and data type without any values. Make sure to use : and not = to declare the properties and its data type
    name: string,
    age: number,
    isMale: boolean,
    type: any, // Can be any data type;
}

npc = {
    name: "Peach",
    age: 25,
    isMale: false,
    type: {isVillain: false, fightingStyle: "Support"},
}

interface villainProperties { // Does the same as npc variable but can be reused. interface can shape the properties and data types of an object.
    name: string,
    age: number,
    isMale: boolean,
}

let villain: villainProperties = { // Uses the villainProperties. Now villain should have name as string, age as number, and isMale as boolean
    name: 'Mojojojo',
    age: 25,
    isMale: true,
}

let playerType: object //To declare as object
let playerType2: object = { //To declare as object
    something: 'Something',
}


playerCharacter.name = 'Ken';  // Allowed because playerCharacter.name is declared as string
// playerCharacter.name = 25; // Not allowed because playerCharacter.name is declared as string and not a number

// playerCharacter.weapon = 'Fist'; // Not Allowed because weapon property is not defined in playerCharacter

playerCharacter = {
    name: "Yoshi",
    age: 100,
    isMale: true,
    // skills: [], // Not allowed because 'skills' was not in playerCharacter when initialized
}

// When reassigning an object, it must match the structure of the original object (unless explicitly typed otherwise),
// and you can't add new properties to the object after it's defined.

//~~~ Objects End


//~~~ Interfaces Start

// Optional Properties
interface Person {
    name: string;
    age?: number; // age is now optional
}

// Using Person interface to create a hero object
let hero: Person = { name: 'Mario' }; // age can also be declared and at the same time can also not be declared

// Readonly Properties
interface Point {
    readonly x: number;
    readonly y: number;
}

// Using Point interface with readonly properties
let point: Point = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x' because it is a read-only property

// Indexable Types. Key = Index.
interface StringArray {
    [index: number]: string;
}

// Using StringArray interface for an array with indexable types
let myArray: StringArray = ["apple", "banana"];
let fruit: string = myArray[0];

// Extending Interfaces
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// Extending Animal interface to create a Dog object
let dog: Dog = { name: 'Rex', breed: 'Labrador' };


// Type Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

//~~~ Interfaces End






var character : string = "Luigi"; //Cannot change datatype

console.log(character);

enum test {
    Test1,
    Test2,
    Test3
}

interface person {
    name: string,
    age: number
}

var guy: person = {
    name: "Guy",
    age: 25
}

let testChoice: test = test.Test1;

const input = document.querySelector('#tofrom');

console.log(input);


const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

