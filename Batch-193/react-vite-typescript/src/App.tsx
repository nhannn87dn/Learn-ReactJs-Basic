import "./App.css";
import Button from "./components/Button";
import { FaShoppingCart } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
// Được gọi là component
function ViewMore() {
  //1 hàm return về 1 chuỗi giống HTML.
  //Lí do vì chuỗi này không phải là HTML.
  return <a href="#">View more</a>;
}

function ButtonRegister() {
  return (
    <>
      <button>Đăng ký</button>
      <button>Mua ngay</button>
    </>
  );
}

/**
 * Muốn cho component xuất hiện ra bên ngoài
 * thì phải đưa vào App
 */
function App() {
  //
  const elemet = <h1>Đây là thẻ h1</h1>;
  const name = "Nhan";

  return (
    <div className="heading">
      <FaShoppingCart /> <FaSmile />
      <hr />
      <input type="text" />
      <p className="remote-image">Remote image</p>
      <img
        src="https://cdn.tgdd.vn/Products/Images/7264/328200/g-shock-gst-b100gb-1a9dr-nam-thumb-600x600.jpg"
        alt=""
      />
      <p>Local image</p>
      <img src="images/ban-phim-co-khong-day-akko-3087.jpg" alt="" />
      <p
        style={{
          backgroundColor: "#fff",
          fontSize: 14,
        }}
      >
        Tôi là {name}
      </p>
      {2 + 4}
      {elemet}
      <h1>Hello React</h1>
      {/* Gọi function component như một thẻ standalone html */}
      <hr />
      <ButtonRegister />
      <ButtonRegister />
      <ButtonRegister />
      <ButtonRegister />
      <hr />
      <ViewMore />
      <ViewMore />
      <ViewMore />
      <hr />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
