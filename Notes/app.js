console.log("Hello, World!");
console.log(console)
console.warn("This is a warning message.");
console.error("This is an error message.");
console.info("This is an informational message.");
console.count("Counter");
console.table({name: "John", age: 30, city: "New York"});
console.assert(2 + 2 === 4, "Math is broken!");

//1. Variables
let myAge = 21
const myName = "Surbhi"
console.log("My age is: " + myAge);
console.log("My name is: " + myName);
console.log("type of myAge: " + typeof myAge);

//2. data types
myAge = "hello"
console.log("type of myAge: " + typeof myAge);
// there are 7 data types in JavaScript
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. Object


//3. type conversion

let num1 = 10
let num2 = 20
console.log("num1 + num2: " + (num1 + num2)); 

alert("Hello, World!");

let Myname = prompt("What is your name?");
console.log("My name is: " + Myname);

let res = confirm("Are you want to delete?");
console.log(res);

// 4. Operators
//A. Arithmetic operators: +, -, *, /, %, ++, --
let a = 10
let b = 5  
console.log("a + b: " + (a + b));
console.log("a - b: " + (a - b));
//B. Assignment operators: =, +=, -=, *=, /=, %=
let c = 10
c += 5 // c = c + 5
console.log("c: " + c);
// C. Comparison operators: ==, ===, !=, !==, >, <, >=, <=
let x = 10
let y = "10"
console.log("x == y: " + (x == y));
//D. Logical operators: &&, ||, !
let isAdult = prompt("Are you an adult? (yes/no)") === "yes"
let Age = prompt("What is your age?")
console.log("Can enter club: " + (isAdult && Age >= 18));
//E. Bitwise operators: &, |, ^, ~, <<, >>, >>>
let numA = 5 // 0101 in binary
let numB = 3 // 0011 in binary
console.log("num A:" , numA, "num B:" , numB, "numA & numB: " , (numA & numB)); // 0001 in binary, which is 1 in decimal
//F. Ternary operator: condition ? expr1 : expr2
let age = prompt("What is your age?")
let canVote = age >= 18 ? "Yes" : "No"
console.log("Can vote: " + canVote);

// conditional statements
let age1 = prompt("What is your age?")
if (age1 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

let score = prompt("Enter your score:")
switch(score) 
{
    case '90':
        console.log("Grade A");
        break;  
    case '80':
        console.log("Grade B");
        break;  
    case '70':
        console.log("Grade C");
        break;     
    default:
        console.log("Grade F");
}

let table = 5
for (let i = 1; i <= 10; i++) 
    {
        console.log(table + " x " + i + " = " + (table * i));
    }

// DOM
let h1 = document.getElementById('h1')
let Ages = prompt("What is your age?")
if (Ages>18) 
    {
        h1.innerHTML = "Welcome to DOM"
        h1.style.color = "green"
        h1.style.fontSize = "50px"
        h1.style.textAlign = "center"
        h1.style.backgroundColor = "yellow"
        h1.style.rotate = "45deg"
    }
console.log(h1);