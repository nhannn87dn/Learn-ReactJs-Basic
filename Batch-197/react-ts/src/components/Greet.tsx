import { useEffect, useState } from "react";

function Greet({ name }: { name: string }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = useState("Aptech");
  const [person, setPerson] = useState("Jonh");
  //useEffect(()=>{}, [array of dependencies]) // Good! Use useEffect to handle side-effects;
  /*
    tham số đầu là 1 callback function, 
    tham số thứ 2 là 1 mảng các dependencies tuỳ chọn
 */
  //   useEffect(() => {
  //     console.log("useEffect is called!"); // Side-effect!
  //     document.title = `Greetings to ${name}`; // Side-effect!
  //   }); // effect luôn chạy lại mỗi khi component re-render, vì không có mảng dependencies

  //cách 2: mảng [],
  //   useEffect(() => {
  //     console.log("useEffect is called!"); // Side-effect!
  //     document.title = `Chào mừng ${person} đến với ${name} !`; // Side-effect!
  //   }, []);
  // effect chỉ chạy 1 lần sau khi component mount, vì mảng dependencies rỗng

  //cách 3: mảng [person],
  useEffect(() => {
    console.log("useEffect is called!"); // Side-effect!
    document.title = `Chào mừng ${person} đến với ${name} !`; // Side-effect!
  }, [person, name]);
  //effect luôn chạy trong lần render đầu tiên.
  // effect chạy lại mỗi khi giá trị của person hoặc name thay đổi

  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      console.log("<<=== 🚀 timer running===>>");
    }, 1000);

    // Hàm dọn dẹp sẽ được return
    return () => {
      console.log("Dọn dẹp! Hủy bộ đếm thời gian.");
      clearInterval(timerId); // Hủy setInterval khi component unmount
    };
  }, []); // Mảng rỗng -> timer được tạo 1 lần và dọn dẹp 1 lần.

  return (
    <div className="greet">
      <h1>Thời gian: {time} giây</h1>
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
      <h1> {title} </h1>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <hr />
      <p> {message}</p>
    </div>
  ); // Calculates output
}

export default Greet;
