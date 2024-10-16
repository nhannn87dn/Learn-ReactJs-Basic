import { useEffect, useState } from "react";

const EffectExample = ({ name }: { name: string }) => {
  const message = `Hello, ${name}!`; // Calculates output

  ///document.title = `Greetings to ${name}`; // Side-effect!
  console.log("EffectExample render");
  /*
  useEffect(()=>{},[array])
  Tham số 1: callback function
  Tham số 2: mảng tùy chọn
  */

  //1.Chỉ có tham số thứ 1
  //=> Chạy lần đầu tiên, và mỗi khi component render
  //   useEffect(() => {
  //     console.log("2");
  //     document.title = `Greetings to ${name}`; // Side-effect!
  //   });

  //2. Có tham số thứ 2, nhưng là một mảng rỗng []

  //   useEffect(() => {
  //     console.log("2");
  //     document.title = `Greetings to ${name}`; // Side-effect!
  //   }, []); //Tham số thứ 2 này gọi nó là: dependency
  // Những Effect nào mà bạn muốn chỉ chạy duy nhất 1 lần đầu
  // khi component render thì dùng cách trường hợp này

  const [myName, setMyName] = useState("");
  const [person, setPerson] = useState("Alice");

  //3. Có tham số thứ 2, nhưng là một mảng không rỗng
  useEffect(() => {
    console.log("2");
    document.title = `Greetings to ${person}`;
  }, [person]);
  //Callback chạy lần đầu tiên
  //và chạy lại mỗi khi biến person thay đổi

  console.log("Person >>>>", person);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
      console.log("This will run every second!");
    }, 1000);

    return () => {
      console.log("Da Unmouting");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h2>{count}</h2>
      {console.log("1")}
      <p>{message}</p>
      <input
        value={myName}
        onChange={(e) => {
          setMyName(e.target.value);
        }}
        placeholder="name"
        type="text"
      />
      <hr />
      <button
        onClick={() => {
          setPerson("Alice");
        }}
        className="btn"
      >
        Alice
      </button>
      <button
        onClick={() => {
          setPerson("Tom");
        }}
        className="btn"
      >
        Tom
      </button>
      <button
        onClick={() => {
          setPerson("David");
        }}
        className="btn"
      >
        David
      </button>
    </>
  );
};

export default EffectExample;
