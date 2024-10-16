import React, { useState } from "react";

const UseEffectHookExample = ({ name }: { name: string }) => {
  const message = `Hello, ${name}!`; // Calculates output
  console.log("UseEffectHookExample render");
  const [title, setTitle] = React.useState("");
  console.log("title", title);
  const [person, setPerson] = React.useState("Jonh");
  const [show, setShow] = useState(false);
  //Chỉ có tham số thứ 1
  //   React.useEffect(() => {
  //     console.log("2");
  //     document.title = `${title}`; // Side-effect!
  //   });
  //Có tham số thứ 2 , là mảng rổng []
  //Nó chỉ chạy duy nhất 1 lần đầu tiên
  //   React.useEffect(() => {
  //     console.log("2");
  //     document.title = `Chào mừng ${person} đến với  ${name} !`; // Side-effect!
  //   }, []);

  //Cách dùng 3, có tham số thứ 2, ko phải là mảng rổng
  //Nó chạy ngay lần đầu tiên, và chạy lại mỗi khi
  // các phần tử trong mảng dependency thay đổi
  React.useEffect(() => {
    console.log("2");
    document.title = `${title} !`; // Side-effect!
    //document.title = `Chào mừng ${person} đến với  ${name} !`; // Side-effect!
  }, [person, name, title]);

  React.useEffect(() => {
    const handleGoTop = () => {
      console.log(window.scrollY);

      if (window.scrollY >= 200) {
        console.log("set state");
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleGoTop);

    // cleanup this component
    return () => {
      console.log("Unmount handleGoTop");
      window.removeEventListener("scroll", handleGoTop);
    };
  }, []);

  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Running");
      setCount((prev) => prev + 1);
    }, 1000);

    // Có return trả về --> Unmouting

    return () => {
      console.log("unMounted");
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div style={{ height: "2000px" }}>
      <h1>{count}</h1>
      {console.log("1")}
      {message}

      <div>
        <button
          onClick={() => {
            setPerson("Jonh");
          }}
        >
          Jonh
        </button>
        <button
          onClick={() => {
            setPerson("Alice");
          }}
        >
          Alice
        </button>
        <button
          onClick={() => {
            setPerson("Sarah");
          }}
        >
          Sarah
        </button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        {show && (
          <button
            style={{
              position: "fixed",
              right: 20,
              bottom: 20,
            }}
          >
            Go To
          </button>
        )}
      </div>
    </div>
  ); // Calculates output
};

export default UseEffectHookExample;
