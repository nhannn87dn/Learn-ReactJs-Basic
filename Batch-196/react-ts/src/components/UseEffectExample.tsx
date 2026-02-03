import { useEffect, useState } from "react";

const UseEffectExample = ({ name }: { name: string }) => {
  const [person, setPerson] = useState(name);
  const [title, setTitle] = useState("");
  console.log("<<=== 🚀 UseEffectExample ===>>");
  const message = `Hello, ${name}!`; // Calculates output
  // Bad!
  //document.title = `Greetings to ${name}`; // Side-effect!

  //best practice: use useEffect to handle side-effects
  //HT1: ko có dependencies
  //   useEffect(() => {
  //     document.title = `Greetings to ${name}`;
  //     console.log("2");
  //   });

  console.log("<<=== 🚀 person ===>>", person);

  //HT2: dependencies rỗng []
  //   useEffect(() => {
  //     document.title = `Greetings to ${person}`;
  //     console.log("2");
  //   }, []); //chỉ chạy 1 lần sau lần render đầu tiên

  //HT3: có dependencies [person]
  useEffect(() => {
    document.title = `Greetings to ${person}`;
    console.log("2");
  }, [person]);
  //chạy 1 lần sau lần render đầu tiên
  //chạy lại mỗi khi person thay đổi

  return (
    <div>
      <button onClick={() => setPerson("Alice")}>Alice</button>
      <button onClick={() => setPerson("Bob")}>Bob</button>
      <button onClick={() => setPerson("Charlie")}>Charlie</button>
      <h1>Title: {title}</h1>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {message}
    </div>
  ); // Calculates output
};

export default UseEffectExample;
