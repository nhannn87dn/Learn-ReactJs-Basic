// var age = 35;
// age = "bala";

let arr = [1, 2, 3, "bala"];

///arr[4] = "Coc";

arr = [...arr, "Coc"];

console.log(arr);

//console.log(arr[3]);
//Cách khác với ES6
// const [, , , str] = arr;

// const [con1, ...conlai] = arr;

// console.log("con1:", con1, "conlai:", conlai);

// console.log(str);

// let user = {
//   name: "Nhan",
//   age: 35,
//   isMale: true,
// };

// user.isMale = "Nam";

// //console.log(user);

// // Arrow function ES6
// const sumCal = (a, b) => {
//   return a + b;
// };

// console.log(sumCal("2", "5"));

// const sayHello = (name) => {
//   console.log(name);
// };

//sayHello();

let user = {
  name: "Nhan",
  age: 35,
  isMale: true,
};

//user.phone = '0988777666';

user = { ...user, phone: "0988777666" };
console.log(user);
