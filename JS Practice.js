//JavaScript

/*

JavaScript is considered an interpreted language, but in practice, 
modern JavaScript engines like Google's V8 (used in Chrome and Node.js) 
perform just-in-time (JIT) compilation to enhance performance.

*/

//Print Statement
console.log(`Hello World`);

//String variable
let name = 'Sarthak';
console.log(name);
console.log(typeof name);

//Number variable
let age = 30;
console.log(typeof age);

//Boolean literal
let approve = false;
console.log(typeof approve);
//O/P: boolean

//Null, to explicitly clear variables
let selectColor = null;
console.log(typeof selectColor);
//O/P: object

let firstName = undefined;
console.log(typeof selectColor);
//O/P: object



// JS Comparison Operater ===
let x = 3
let y = 3

let data = x ===y

console.log(data);

/*

In JavaScript, the === operator (strict equality) is preferred over the == operator (loose equality) 
because === ensures type and value equality, while == performs type coercion before comparing the values.

*/




// JS is dynamic type that is variable type can be changed at runtime

//Primitive/Value types: String, Number, Boolean, undefined, null
//Reference Types: Object, Array, Function

// Object Literal aka dictionary
let person = {

	pname: 'Sar',
	year: 30


};


console.log(person);
// O/P:{ pname: 'Sar', year: 30 }

// Dot notation; overwriting value
person.pname = 'Sarthak';

console.log(person.pname);
//O/P: Sarthak


//When target property is to be decided at runtime

let person1 = {

	pname1: 'Hal',
	year1: 30


};


let target_property = 'pname1';
person1[target_property] = 'Haldar';

console.log(person1.pname1);
//O/P: Haldar


//Changing number to string
let num = String(6)
console.log(typeof num);

//Changing string to number
let num = Number("123")
console.log(typeof num);


// Increment
let num = 4
num++
console.log(num)
//O/P: 5

// Decrement
let num = 4
num++
console.log(num)
//O/P: 3


//Power feature in ES6
let num = 4
let result = 4 ** 2
console.log(result)

// Conditional statements
let num1 = 6;
let num2 = 4;

if (num1 > num2)
	console.log("num1 is greater");
else
	console.log("num2 is greater");


// if multiple lines has to be executed for either of if or else block
let num1 = 6;
let num2 = 4;

if (num1 > num2)
	console.log("num1 is greater");
else{
	console.log("num2 is greater");
	console.log("yeet");
	}

// multiple conditions

let num1 = 6;
let num2 = 4;
let num2 = 7;

if (num1 > num2 && num1 > num3)
	console.log("num1 is greatest");
else if (num2 > num1 && num2 > num3)
	console.log("num2 is greatest");
else
	console.log("num3 is greatest");

	


//even or odd
let num = 8;
let result;

if (num % 2 === 0)
	result = "Even";
else
	result = "Odd";

console.log(result);


//Ternary operator
let num = 8;
let result;

// ?:
result = num%2 ===0 ? "Even" : "Odd"

console.log(result);

// switch statement

//waking time
//Mon - 7am
//Tue - Thurs - 4am
//Fri - 9am
//Sat - Sun - 8am

let day = "Monday"

switch(day) {
	case 'Monday':
		console.log("7am");
		break;
	case 'Tuesday':
		console.log("4am");
		break;
	case 'Wednesday':
		console.log("4am");
		break;
	case 'Thursday':
		console.log("4am");
		break;
	case 'Friday':
		console.log("9am");
		break;
	case 'Saturday':
		console.log("8am");
		break;
	case 'Sunday':
		console.log("8am");
		break;
	default:
		console.log("7am");
		
}


//Concatenation in template
let num1 = 9
let num2 = 4
let result = num1 + num2

console.log ("The addition of " + num1 + "and" + num2 + " is " + result);



//Template Literal
let num1 = 9
let num2 = 4
let result = num1 + num2

console.log (`The addition of ${num1} and ${num2} is  ${result}`);

//print in new line
console.log (`My name is
Sarthak Haldar`);

//Conditional statement - While loop: printing a statement 5 times with post increment
let i = 1;

while(i<=5)
{
	console.log("Hi");
	i++;
}

//in do while we check for condition later


//for loop
for (let i=1; i<=5; i++)
{
	console.log("Hi", i);	
}
//O/P
// Hi 1
// Hi 2
// Hi 3
// Hi 4
// Hi 5




//Array
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);
//O/P:red


