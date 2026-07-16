let myName = 'Nhan'; //string
const myAge = 20; //number

//Toi la Nhan, 20 tuoi
//console.log('Toi la ' + myName + ', ' + myAge + ' tuoi');
console.log(`Toi la ${myName}, ${myAge} tuoi`); //template string


//function
function sayHello(){
    console.log('Hello');
}
//arrow function
const sayHelloWithName = (name) => {
    console.log(`Hello, ${name}!`);
}

//sayHello();

//Destructuring
let person = {
    id: 1,
    name: 'Nhan',
    age: 20,
    address: 'HCM',
    password: '123456'

}
//
console.log(person.age);
const {age} = person;

console.log(age);

//Spread Operator
console.log(person);
const {password, ...safePerson} = person;
console.log(safePerson);


//thay đổi age từ 20 --> 30
person.age = 30;
console.log(person);
//áp dụng spread operator để thay đổi age từ 20 --> 30
person = {...person, age: 30}; // update
console.log(person);
//person.email = "nhan@example.com";
person = {...person, email: "nhan@example.com"}; // add
console.log(person);

const level = 'vip';

if(level === 'vip'){
    console.log(5);
}else{
    console.log(0);
}
//toán tử 3 ngôi
const discount = level === 'vip' ? 5 : 0;
console.log(discount);