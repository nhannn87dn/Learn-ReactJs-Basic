console.log("Hello TypeScript");

let a: number = 3;
let b: number = 4;


let mySchool: string = 'Softech';

let isAdmin: boolean = false;

let myVariable: any;

let myArray: number[] = [1,2,3,4];

myArray.push(5);

let myArray2: string[] = ['toyota', 'kia', 'bmw'];

let myArray3: (string | number | boolean)[] = ['toyota', 'kia', 'bmw', true, 5];

//Tuple ==> định nghĩa trước kiểu dữ liệu cho mảng, và độ dài của mảng
let myArray4: [number, string, boolean];

myArray4 = [1, 'string', false];

//function có return
function sum(a:number,b:number): number {
    return a+b;
}

function helloType():void {
    console.log("hello");
}

function add(a:number,b:number,c?:number){
    return a+b+(c || 0);
}


add(1,2,3);

function helloWorld({name, age, email}: {name: string, age: number, email: string}){
    
}

interface CarType  {
    name: string;
    wheels: number;
    color: string;
    brand: string
}

interface CartABS extends CarType {
    abs: boolean;
}

interface Car16 extends CarType {
    slot: number;
    auto: boolean
}


let myCar: CarType = {brand: 'Toyota', name: 'Toyota ABC', wheels: 4, color: 'green'}; 

let myCar2: CartABS = {brand: 'BMW', name: 'BMW v2', wheels: 4, color: 'green', abs: true}; 

let myCar16: Car16 = {brand: 'Toyota', name: 'Toyota ABC', wheels: 8, color: 'green', slot: 16, auto: true}; 

type UserType = {
    name: string;
    role: 'admin' | 'subadmin' | 'user' | 'editor'
}

enum RoleType {
    Admin = 'admin',
    Subadmin = 'subadmin',
    User = 'user',
    Editor = 'editor'
}

let user: UserType = {
    name: 'John',
    role: RoleType.User
}