//Array adding element dynamically
let arrayColors = ['red', 'blue'];
arrayColors[2] = 'green';
console.log(arrayColors);
//O/P: [ 'red', 'blue', 'green' ]


// Array in JS can store different data type in same array
// Objects and size of array are both dynamic
// Array is an object in JS

let mixColors = ['red', 'blue'];
mixColors[2] = 3;
console.log(mixColors);
//O/P:[ 'red', 'blue', 3 ]
console.log(mixColors.length)
//O/P: 3
//.length outputs length of array





//Objects

// let computer = {}
// console.log(typeof computer);

//Object literal - we literally mention all properties of an object

let computer = {
	brand: 'Lenovo',
	OS: 'Windows'
}
console.log(computer.brand);


// Complex Object

let computer = {
	brand: 'Lenovo',
	OS: 'Windows',
	keyboard: {
		type: 'tkl',
		backlit: 'argb'
	}
}

console.log(computer.keyboard.backlit);

// Suppose we do not know if keyboard property is present or not

let computer = {
	brand: 'Lenovo',
	OS: 'Windows',
	keyboard: {
		type: 'tkl',
		backlit: 'argb'
	}
}

console.log(computer.keyboard?.backlit?);

// Say we want to delete keyboard property

let computer = {
	brand: 'Lenovo',
	OS: 'Windows',
	keyboard: {
		type: 'tkl',
		backlit: 'argb'
	}
}

delete computer.keyboard;
console.log(computer);


// for in loop

let computer = {
	brand: 'Lenovo',
	OS: 'Windows',
	keyboard: {
		type: 'tkl',
		backlit: 'argb'
	}
}

for (let key in computer)
{
	console.log(key);
}
//O/P
brand
OS
keyboard




// fetching key and its value

let computer = {
	brand: 'Lenovo',
	OS: 'Windows',
	keyboard: {
		type: 'tkl',
		backlit: 'argb'
	}
}

for (let key in computer)
{
	console.log(key, computer[key]);
}
//O/P
brand Lenovo
OS Windows
keyboard { type: 'tkl', backlit: 'argb' }



//function

function greet()
	{
		console.log('Hello World');
	}
greet();


//function performs a task or calculates a value

//function with parameter

function greet(name)
	{
		console.log('Hello ' + name); 
	}
greet('Sar'); //passing parameter value
greet('Genos');

//
function greet(name)
	{
		return `Hello ${name}`; 
	}
	
let name = 'Sar';
let str = greet(name);
console.log(str);





//function multiple parameters

function greet(fname, lname)
	{
		console.log('Hello ' + fname + ' ' + lname);
	}
greet('Sarthak', 'Haldar'); //passing parameter value


// Arrow function
let greet = (user) => {
	console.log("Hello" + user);
	return 1;
}

console.log(greet('Sar'));



// Return from function and Calculating square
function square(number)
	{
		return number * number;
	}
let number = square(2);
console.log(number);

//OR
function square(number)
	{
		return number * number;
	}
console.log(square(2));

// Function Parameters

let add = function(num1, num2)
	{
		return num1 + num2;
	}

let result = add(5,6)

console.log(result);


// With arrow function

let add = (num1, num2) => 
	
		num1 + num2;
	
// if there is one statement, {} is not required, even return
let result = add(5,6)

console.log(result);


// Passing default value in parameter when no value is passed while calling

let add = function(num1, num2=6)
	{
		return num1 + num2;
	}

let result = add(5)

console.log(result);
//O/P
11


/* 
4 pillars of Object oriented programming
1) Inheritance
2) Abstraction
3) Inheritance
4) Polymorphism

Example:
Car can have properties like make, model, color
and methods like start(), stop() and move()
*/

// Procedural way
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage (baseSalary, overtime, rate) //Procedural has 3 parameters
	{
		return baseSalary + (overtime * rate);
	}

console.log(getWage(baseSalary, overtime, rate));

// In OOPs way, we will model the parameters as properties of the object
// OOPs way should have fewer parameters

let employee = {
baseSalary: 30000,
overtime: 10,
rate: 20,

getWage: function() {
	return this.baseSalary + (this.overtime * this.rate);
}
};
console.log(employee.getWage()); //Object name employee has to be called with method name


// this keyword refers to current object

// "The best functions are those with no parameters"

// Inheritance removes redundant code
//Example:
//HTML Element Object having properties hidden, innerHTML and methods click(), focus()
//Multiple buttons can use the Element

// Objects having multiple methods is also called behaviour

// JS don't have class concept

//Polymorphism or Many Form

//constructor function
//factory function



