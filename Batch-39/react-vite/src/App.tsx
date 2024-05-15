import "./App.css";
import buttonImgage from "./assets/button-shop.png";

/* đầy là hàm js bình thường */
function sum(a, b) {
  return a + b;
}

/* 
Component
- Cách đặt tên: Theo cú pháp Pascal Case: Từ đầu tiên của mỗi từ là viết HO
*/
function ButtonLogin() {
  return (
    <>
      <button>Login</button>
      <button>Logout</button>
    </>
  );
}

/* component viết theo kiểu arrow function */
const Link = () => {
  return <a href="#">Home</a>;
};

/*
component
1. Cách tạo một component ?
- Đặt hàm có tên hàm với kí tự đầu tiên viết HOA
ví dụ:

function Link(){
  return (
    <a href="#">Home</a>
  )
}
- Hàm đó phải return về một đoạn code HTML và tất cả phải nằm trong 1 thẻ CHA

*/

function App() {
  const name = "softech";
  return (
    <>
      <h1 style={{ color: "blue", backgroundColor: "yellow", fontSize: 18 }}>
        Hello React, {name}
      </h1>
      <p>Assets</p>
      <img src={buttonImgage} alt="" />
      <p>Public</p>
      <img src="button-shop.png" />
      <div className="product_item">
        <span className="discount">-25%</span>
        <img
          width={100}
          src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/324893/honor-x8b-green-thumb-1-600x600.jpg"
          alt=""
        />
        <h3>Cáp chuyển đổi USB-C sang SD</h3>
        <div className="price">
          <strong>1.290.000đ</strong>
          <del>790.000đ</del>
        </div>
        {/* lfkdlsfkdlfkl */}
      </div>
    </>
  );
}

export default App;
