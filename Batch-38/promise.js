const myPromise = new Promise((resolve, reject) => {
  // Xử lý logic bất đồng bộ
  //Ví dụ lấy danh sách khách hàng từ database, tồn thời gian để lấy
  //Trạng thái lúc này: pending

  const result = true;

  if (result) {
    /* Hoàn thành thành công == fulfilled */
    resolve([
      { id: 1, name: "A" },
      { id: 2, name: "b" },
    ]); // Giải quyết Promise với giá trị thành công
  } else {
    reject("error"); // Từ chối Promise và trả về lỗi == rejected
  }
});

myPromise
  .then((data) => {
    console.log("then", data);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    //Luôn luôn thực hiện dù kết quả lỗi hay thành công
    console.log("finally");
  });