/*
there is an object laptop1 with properties CPU = 'i9', Ram = 1000, brand = 'acer' and 
another object with properties CPU = 'ryzen7', Ram = 2000, brand = 'hp'. 
The property names are same but values are different. 
write a function which prints the brand name which has greater ram.
*/

const laptop1 = {
  CPU: 'i9',
  Ram: 1000,
  brand: 'acer'
};

const laptop2 = {
  CPU: 'ryzen7',
  Ram: 2000,
  brand: 'hp'
};

function printLaptopWithGreaterRam(laptop1, laptop2) {
  if (laptop1.Ram > laptop2.Ram) {
    console.log(laptop1.brand);
  } else if (laptop1.Ram < laptop2.Ram) {
    console.log(laptop2.brand);
  } else {
    console.log("Both laptops have the same amount of RAM.");
  }
}

// Call the function
printLaptopWithGreaterRam(laptop1, laptop2);








/*

A constructor function in JavaScript is a special type of function used to create and initialize objects. 
It's part of the foundation of object-oriented programming in JavaScript.


Why Use Constructor Functions?

Reusable Code: Instead of writing individual objects manually, you can use a constructor function to quickly create similar objects.
Dynamic Objects: Constructor functions allow you to initialize objects with different values dynamically.

*/


function Laptop(brand, cpu, ram) {
  this.brand = brand; // Assign brand to the object
  this.cpu = cpu;     // Assign cpu to the object
  this.ram = ram;     // Assign ram to the object

  // Optional: Method inside the constructor
  this.showSpecs = function() {
    console.log(`Brand: ${this.brand}, CPU: ${this.cpu}, RAM: ${this.ram}GB`);
  };
}

// Create new objects using the constructor
const laptop1 = new Laptop('Acer', 'i9', 16);
const laptop2 = new Laptop('HP', 'Ryzen 7', 32);

// Access properties
console.log(laptop1.brand); // Output: Acer
console.log(laptop2.cpu);   // Output: Ryzen 7

// Call the method
laptop1.showSpecs(); // Output: Brand: Acer, CPU: i9, RAM: 16GB


/*
Adding Methods Using Prototypes:
Adding methods directly inside the constructor can be memory-inefficient because
each instance gets its own copy of the method. Instead, use prototypes for shared methods:

*/

function Laptop(brand, cpu, ram) {
  this.brand = brand;
  this.cpu = cpu;
  this.ram = ram;
}

// Add method to the prototype
Laptop.prototype.showSpecs = function() {
  console.log(`Brand: ${this.brand}, CPU: ${this.cpu}, RAM: ${this.ram}GB`);
};

const laptop1 = new Laptop('Acer', 'i9', 16);
const laptop2 = new Laptop('HP', 'Ryzen 7', 32);

laptop1.showSpecs(); // Output: Brand: Acer, CPU: i9, RAM: 16GB
laptop2.showSpecs(); // Output: Brand: HP, CPU: Ryzen 7, RAM: 32GB




/*
JavaScript ES6 introduced class syntax, which is a cleaner and more modern way to define objects:
*/

class Laptop {
  constructor(brand, cpu, ram) {
    this.brand = brand;
    this.cpu = cpu;
    this.ram = ram;
  }

  showSpecs() {
    console.log(`Brand: ${this.brand}, CPU: ${this.cpu}, RAM: ${this.ram}GB`);
  }
}

const laptop1 = new Laptop('Acer', 'i9', 16);
const laptop2 = new Laptop('HP', 'Ryzen 7', 32);

laptop1.showSpecs(); // Output: Brand: Acer, CPU: i9, RAM: 16GB
laptop2.showSpecs(); // Output: Brand: HP, CPU: Ryzen 7, RAM: 32GB



/*

A factory function in JavaScript is a regular function that creates and returns objects. 
Unlike constructor functions, it doesn’t use the new keyword or the this keyword. 
Factory functions provide flexibility and are often used when we want to create multiple 
objects with similar properties and methods.

*/


/*
What is a Factory Function?
It’s a function that returns an object.
It allows you to encapsulate the creation of objects with predefined properties and methods.
You don’t need to use new, and there’s no reliance on prototypes unless explicitly added.
*/

function createLaptop(brand, cpu, ram) {
  return {
    brand, // Property shorthand
    cpu,
    ram,
    showSpecs() { // Method
      console.log(`Brand: ${this.brand}, CPU: ${this.cpu}, RAM: ${this.ram}GB`);
    }
  };
}

