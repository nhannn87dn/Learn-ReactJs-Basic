const myPromise = new Promise((resolve, reject) => {
  // Xử lý logic bất đồng bộ
  // Lấy dữ liệu
  //Trạng thái lúc này: pending

  const result = false;

  if (result) {
    /* Hoàn thành thành công == fulfilled */
    resolve(1); // Giải quyết Promise với giá trị thành công
  } else {
    reject("Lỗi: Không thể tải dữ liệu"); // Promise thất bại // Từ chối Promise và trả về lỗi == rejected
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//Mô phỏng trả về một mảng users từ Database
function getUsers() {
  let users = [];
  //Sử dụng setTimeout để Delay 3 giây
  setTimeout(() => {
    users = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 3000);
  return users;
}
// Định nghĩa hàm Tìm user có tên john
function findUser(username) {
  //Thực tế dòng này nó đi tìm trong CSDL
  //để lấy ra danh sách users ==> tốn thời gian
  const users = getUsers();
  const user = users.find((user) => user.username === username);
  return user;
}
//Gọi hàm
//console.log(findUser("john"));
