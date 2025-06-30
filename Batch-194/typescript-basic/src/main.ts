let myName: string = "Nhan";
myName = "abc";

let myAge = 38;

let mySchool: any = "Aptech";
mySchool = 123;
mySchool = true;
mySchool = [];

//Array trong TS
//string[] -> một mảng mà phần tử toàn chuỗi
type TFruist = string[];
let fruits: TFruist = ["orange", "kiwi"];
//fruits[2] = 123;
let numbers: number[] = [1, 2, 3];
//numbers[3] = 'abc';

//let arr: (string | number | boolean)[] = [0, '1', 2, '3']
let arr: unknown[] = [0, "1", 2, "3"];
arr[5] = true;

console.log(arr);

type TProfile = {
  name: string;
  age: number;
  isTeacher: boolean;
};
interface IProfile {
  name: string;
  age: number;
  isTeacher: boolean;
}

let myProfile: IProfile = {
  name: "Nhan",
  age: 38,
  isTeacher: true,
};

interface ICar {
  seat: number;
  color: string;
  brand: string;
  fuel: string;
}

interface ICarVinFast extends ICar {
  feature: string;
}

let carKiaMorning: ICar = {
  seat: 4,
  color: "white",
  brand: "Kia",
  fuel: "gasoline",
};

let carVf1: ICarVinFast = {
  seat: 4,
  color: "white",
  brand: "Kia",
  fuel: "electric",
  feature: "abc",
};

const cal = (a: number, b: number): number => {
  return a + b;
};

cal(2, 4);
cal(6, 7);