// Use the factory function to create objects
const laptop1 = createLaptop('Acer', 'i9', 16);
const laptop2 = createLaptop('HP', 'Ryzen 7', 32);

laptop1.showSpecs(); // Output: Brand: Acer, CPU: i9, RAM: 16GB
laptop2.showSpecs(); // Output: Brand: HP, CPU: Ryzen 7, RAM: 32GB



/*

Advantages of Factory Functions

> Simpler Syntax:

No need for new or this.
Cleaner and easier to understand for beginners.

> Encapsulation:

You can encapsulate logic inside the factory function, making it more flexible.

> Dynamic Behavior:

You can add conditions or modify properties based on input parameters.

>Avoid Issues with this:

Factory functions don’t rely on the value of this, avoiding common pitfalls.

/*

/*

Adding Private Variables (Using Closures)
Factory functions can use closures to create private variables that are not accessible from outside the function:

*/



function createLaptop(brand, cpu, ram) {
  let serialNumber = Math.random().toString(36).substring(2); // Private variable

  return {
    brand,
    cpu,
    ram,
    getSerialNumber() {
      return serialNumber; // Accessing private variable
    },
    showSpecs() {
      console.log(`Brand: ${this.brand}, CPU: ${this.cpu}, RAM: ${this.ram}GB`);
    }
  };
}

const laptop = createLaptop('Acer', 'i9', 16);
console.log(laptop.getSerialNumber()); // Access private serial number
laptop.showSpecs(); // Output: Brand: Acer, CPU: i9, RAM: 16GB


/*

Using Factory Functions with Prototypes
If you need to optimize memory by sharing methods, you can manually link objects to prototypes:



*/

const laptopMethods = {
  showSpecs() {
    console.log(`Brand: ${this.brand}, CPU: ${this.cpu}, RAM: ${this.ram}GB`);
  }
};

function createLaptop(brand, cpu, ram) {
  const laptop = Object.create(laptopMethods); // Link to prototype
  laptop.brand = brand;
  laptop.cpu = cpu;
  laptop.ram = ram;
  return laptop;
}

const laptop1 = createLaptop('Acer', 'i9', 16);
const laptop2 = createLaptop('HP', 'Ryzen 7', 32);

laptop1.showSpecs(); // Output: Brand: Acer, CPU: i9, RAM: 16GB
laptop2.showSpecs(); // Output: Brand: HP, CPU: Ryzen 7, RAM: 32GB



/*
Factory Functions with ES6 Modules
Factory functions are often used in modern JavaScript development, especially with modules. Here's an example:
*/

// laptopFactory.js
export function createLaptop(brand, cpu, ram) {
  return {
    brand,
    cpu,
    ram,
    showSpecs() {
      console.log(`Brand: ${this.brand}, CPU: ${this.cpu}, RAM: ${this.ram}GB`);
    }
  };
}

// main.js
import { createLaptop } from './laptopFactory.js';

const laptop = createLaptop('Acer', 'i9', 16);
laptop.showSpecs(); // Output: Brand: Acer, CPU: i9, RAM: 16GB


/*

Guidelines for Choosing

Use Constructor Functions if:

>You need prototypal inheritance.
>You're working in a class-based OOP environment.
>Performance optimization is critical for sharing methods.

Use Factory Functions if:

>You need encapsulation or private variables.
>You prefer flexibility and simplicity.
>You want to avoid this-related issues or use a functional programming style.

Both constructor functions and factory functions have their strengths. 
If you are building a system with complex inheritance and many shared methods, 
constructor functions (or ES6 classes) might be the better choice. 
On the other hand, if you prioritize flexibility, encapsulation, or simplicity, 
factory functions are a great fit.

*/


/*
ES6 classes in JavaScript are essentially syntactic sugar over constructor functions. 
They provide a more concise and readable way to write object-oriented code but functionally 
behave like constructor functions under the hood.
*/

// How ES6 Classes Relate to Constructor Functions

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

const person1 = new Person('Alice', 25);
person1.greet(); // Output: Hello, my name is Alice.

// Equivalent ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person2 = new Person('Bob', 30);
person2.greet(); // Output: Hello, my name is Bob.



/*
When to Use ES6 Classes vs Constructor Functions

Use ES6 Classes:

For modern JavaScript projects, as they are more readable and concise.
When you need to define complex inheritance hierarchies.
If you are working with other developers who expect OOP practices.

Use Constructor Functions:

If you need to write legacy JavaScript code that doesn’t support ES6 (e.g., older browsers).
When working in environments where ES6+ features are not guaranteed.

*/




