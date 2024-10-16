// let my_name: string = "123";
// let age: number = 36;
// let isTeacher: boolean = true;

// let arr: number[] = [1, 2, 3, 4, 5];

// //arr = [1, '2']

// let arr2: string[] = ["orange", "apple", "melon"];
// //arr2 = [1, 2]

// //tuple
// let arr3: (number | string | boolean)[] = [1, "orange", true];

// type TProfile = {
//   name: string;
//   age: number;
//   isTeacher: boolean;
// };

// interface IProfile {
//   name: string;
//   age: number;
//   isTeacher: boolean;
// }

// let profile: IProfile = {
//   name: "Nhan",
//   age: 36,
//   isTeacher: true,
// };

// interface IPerson {
//   first_name: string;
//   last_name: string;
//   email: string;
// }

// interface IEmployee extends IPerson {
//   salary: number;
// }

// let employee: IEmployee = {
//   first_name: "John",
//   last_name: "David",
//   email: "john@gmail.com",
//   salary: 3500,
// };
// interface IStudent extends IPerson {
//   studentCode: string;
// }
// // type TStudent = {
// //     first_name: string;
// //     last_name: string;
// //     email: string;
// //     studentCode: string
// //   };

// let student: IStudent = {
//   first_name: "John",
//   last_name: "David",
//   email: "john@gmail.com",
//   studentCode: "12345",
// };

function sum(a: number, b: number): number {
  console.log(a + b);
  return a + b;
}
sum(2, 3);
