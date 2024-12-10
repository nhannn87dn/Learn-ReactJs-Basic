import "./App.css";
import Header from "./components/Header";
import loa from "./assets/images/loa-bluetooth.jpg";
import { FaAddressBook, FaHeart, FaShoppingCart } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";

const info = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

function App() {
  return (
    <>
      <h2>Thư viện fonts có thể sử cho reactr</h2>
      <ul>
        <li>
          <FaAddressBook /> <FaHeart /> <FaShoppingCart /> <WiDayCloudy />
          react-icons
        </li>
        <li>@heroicons/react</li>
        <li>lucide-react</li>
      </ul>
      <h3 className="h3">
        <i className="fa fa-heart"></i> HÌnh từ Local Public
      </h3>
      <img src="./images/asus-vivobook-15.jpg" alt="" />
      <h3 className="local_font">HÌnh từ Local src/assets</h3>
      {/* Phải import vào  */}
      <img src={loa} alt="" />
      <h3>HÌnh từ internet</h3>
      <img
        height={150}
        width={150}
        src="https://cdn.tgdd.vn/Products/Images/42/314210/oppo-reno-11-pro-trang-thumb-600x600.jpg"
        alt=""
      />
      {5 + 5}
      <Header />
      <p
        className="ten-class"
        style={{
          backgroundColor: "#fff",
          fontSize: "2rem",
        }}
      >
        Para
      </p>
      {info.email}
      <img src="" alt="" />
      <input type="text" />
      {/* đây là comment CTRL + / */}
    </>
  );
}

export default App;
