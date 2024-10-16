const names = require('./config');

console.log('<<=== 🚀 names ===>>',names);

let name = 'Nguyen Ngoc Nhan'
const age = 35

//CÁCH KHAI BÁO FUNCTION

function name_fun(){
  console.log('run name fun');
}
// name_fun()

const arrowFun = ()=> {
  console.log('run name fun');
}

// const sayHello = (name)=> {
//   console.log(`Hello ${name}`);
// }

const sayHello = name=> console.log(`Hello ${name}`);

const array = [1, 2, 3, 4, 5]
//==>  [3, 4, 5, 6, 7]
const newArray = array.map((item)=>{
  if(item === 3){
    return item + 2
  }
  return item
})

//console.log('<<=== 🚀 newArray ===>>',newArray);


///DEStructuring


const vehicles = ['mustang', 'f-150', 'expedition'];

const vehicles_2 = ['bycle'];

const arrN = [...vehicles,...vehicles_2];


let vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

const vehicleTwo = {
  wheels: 'four'
}

vehicleOne = {...vehicleOne, year: 2023} //es6 ==> update
vehicleOne = {...vehicleOne,  wheels: 'four'} 
//==> them moi, khi thuoc tinh chua ton tai
// const vehicleNew = {...vehicleOne, ...vehicleTwo}
console.log(vehicleOne);


const level = 'VIP'

if(level === 'VIP'){
  console.log('discount 10%');
}else{
  console.log('discount 5%');
}
//Toan tu 3 ngoi
const discount = level === 'VIP' ? 10 : 5;