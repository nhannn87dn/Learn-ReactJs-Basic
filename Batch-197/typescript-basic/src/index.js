let myName = "John Doe";
const myAge = 30;
const isStudent = true;

myName = true;

console.log(`Name: ${myName}`);

//mảng
let numbers = [1, 2, 3, 4, 5];

numbers.push("six");

console.log(numbers);

let fruists = ["apple", "banana", "orange"];

fruists.push(123);
console.log(fruists);

let arrs = [1, "two", true];

arrs.push(2);

console.log(arrs);

//object
let person = {
  name: "Alice",
  age: 25,
  password: "secret",
};

const { password, ...safePerson } = person;

console.log(safePerson);

const name = "Alice";
const age = 25;
//Cần in ra 1 câu
//"My name is Alice and I am 25 years old."

console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`);
