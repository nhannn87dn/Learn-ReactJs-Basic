let yourName = "Nhan";
// ten bien : data type = value
let lastName: string = "nguyen";
// any --> chap nhan kieu du lieu bat ky
let myAbc: any = "abc"; // string
myAbc = 123; //__ doi thanh number
myAbc = true; //_--> boolean

/* Một mảng mà phần từ toàn là chuỗi */
let fruits1: string[] = ["orange", "apple", "lemon"];
fruits1[3] = "kiwi"; // correct
//fruits1[4] = 123; //-- error
/* Một mảng mà phần tử toàn là số */
let arrNumbers: number[] = [1, 2, 3];
//arrNumbers[3] = 'kiwi'; //error
arrNumbers[4] = 4; //correct
/* Mảng mà phần tử là số hoặc chuổi */
let myArr1: (string | number | boolean)[] = [1, "Hai"];
myArr1[2] = true;

console.log(myArr1);

/* Mảng có số phần tử với kiểu dữ liệu như đã khai báo */
let ourTuple: [number, boolean, string];
ourTuple = [1, true, "hai"]; //correct

/* type alias */
type TProfile = {
  id: number;
  name: string;
  email: string;
};

let MyProfile: TProfile = {
  id: 1,
  name: "ABC",
  email: "abc@gmail.com",
};

interface IAnimal {
  name: string;
  leg: number;
  color: string;
}

let DogProfile: IAnimal = {
  name: "lu",
  leg: 4,
  color: "black",
};

let CatProfile: IAnimal = {
  name: "miu",
  leg: 4,
  color: "gray",
};
interface IBird extends IAnimal {
  fly: boolean; //thêm vào fly mà IAnimal ko có
}

let BirdProfile: IBird = {
  name: "bird",
  leg: 2,
  color: "white",
  fly: true,
};

const helloName = (name: string) => {
  console.log("hello", name);
};

helloName("Tuan");

const tinhTong = (a: number, b: number): number => {
  //return a + b;
  return `Tong: ${a + b}`;
};

tinhTong(2, 5);
