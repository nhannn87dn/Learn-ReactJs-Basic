let myName: string = "John Doe";
let myAge: number = 30;
let isStudent: boolean = true;

let abc: number | string = "hello";

abc = 40;

console.log(`abc: ${abc}`);

let def: any = "hello";

def = true;

def = 40;
//...

console.log(`def: ${def}`);

//mảng
let numbers: number[] = [1, 2, 3, 4, 5];

//numbers.push("six");
numbers.push(6);

console.log(numbers);

let fruists: string[] = ["apple", "banana", "orange"];

//fruists.push(123);
fruists.push("grape");
console.log(fruists);

let arrs: (string | number | boolean)[] = [1, "two", true];

let person: {
  name: string;
  age: number;
  isStudent?: boolean; // tuỳ chọn
} = {
  name: "Alice",
  age: 25,
  isStudent: false,
};

type Student = {
  id: number;
  name: string;
  age: number;
  isStudent?: boolean;
};

const studentA: Student = {
  id: 123,
  name: "Bob",
  age: 22,
  //isStudent: true,
};

const studentB: Student = {
  id: 123,
  name: "Bob",
  age: 22,
  isStudent: true,
};

function sum(a: number, b: number): number {
  return a + b;
}

sum(5, 10);
sum(true, false);
