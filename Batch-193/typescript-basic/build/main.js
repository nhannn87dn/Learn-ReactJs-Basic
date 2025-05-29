"use strict";
let yourName = "Nhan";
// ten bien : data type = value
let lastName = "nguyen";
// any --> chap nhan kieu du lieu bat ky
let myAbc = "abc"; // string
myAbc = 123; //__ doi thanh number
myAbc = true; //_--> boolean
/* Một mảng mà phần từ toàn là chuỗi */
let fruits1 = ["orange", "apple", "lemon"];
fruits1[3] = "kiwi"; // correct
//fruits1[4] = 123; //-- error
/* Một mảng mà phần tử toàn là số */
let arrNumbers = [1, 2, 3];
//arrNumbers[3] = 'kiwi'; //error
arrNumbers[4] = 4; //correct
/* Mảng mà phần tử là số hoặc chuổi */
let myArr1 = [1, "Hai"];
myArr1[2] = true;
console.log(myArr1);
/* Mảng có số phần tử với kiểu dữ liệu như đã khai báo */
let ourTuple;
ourTuple = [1, true, "hai"]; //correct
let MyProfile = {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
};
let DogProfile = {
    name: "lu",
    leg: 4,
    color: "black",
};
let CatProfile = {
    name: "miu",
    leg: 4,
    color: "gray",
};
let BirdProfile = {
    name: "bird",
    leg: 2,
    color: "white",
    fly: true,
};
const helloName = (name) => {
    console.log("hello", name);
};
helloName("Tuan");
helloName(123); //sai
