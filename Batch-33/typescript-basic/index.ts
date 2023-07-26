let myName : string  = 'Nhan'

let myAge : number = 35

let myAdmin : boolean = false

//Khi mà bạn cần khai báo một biến mà chưa biết nó là
// chuỗi, hay là số, hay là gì đó ==> any

let myAany: any;

myAany = 12;
myAany = 'Chu';

console.log(myAany);

let y: undefined = undefined;
let z: null = null;

//Mảng rỗng
//Dự đoán giá trị sắp có của mảng
// ['bana', 'lemon', 'orange']
//all phần tử của mảng đều là chuỗi
let myArrs : string[] = [];

myArrs.push('dsdsds')

console.log(myArrs);

//[1,2,3,4,5]
let myArrNumbers: number[] = [];
myArrNumbers.push(1)
//console.log(myArrNumbers);

// Một mảng có cả số, logic, chuỗi ==> Tuple
//Mảng nảy có 3 phần tử
//phẩn tử là số
//phần tử thứ 2 là boolean
//phần tử thứ 3 là string
let ourTuple: [number, boolean, string];

//Gán giá trị cho Tuple
ourTuple = [1, false, 'aptech'];

//Object 
let user : {id: number, name: string, isStudent: boolean, address?: string} = {id: 1, name: 'John', isStudent: true}

interface User {
    id: number,
    name: string,
    isStudent: boolean,
    address?: string //optional properties
}

let users: User = {id: 1, name: 'John', isStudent: true}

//SpacialUser thừa kế lại toàn bộ thuộc tính của User
//email là thuộc tính riêng của SpacialUser
interface SpacialUser extends User {
    email: string
}

let usersNew: SpacialUser = {id: 1, name: 'John', isStudent: true, email: 'john@gmail.com'}


type UserType = {
    id: number,
    name: string,
    isStudent: boolean,
    address?: string //optional properties
}

let userstype: UserType = {id: 1, name: 'John', isStudent: true}

//Hàm không trả về gì cả
function helloName (name : string): void {
    console.log(name);
}

//hàm với tham số là number
function TinhTong(a:number,b:number){
  return a + b
}

//Hàm bắt buộc phải trả về kiễu dữ liệu là number
function TinhTong2(a:number,b:number) : number{
    return a + b
}

//hàm với default parameter
function cal(a:number,b:number, type: string = 'add'){
    if(type== 'add'){
        return a*b
    }else if(type== 'plus'){
        return a+b
    }
}

cal(1,3)

//hàm với tham số tùy chọn
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

add(1,2)