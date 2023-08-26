//cú pháp khai báo biến trong TS
//let [tên biến]: [kiểu dữ liệu của biến]  = giá trị của biến
let age: number = 15; //number

let myName: string = 'John'; //string

const isStudent: boolean = false; //boolean

//Tức là biến myAny chưa xác định được kiểu dữ liệu
let myAny: any;

myAny = 'string';
myAny = 12;
myAny = true;
//với any  bạn có thể thay đổi kiểu giữ liệu cho giá trị của biến

let myArr: string[] = ['banana', 'orange'];
/*
Khi khái báo như trên thì
Hiểu là mảng trên chỉ chấp nhận, giá trị
của các phần tử bên trong nó là STRING thôi
*/
//myArr[2] = 1;//sai
myArr[2] = 'lemon';

let myArrNum: number[] = [1,2,3,4];
//myArrNum[5] = 'John'; sai
myArrNum[5] = 5; //đúng


//Kiểu mảng hổn hợp trong JS
//THÌ trong TS nó có tên gọi là Tuple

let myArrComplex: [string, string, number, number, boolean, boolean]

myArrComplex = ['banana', 'orange', 1, 3,true, false]

//Object
type CarType = {
    type: string,
    model: string,
    year: number
}

// let car : {type: string, model: string, year: number} = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
// };

let car : CarType = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

//interface 

interface CarTypeBase {
    type: string;
    model: string;
    year: number;
}

interface CarContainer extends CarTypeBase {
    weight: string; //10 tấn
    cod: boolean;
}

let CarContainer : CarContainer = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
    weight: '10T', //10 tấn
    cod: true
};

//Function
//void là kiểu dữ liệu cho một hàm không return
//string: kiểu dữ liệu của biến name
function helloName(name:string): void
{
    console.log('<<=== 🚀 Hello ===>>',name);
}

const helloNameV3 = (name: string) => console.log('<<=== 🚀 Hello ===>>',name);

helloName('hello');

function helloNameV2(name: string = 'Aptech'): void
{
    console.log('<<=== 🚀 Hello ===>>',name);
}
helloNameV2()

/**
 * Để chắc chắn bạn muốn nhận lại một kết quả là số cho phép
 * tính tổng thì bạn cần khai báo thêm kiểu dữ liệu trả về cho return
 */
// const calSum = (a:number,b:number) : string => {
//     return `${a} + ${b}`
// }

const calSum = (a:number,b:number) : number => {
    return a + b
}
//short hand khi chỉ return có 1 dòng code
const calSumV2 = (a:number,b:number) : number =>  a + b;


calSum(1,2);

const getProfile = (name: string, age:number, gender: string)=> {
    let msg = `Name: ${name} - Age: ${age} - Gender: ${gender}`
}

const myProfile = {name: 'Jonh', age: 18, myGender: 'male'};

type Profile = {name: string, age:number, myGender: string}

const getProfileV2 = ( myProfile: Profile)=> {
    let msg = `Name: ${name} - Age: ${age} - Gender: ${myGender}`;
    console.log(msg);
}
getProfileV2(myProfile);
