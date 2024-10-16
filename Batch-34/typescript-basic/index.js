//cú pháp khai báo biến trong TS
//let [tên biến]: [kiểu dữ liệu của biến]  = giá trị của biến
var age = 15; //number
var myName = 'John'; //string
var isStudent = false; //boolean
//Tức là biến myAny chưa xác định được kiểu dữ liệu
var myAny;
myAny = 'string';
myAny = 12;
myAny = true;
//với any  bạn có thể thay đổi kiểu giữ liệu cho giá trị của biến
var myArr = ['banana', 'orange'];
/*
Khi khái báo như trên thì
Hiểu là mảng trên chỉ chấp nhận, giá trị
của các phần tử bên trong nó là STRING thôi
*/
//myArr[2] = 1;//sai
myArr[2] = 'lemon';
var myArrNum = [1, 2, 3, 4];
//myArrNum[5] = 'John'; sai
myArrNum[5] = 5; //đúng
//Kiểu mảng hổn hợp trong JS
//THÌ trong TS nó có tên gọi là Tuple
var myArrComplex;
myArrComplex = ['banana', 'orange', 1, 3, true, false];
// let car : {type: string, model: string, year: number} = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
// };
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
var CarContainer = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
    weight: '10T',
    cod: true
};
//Function
//void là kiểu dữ liệu cho một hàm không return
//string: kiểu dữ liệu của biến name
function helloName(name) {
    console.log('<<=== 🚀 Hello ===>>', name);
}
var helloNameV3 = function (name) { return console.log('<<=== 🚀 Hello ===>>', name); };
helloName('hello');
function helloNameV2(name) {
    if (name === void 0) { name = 'Aptech'; }
    console.log('<<=== 🚀 Hello ===>>', name);
}
helloNameV2();
/**
 * Để chắc chắn bạn muốn nhận lại một kết quả là số cho phép
 * tính tổng thì bạn cần khai báo thêm kiểu dữ liệu trả về cho return
 */
// const calSum = (a:number,b:number) : string => {
//     return `${a} + ${b}`
// }
var calSum = function (a, b) {
    return a + b;
};
//short hand khi chỉ return có 1 dòng code
var calSumV2 = function (a, b) { return a + b; };
calSum(1, 2);
var getProfile = function (name, age, gender) {
    var msg = "Name: ".concat(name, " - Age: ").concat(age, " - Gender: ").concat(gender);
};
var myProfile = { name: 'Jonh', age: 18, myGender: 'male' };
var getProfileV2 = function (myProfile) {
    var msg = "Name: ".concat(name, " - Age: ").concat(age, " - Gender: ").concat(myGender);
    console.log(msg);
};
getProfileV2(myProfile);
