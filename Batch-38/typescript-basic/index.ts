let age: number = 35;

/*
Một mảng chỉ chứa
các phần tử là số
*/
let arr: number[] = [1, 2, 3];

arr[3] = 9;

console.log(arr);

const isAdmin: boolean = true;

let ourTuple: [number, boolean, string];

ourTuple = [1, true, "hello"];

let fruits: string[] = ["cam", "xoai", "oi"];

fruits[3] = "Nho";
//fruits[4] = 9;

// let user: {
//   name: string;
//   age: number;
//   isMale: boolean;
// } = {
//   name: "Nhan",
//   age: 35,
//   isMale: true,
// };

type TUser = {
  name: string;
  age: number;
  isMale: boolean;
};

interface IUser {
  name: string;
  age: number;
  isMale: boolean;
}

interface IUser2 extends IUser {
  phone: string;
}

// let user: TUser = {
//   name: "Nhan",
//   age: 35,
//   isMale: true,
// };

let user: IUser = {
  name: "Nhan",
  age: 35,
  isMale: true,
};

let user2: IUser2 = {
  name: "Nhan",
  age: 35,
  isMale: true,
  phone: "0988777666",
};

//console.log(user);

const sumCal = (a: number, b: number): number => {
  return a + b;
  //return `${a} + ${b}`;
};

console.log(sumCal(2, 5));

const sayHello = (name: string): void => {
  console.log(name);
};

sayHello("Nhan");
