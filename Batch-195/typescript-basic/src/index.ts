// let x = 3;
// //x = 'abc';
// x = 5;
// const y: number = 5;
// //console.log(x);//
// let z:unknown = 1;
// z  ='abc';
// z = true;
// z = undefined;

// const sum = (a: number, b: number, c: number = 0) => {
//   //console.log(a + b);
//   return `Total: ${a + b + c}`;
// };
// console.log(sum(2, 4,4));

let arr1: (number | string)[] = ["1", "2", 3]; //tuple
let arr2: number[] = [1, 2, 3]; //array
arr2.push(4);
let arr3: string[] = ["1", "2", "3"];
arr3.push("4");

let ourTuple: [number, boolean, string];
ourTuple = [1, true, "hai"];

interface IUser {
  id: number;
  name: string;
  email: string;
}
interface IUser2 extends IUser {
  address: string;
  phone: string;
}

type TUser = {
  id: number;
  name: string;
  email: string;
};

let user: TUser = {
  id: 1,
  name: "van a",
  email: "vana@gmail.com",
};

// type TUser2 ={
//     id: number,
//     name: string;
//     email: string;
//     address: string
// }
let user2: IUser2 = {
  id: 1,
  name: "van a",
  email: "vana@gmail.com",
  address: "123 Main St",
  phone: "1234567890",
};

const sum = ({ a, b, c }: { a: number; b: number; c: number }) => {
  //console.log(a + b);
  return `Total: ${a + b + c}`;
};
console.log(
  sum({
    c: 4,
    b: 4,
    a: 2,
  })
);

