const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
//Gộp 2 mảng lại 1 thành mảng mới
//console.log(numbersOne.concat(numbersTwo));
let newArr = [...numbersOne, ...numbersTwo];
//Thêm phần tử mới vào mảng
//newArr[6] = 7;
newArr = [...newArr, 8];

console.log(newArr);

let myProfile = { id: 1, name: "Nhan" };
const myEmail = { email: "nhannn@softech.vn" };
//Gộp 2 object lại 1
// {id: 1, name: "Nhan" , email: "nhannn@softech.vn"}
const newProfile = { ...myProfile, ...myEmail };

//Thêm phần tử vào object
//myProfile.mobile = "0988888888";
//myProfile.name = 'Tuan';
myProfile = { ...myProfile, mobile: "0988888888" }; //Add
myProfile = { ...myProfile, name: "Tuan" }; //Update
console.log(myProfile);
