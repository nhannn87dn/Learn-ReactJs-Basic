import "./App.css";
import React from "react";

function ButtonLike({
  liked,
  onHandleClick,
}: {
  liked: boolean;
  onHandleClick: () => void;
}) {
  console.log(liked);
  return (
    <button onClick={onHandleClick} className={liked ? "text-blue-500" : ""}>
      Thích
    </button>
  );
}

function Count() {
  //let index = 0;
  //useState(0) Có nghĩa giá trị khởi tạo của index lúc đầu = 0
  const [index, setIndex] = React.useState(0); //Hook

  function handleClick() {
    //index = index + 1;
    setIndex(index + 1);
  }
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("Đã click");
          handleClick();
        }}
      >
        Increment
      </button>
      <h3>{index}</h3>
    </>
  );
}

function App() {
  const [isLike, setIsLike] = React.useState<boolean>(false); // false là chưa click
  const [isOpen, setIsOpen] = React.useState(false); // false có nghĩa chưa mở
  console.log("App render");
  return (
    <>
      <h1>State</h1>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="btn btn-primary"
      >
        Add To Cart
      </button>
      {isOpen && (
        <div className="modal">
          <p>Thêm vào giỏ hàng thành công</p>
        </div>
      )}
      <hr />
      <ButtonLike
        onHandleClick={() => {
          console.log("đã click");
          setIsLike(!isLike);
        }}
        liked={isLike}
      />{" "}
      <br />
      <Count />
    </>
  );
}

export default App;
