import myName from './person.js'
// Arrow function
// function helloReact(){

// }

const helloReact = ()=>{
    console.log('helloReact');
}

helloReact();//gọi hàm

//2.Khai báo biến
let name = 'Angular'; 
const number = 1;
/// string, number, boolean, null, undefined,
// array, object, function
{
  console.log(name);
  let age = 18; 
  const gender = 'male';
  var varGender = 'female';
}
//ngoài khối
///console.log('<<=== 🚀 gender ===>>',gender);
//console.log('<<=== 🚀 varGender ===>>',varGender);


const vehicles = ['mustang', 'f-150', 'expedition'];
// console.log(vehicles[0]);
const [a,...b] = vehicles;//destructuring

console.log('<<=== 🚀 b ===>>',b);


const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
}
console.log(vehicleOne.brand);

const {brand} = vehicleOne;

console.log('<<=== 🚀 brand ===>>',brand);

const user = {id: 1, name: 'John', pass: '1234'};

const {pass,...newUser} = user;

console.log('<<=== 🚀 newUser ===>>',newUser);

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

console.log('<<=== 🚀 myName ===>>',myName);

let n = 'VIP';

if(n === 'VIP'){
    let discount = 10;
}else{
    let discount = 0;
}
//Biểu thức 3 ngôi
let discount = n === 'VIP' ? 10 : 0;

