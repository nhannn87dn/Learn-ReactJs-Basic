
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


function findUser(username) {
    return getUsers
      .then((users) => {
        const user = users.find((user) => user.username === username);
        return user;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  /*
    findUser return về một Promise nên bản thân nó biến thành một Promise.
    Vì vậy bạn có thể sử dụng then, catch
  */
  
  findUser('john')
  .then((user) => {
      console.log(user);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
