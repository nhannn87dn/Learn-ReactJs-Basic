import { useEffect, useState } from "react";

function Greet({ name }: { name: string }) {
  const [title, setTitle] = useState("APtech");
  const [color, setColor] = useState("yellow");
  const [count, setCount] = useState(0);
  const message = `Hello, ${name}!`; // Calculates output

  //TH 1
  // useEffect(() => {
  //   console.log("2");
  //   //callback luon chay khi component render
  //   document.title = `Greetings to ${name}`; // Side-effect!
  // });

  //TH 2, callback no chi chay lan dau tien
  // useEffect(() => {
  //   console.log("2");
  //   //callback luon chay khi component render
  //   document.title = `Greetings to ${color}`; // Side-effect!
  // }, []); // dependency la mảng rỗng

  //TH 3, callback no chi chay lan dau tien + chay lại khi dependencies thay đổi
  useEffect(() => {
    console.log("2");
    //callback luon chay khi component render
    document.title = `Greetings to ${color}`; // Side-effect!
  }, [color]); // khi mảng thay đổi, callback chạy lại

  console.log("<<=== 🚀 color ===>>", color);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
      console.log("This will run every second!");
    }, 1000);

    return () => {
      console.log("Unmout greet khoi home page");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {message}
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="name"
        type="text"
      />
      <button
        onClick={() => {
          setColor("yellow");
        }}
        className="btn btn-default"
      >
        yellow
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
        className="btn btn-default"
      >
        green
      </button>
      <button
        onClick={() => {
          setColor("red");
        }}
        className="btn btn-default"
      >
        red
      </button>
      <h1>{count}</h1>
    </div>
  ); // Calculates output
}

export default Greet;
