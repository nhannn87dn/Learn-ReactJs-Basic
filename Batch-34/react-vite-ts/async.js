const success = true;

const getUsers = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //Lấy data từ database ==> pending
        const users = [
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' },
        ];
        
        if(success){
            resolve(users)
        }else{
            reject('Lỗi: Không thể tải dữ liệu')
        }

    }, 2000);
});

// Thêm async ở trước từ khóa function
async function findUser(username) {
  const users = await getUsers; 
  const user = users.find((user) => user.username === username);
  return user;
}
//Gọi hàm node 

findUser('john')
.then((user) =>console.log(user))