import "./App.css";
import "./components/ButtonV2/ButtonV2.css";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import ButtonV2 from "./components/ButtonV2";
import { FaShoppingCart, FaPhone } from "react-icons/fa";
//Hàm js bình thường
// function sum(a, b) {
//   return a + b;
// }
// function sayHello(name = 'Noname'){
//   console.log(name);
// }
// sayHello('NHan');
/*
Quy tắc để định nghĩa 1 component
1. Tên của component phải bắt đầu bằng một kí tự HOA
2. Tuân theo nguyên tác PascalCase: ProductList
3. Luôn Return về một single element, 1 thẻ duy nhất
*/

//Function component
function Avatar() {
  return <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />;
}
//Avatar(); ==> No call
//props = properties
// props : {label: string} = {label: 'Login'}
//const {label} =props;

type TButton = {
  label?: string;
};

function Button({ label }: TButton) {
  //console.log("<<=== 🚀 props ===>>", props);
  return <button>{label}</button>;
}
//Cách 2
Button.defaultProps = {
  label: "Noname 2",
};

// COmponent code như một function
// DÙng thì như một thẻ HTML

/*
<></> ==> Fragment

*/
const ProductList = () => {
  return (
    <>
      <img
        src="https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/xiaomi-redmi-note-11s-5g-thumb-G4305-1650508487085.jpg"
        alt=""
      />
      <h3>IPhone 14</h3>
      <strong>9.990.000</strong>
    </>
  );
};
/*
JSX = Javascript XML

*/

function Profile({
  name,
  age,
  work,
}: {
  name: string;
  age: number;
  work: string;
}) {
  return (
    <p>
      Tôi tên là {name}, tôi năm nay {age} tuổi, tôi đang làm việc tại zz
    </p>
  );
}

function App() {
  const h2 = <h2>Hello Heading 2</h2>; //JSX
  const name = "Nhan";
  const str = <p>Hello {name}</p>;
  const user = {
    name: "Nhan",
    age: 35,
    work: "Aptech",
  };

  return (
    <>
      <img
        src="https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/xiaomi-redmi-note-11s-5g-thumb-G4305-1650508487085.jpg"
        alt=""
      />

      <img src="./images/xiaomi-11.jpg" alt="" />

      <ButtonV2 icon={<FaShoppingCart />} label="Thêm vào giỏ hàng" />
      <ButtonV2 icon={<FaPhone />} type="button_dark" label="Gọi lại tư vấn" />
      <h1
        style={{
          color: "red",
          backgroundColor: "yellow",
        }}
      >
        Hello React !
      </h1>
      <Profile name="Nhan" age={35} work="Softech" />
      {h2}
      {str}
      {console.log("Hello JSX")}
      {5 + 5}
      <Avatar />
      <Button label="Thêm vào giỏ hàng" />
      <Button label="Gọi lại tư vấn" />
      <Button label="Login" />
      <Button />
      <ProductList />
      <TodoList>
        <li>Lau nhà</li>
        <li>Hút bui</li>
        <TodoListItem text="Nau com" />
        <TodoListItem text="Xem tivi" />
      </TodoList>
      <img src="" alt="" />
      <li className="item">
        <div className="item-label"></div>
        <label className="discount">-2%</label>{" "}
        <a href="xiaomi-redmi-note-11s-5g" title=" Xiaomi Redmi Note 11S 5G">
          <div className="img">
            <img
              className="photo ls-is-cached lazyloaded"
              data-src="https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/xiaomi-redmi-note-11s-5g-thumb-G4305-1650508487085.jpg"
              alt=" Xiaomi Redmi Note 11S 5G"
              src="https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/xiaomi-redmi-note-11s-5g-thumb-G4305-1650508487085.jpg"
            />
          </div>
          <input type="text" />
          <h3> Xiaomi Redmi Note 11S 5G</h3>
          <div className="price">
            <strong>20.490.000₫</strong>
            <span>20.990.000₫</span>
          </div>
          {/* dfdsfdslfdsgkfdl;gk */}
          <div className="promotion clr"></div>
        </a>
      </li>
    </>
  );
}

export default App;
