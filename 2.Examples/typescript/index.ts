/**
 * Doc:
 * 1. https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
 * 2. https://www.w3schools.com/typescript/
 * 
 * **************************************
 * Run .ts
 * Step 1: npm init
 * Step 2: npx tsc --init
 * Step 3: npm install typescript --save-dev
 * 
 * tsc index.ts --> biên dịch index.ts sang index.js
 * node index.js --> chạy file index.js trong môi trường node
 */

// Tại sao có Javascript rồi lại cần đến TypeScript làm gì ?

let firstName: string = "Dylan"; // type string

let isAdmin: boolean = false;

let age: number = 2;

// any là chấp nhận bất kỳ kiểu dữ liệu
let v: any = true;


//Mảng các phần tử chỉ là chuổi ['Minh','Tuan','Thao'];

let users: string[];

//Mảng các phần từ chỉ là số [1,2,3];

let users2: number[];

// Kiểu mảng hổn hợp
let ourTuple: [number, boolean, string];

ourTuple = [5, false, 'Coding God was here'];

// Tách kiểu dữ liệu ra độc lập
type CarType = {
    type: string;
    model: string;
    year?: number;
}

interface CarsType {
    type: string,
    model: string,
    year?: number,
}

// Kế thừa các thuộc tính của CarsType
interface BycycleType extends CarsType {
    color: string
  }


const car: CarType = {
        type: "Toyota",
        model: "Corolla",
        year: 2009
    };

    
// const car: { type: string, model: string, year?: number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
// };

// Chỉ chấp nhận 1 trong các giá trị bên đã khai báo dưới đây
enum  RoleTypes  {
    Admin = 'Admin',
    Member = 'Member',
    User = 'User'
}
// Hàm không trả về gì cả
let myRole = (role: RoleTypes ): void =>{
    console.log(role)
}

myRole(RoleTypes.User);

// 1 trong 2 kiểu dữ liệu hay còn gọi là OR

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');


// Hàm có trả về kiểu dữ liệu là number
let calTotal = (a: number, b: number): number => {
    return a + b;
}


// Hàm có trả về kiểu dữ liệu là number với Default Parameters
let calTotal2 = (a: number, b: number = 10): number => {
    return a + b;
}

calTotal2(2);

//Hàm sử dụng đối số là một Objects
type myDivideType = {
    a:number,
    b:number
};

let myDivide = ({a,b} : myDivideType):number =>{
    return a / b;
}

//Casting with as, ép chuổi (ép kiểu dữ liệu)

let myAge: unknown = 18;

console.log((myAge as string).length);
console.log((<string>myAge).length); // sử dấu <> để ép kiểu dữ liệu


/**
 * Có thể trả về là
 * [1,2]
 * ['Toyota', 2]
 * mảng với kiểu dữ liệu khác nhau
 */

let myArr = <T,S>(x:T,y:S): [T,S] => {
    return [x,y];
}

console.log(myArr(true,null));