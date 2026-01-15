let myName: unknown = "Nhan"; //string

myName = 123; //number

console.log("<<=== 🚀 myName ===>>", myName);

let isTeacher: boolean = true;

let arr: any[] = [];
arr[0] = "s";
arr[1] = 12;
console.log("<<=== 🚀 arr ===>>", arr);

let arr2: string[] = ["cam", "tao"];
// arr2[2] = true;
// arr2[3] = 123;

let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Nhan",
};
// user.name = 123;

//customer: khách hàng
//admin: quản trị viên

interface TUser {
  id: number;
  name: string;
  phone: string;
  email: string;
}

let customer: TUser = {
  id: 1,
  name: "A",
  phone: "0123456789",
  email: "email@gmail.com",
};

interface TUserAdmin extends TUser {
  role: string;
}

let admin: TUserAdmin = {
  id: 1,
  name: "A",
  phone: "0123456789",
  email: "email@gmail.com",
  role: "super admin",
};

function sum(a: number, b: number) {
  console.log(a + b);
}
sum(1, 2);
sum("1", "2");
