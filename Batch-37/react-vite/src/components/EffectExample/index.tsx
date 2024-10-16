import { useEffect, useState } from "react";

function EffectExample({ name }: { name: string }) {
  const message = `Hello, ${name}!`; // Calculates output
  console.log("render EffectExample");
  const [myName, setMyName] = useState("");
  const [person, setPerson] = useState("Jonh");
  //document.title = `Greetings to ${name}`; // Side-effect!
  //TH1. Không có tham số thứ 2
  //   useEffect(() => {
  //     console.log(2);
  //     document.title = `Greetings to ${name}`; // Side-effect!
  //   });
  //TH2. Có tham số thứ 2, và là []
  //   useEffect(() => {
  //     console.log("useEffect", 2);
  //     document.title = `Greetings to ${name}`; // Side-effect!
  //   }, []);

  //TH3. Tham số thứ 2, ko rỗng
  useEffect(() => {
    console.log("useEffect", 2);
    document.title = `Chào mừng ${person} đến với  ${name} !`; // Side-effect!
  }, [person]); // <== Dependencies thêm vào state person

  return (
    <div>
      {console.log("UI", 1)}
      {message}
      <hr />
      <input
        onChange={(e) => {
          console.log(e.target.value);
          setMyName(e.target.value);
        }}
        placeholder="text"
        name="text"
        type="text"
      />
      <p>{myName}</p>
      <hr />
      <div>
        <button
          className="btn"
          onClick={() => {
            setPerson("Jonh");
          }}
        >
          Jonh
        </button>
        <button
          className="btn"
          onClick={() => {
            setPerson("Alice");
          }}
        >
          Alice
        </button>
        <button
          className="btn"
          onClick={() => {
            setPerson("Sarah");
          }}
        >
          Sarah
        </button>
      </div>
    </div>
  ); // Calculates output
}

export default EffectExample;
