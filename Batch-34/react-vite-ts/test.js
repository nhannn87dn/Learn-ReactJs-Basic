//Mô phỏng trả về một mảng users từ Database
function getUsers() {
    let users = [];
    //Sử dụng setTimeout để Delay 3 giây
    setTimeout(() => {
      users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
    }, 3000);
    return users;
  }
  
// Định nghĩa hàm Tìm user có tên john
function findUser(username) {
const users = getUsers(); //cần 1 time nhất định ==> return []
const user = users.find((user) => user.username === username);
return user;
}
//Gọi hàm 
console.log(findUser('john'));

//Kết quả


