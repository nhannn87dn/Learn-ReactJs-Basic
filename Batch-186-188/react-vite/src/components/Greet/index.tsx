import { useEffect, useState } from "react";

function Greet({ name }: { name: string }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = useState("");
  const [person, setPerson] = useState("Jonh");

  console.log("<<=== 🚀 person ===>>", person);
  console.log("<<=== 🚀 title ===>>", title);

  //TH1, chỉ có tham số 1
  // useEffect(() => {
  //   console.log("2");
  //   document.title = `Greetings to ${name}`; // Side-effect!
  // });

  //TH2, chỉ có tham số 1,2, với 2 là mảng rỗng.
  //useEffect(()=>{}, [])
  // useEffect(() => {
  //   console.log("2");
  //   document.title = `Greetings to ${person}`; // Side-effect!
  // }, []); //dependency là một mảng rỗng

  //TH3: Có cả 2 tham số, tham số thứ 2 ko phải mảng rỗng
  //uuseEffect(()=>{}, [abc])
  useEffect(() => {
    console.log("2");
    document.title = `Greetings to ${person}`; // Side-effect!
  }, [person]); // Callback nó phụ thuộc vào giá trị của biến person

  return (
    <div>
      {console.log("1")}
      {message}
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="title"
        type="text"
      />
      <hr />
      <button
        onClick={() => {
          setPerson("Jonh");
        }}
        className="btn btn-default"
      >
        Jonh
      </button>
      <button
        onClick={() => {
          setPerson("Alice");
        }}
        className="btn btn-default"
      >
        Alice
      </button>
      <button
        onClick={() => {
          setPerson("Sarah");
        }}
        className="btn btn-default"
      >
        Sarah
      </button>
    </div>
  ); // Calculates output
}

export default Greet;
