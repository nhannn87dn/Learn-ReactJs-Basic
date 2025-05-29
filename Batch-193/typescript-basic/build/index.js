"use strict";
let myName = "Nhan"; //string, chuoi
myName = 123;
console.log(myName);
const myAge = 38; //number
let myMoney = 12.223; //float
let isTeacher = true; //boolean;
let fruits = ["orange", "apple", "lemon"]; //array
fruits[3] = 1;
fruits[4] = true;
let profile = {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
}; // Object
//arrow function
const sayHello = (name) => {
    console.log("hello ", name);
};
sayHello("Tuan");
sayHello("Linh");
sayHello(123);
sayHello(true);
