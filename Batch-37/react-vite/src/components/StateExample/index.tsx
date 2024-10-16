import React, { useState } from "react";

// const arrs = [index, setIndex];
// const [index, setIndex] = arrs;
//className="text-red-500"
const LikeButton = () => {
  console.log("LikeButton render");
  const [isLike, setIsLike] = React.useState(false);
  const handleLike = () => {
    setIsLike(!isLike);
  };
  console.log("isLike", isLike);
  if (isLike) {
    return (
      <button className="text-red-500" onClick={handleLike}>
        Thích
      </button>
    );
  }
  return <button onClick={handleLike}>Thích</button>;
};

const BuyNow = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleBuyNow = () => {
    console.log("handleBuyNow");
    setIsShow(!isShow);
  };

  return (
    <div>
      <button onClick={handleBuyNow} className="btn btn_primary">
        Mua Ngay
      </button>
      {isShow && (
        <div className="modal">
          <div className="overlay flex items-center justify-center bg-slate-500 fixed top-10 w-screen h-screen">
            <div className="modal_content w-[300px] bg-white ">
              <h1>Hi Modal</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface IList {
  id: number;
  text: string;
}

const ListExample = () => {
  const [items, setItems] = useState<IList[]>([
    { id: 1, text: "Mua sữa" },
    { id: 2, text: "Đi chợ" },
    { id: 3, text: "Làm bài tập" },
  ]);

  const handleAddItem = () => {
    const newItem = { id: items.length + 1, text: "Việc mới" };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              data-id={item.id}
              className="ms-10 text-red-500"
              onClick={() => handleRemoveItem(item.id)}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={handleAddItem}>
        Thêm việc mới
      </button>
    </div>
  );
};

const Count = () => {
  //let index = 0;
  const [index, setIndex] = React.useState<number>(0);
  //useState(0): Trong đó 0 là giá trị khởi tại của biến index
  //snapshot (chụp hình state index) = 0
  //snapshot = 0
  function handleClick() {
    console.log("ok");
    //index = index + 1;
    //setIndex(index + 1);
    setIndex((snapshot) => snapshot + 1); // = 1, snapshot = 1
    setIndex((snapshot) => snapshot + 1); // =2, snapshot = 2
    setIndex((snapshot) => snapshot + 1); // =3, snapshot = 3

    //setIndex(prev => prev + 1)
    //setIndex(n => n + 1);
    //setIndex(old => old + 1)
  }
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        +3
      </button>
      <h3>{index}</h3>
    </div>
  );
};

export default function StateExample() {
  const [showCount, setShowCount] = React.useState(false);
  return (
    <>
      <ListExample />
      <BuyNow />
      <hr />
      <LikeButton />
      <hr />
      <button
        className="btn"
        onClick={() => {
          setShowCount(!showCount);
        }}
      >
        Toggle Count
      </button>
      {showCount && <Count />}
    </>
  );
}
