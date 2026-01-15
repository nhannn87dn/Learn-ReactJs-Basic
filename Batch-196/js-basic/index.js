let myName = "Nhan";

myName = 123;
const isTeacher = true;

let arr = [];
arr[0] = "s";
arr[1] = 12;

let arr2 = ["cam", "tao"];
arr2[2] = true;
arr2[3] = 123;

console.log("<<=== 🚀 arr2 ===>>", arr2);

let user = {
  id: 1,
  name: "Nhan",
};
user.name = 123;

console.log("<<=== 🚀 user ===>>", user);

function sum(a, b) {
  console.log(a + b);
}

sum("1", "2");
sum(true, false);

//arrow function
const sumV2 = (a, b) => console.log(a + b);
sumV2(1, 2);
//Destructuring

let profile = {
  id: 1,
  name: "a",
  password: "123",
  age: 12,
};
//profile.name = "b";
//es6 spread
profile = { ...profile, name: "c" }; //update
profile = { ...profile, email: "email" }; //add

const { password, ...safeProfile } = profile;
console.log(profile);
console.log(safeProfile);
//es6
let { age, name } = profile;

console.log("age", age, name);

let fruits = ["cam", "tao", "kiwi"];
console.log(fruits[2]);
//es6
let [, , k] = fruits;
console.log(k);
