let x = 3;
x = "abc";
//console.log(x);
const y = 5;
// y = "abc";
// console.log(y);

//Ham - function
// function sum(a,b){
//  console.log(a + b)
// }
//arrow function
// const sum = (a, b) => {
//   console.log(a + b);
// };
// sum("2", "4");

let arr1 = [1, "2", 3]; //array
let arr2 = [1, 2, 3]; //array
arr2.push("4");
console.log(arr2);
let user = {
  id: 1,
  name: "van a",
  email: "vana@gmail.com",
  password: "abc123",
};
user.address = "123 Main St";
user = { ...user, gender: "male" }; //add new property
user = { ...user, password: "abc123456" }; //update property
console.log(user);

const fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);
const [, , c] = fruits;
const [a, ...fruits2] = fruits;
console.log(fruits2);
//console.log(c);

const level = "VIP";
let discount = level == "VIP" ? 10 : 5;
// if (level == "VIP") {
//   discount = 10;
// } else {
//   discount = 5;
// }
console.log(discount);

const myName = "Nhan";
const myAge = 38;
//Xin chao, toi la Nhan, toi 38 tuoi
//console.log("Xin chao, toi la " + myName + "toi " + myAge + " tuoi");
console.log(`Xin chao, toi la ${myName} toi ${myAge} tuoi`);
