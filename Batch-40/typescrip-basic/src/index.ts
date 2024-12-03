import { screen } from '@testing-library/react';
let myTech = "React"; // string
let currentYear = 2024; // number

// Định nghĩa biến với kiểu dữ liệu tường minh
let myName: string = "Nhan";
let myNumber: number = 24;
let isTeacher: boolean = true;

let isNull: null = null;
let isUnd: undefined = undefined;

//đặt tên biến trước, chưa gán trị
let anyType: any; //any chấp nhận bất kỳ kiểu dl nào
anyType = "Nhan";
anyType = 24;
anyType = false;

// Một mảng mà phần tử toàn là số
let arrs: number[] = [1,2,3];
arrs[2] = 4;// ok
///arrs[2] = '4';// error

let arrsv2: string[] = ['1','2','3']
//trong TS nó ko gọi là mảng
// mà có tên khác là tuple
let arrsv3 = [1, '2', true, undefined];

//arrsv3[4] = null; //error

// Một mảng cố định số lượng phần tử cùng kiểu dữ liệu của mỗi phần tử
let arrsv4: [number, string, boolean, undefined] = [1, '2', true, undefined];

arrsv4[4] =1; //error
arrsv4[0] =2; //error
arrsv4[0] ='2'; //error

// type TUser = {
//     id: number,
//     name: string
// }
enum EGender {
    MALE= 'male',
    FEMALE = 'female'
}

interface TUser  {
    id: number,
    name: string,
    role: 'admin' | 'editor' | 'designer',
    gender: EGender
}


let user: TUser = {
    id: 1,
    name: 'jonh',
    role: 'editor', // 'editor', 'designer',
    gender: EGender.MALE, //'female
}

// type TEmployee = {
//     id: number,
//     name: string,
//     salary: number
// }
interface TEmployee extends TUser {
    salary: number; // thuộc tính riêng của employee
}
let employee: TEmployee = {
    id: 1,
    name: 'jonh',
   salary: 8000
}
function sayHello(): void{
    console.log('Hello');
}

function sum(a:number,b:number){
    return `${a} ${b}`;
}
function sumv2(a:number,b:number): number{
    return `${a} ${b}`;
}
sum(2,5);
sum('2','5')