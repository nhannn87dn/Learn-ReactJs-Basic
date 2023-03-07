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
var firstName = "Dylan"; // type string
var isAdmin = false;
var age = 2;
// any là chấp nhận bất kỳ kiểu dữ liệu
var v = true;
//Mảng các phần tử chỉ là chuổi ['Minh','Tuan','Thao'];
var users;
//Mảng các phần từ chỉ là số [1,2,3];
var users2;
// Kiểu mảng hổn hợp
var ourTuple;
ourTuple = [5, false, 'Coding God was here'];
var car = {
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
var RoleTypes;
(function (RoleTypes) {
    RoleTypes["Admin"] = "Admin";
    RoleTypes["Member"] = "Member";
    RoleTypes["User"] = "User";
})(RoleTypes || (RoleTypes = {}));
// Hàm không trả về gì cả
var myRole = function (role) {
    console.log(role);
};
myRole(RoleTypes.User);
// 1 trong 2 kiểu dữ liệu hay còn gọi là OR
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
// Hàm có trả về kiểu dữ liệu là number
var calTotal = function (a, b) {
    return a + b;
};
// Hàm có trả về kiểu dữ liệu là number với Default Parameters
var calTotal2 = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
calTotal2(2);
var myDivide = function (_a) {
    var a = _a.a, b = _a.b;
    return a / b;
};
//Casting with as, ép chuổi (ép kiểu dữ liệu)
var myAge = 18;
console.log(myAge.length);
console.log(myAge.length); // sử dấu <> để ép kiểu dữ liệu
/**
 * Có thể trả về là
 * [1,2]
 * ['Toyota', 2]
 * mảng với kiểu dữ liệu khác nhau
 */
var myArr = function (x, y) {
    return [x, y];
};
console.log(myArr(true, null));
