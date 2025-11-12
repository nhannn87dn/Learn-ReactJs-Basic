import { useEffect, useState } from "react";

function Greet({ name }: { name: string }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [text, setText] = useState("");
  const [person, setPerson] = useState("Alice");

  // Bad!
  //document.title = `Greetings to ${name}`; // Side-effect!

  //TH1: Khối lệnh bên trong nó sẽ chạy sau khi component render xong
  // và mỗi khi component re-render thì khối lệnh này sẽ chạy lại
  //   useEffect(() => {
  //     document.title = `Greetings to ${name}`; // Side-effect!
  //     console.log("2");
  //   });

  //TH 2: Có dependency rỗng []
  // Khối lệnh bên trong nó sẽ chỉ chạy 1 lần sau khi component render lần đầu tiên
  //   useEffect(() => {
  //     document.title = `Greetings to ${name}. Tôi là ${person}`; // Side-effect!
  //     console.log("2");
  //   }, []); //mảng dependency rỗng

  //TH 3: Có dependency là mảng có biến phụ thuộc (state/props)
  //   useEffect(() => {
  //     document.title = `Greetings to ${name}. Tôi là ${person}`; // Side-effect!
  //     console.log("2");
  //   }, [name, person]);

  //TH 4: cleanup function, tức callback có return về 1 function
  useEffect(() => {
    document.title = `Greetings to ${name}. Tôi là ${person}`; // Side-effect!
    console.log("2");
    return () => {
      console.log("Greet đã unmount rồi nhé!");
    };
  }, [name, person]);

  console.log("<<=== 🚀 person ===>>", person);
  return (
    <>
      {console.log("1")}
      <div className="greet">{message}</div>
      <h2>{text}</h2>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Type something..."
      />
      <div>
        <button
          onClick={() => {
            setPerson("Tomy");
          }}
        >
          Tomy
        </button>
        <button
          onClick={() => {
            setPerson("Jerry");
          }}
        >
          Jerry
        </button>
        <button
          onClick={() => {
            setPerson("Alice");
          }}
        >
          Alice
        </button>
      </div>
    </>
  ); // Calculates output
}

export default Greet;
