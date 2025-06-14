import { useEffect, useState } from "react";

// function Greet({ name }: { name: string }) {
//   const message = `Hello, ${name}!`; // Calculates output

//   //1 --> useEffect('callback')
//   //2 --> useEffect('callback', [])
//   //3 --> useEffect('callback', [props])

//   useEffect(() => {
//     //code side effect ở trong này
//     console.log(2);
//     document.title = `Greetings to ${name}`; // Side-effect!
//   });

//   return (
//     <>
//       {console.log(1)}
//       <div>{message}</div>
//     </>
//   ); // Calculates output
// }

//TH 2: Có Dependency  là một mảng rỗng
// function Greet({ name }: { name: string }) {
//   const message = `Hello, ${name}!`; // Calculates output
//   const [title, setTitle] = useState("");
//   console.log(`Greet render, ${name}!`);
//   //Để như vậy thì không tốt
//   useEffect(() => {
//     console.log("useEffect");
//     document.title = name; // Side-effect!
//   }, []);
//   return (
//     <div>
//       <h1>{message}</h1>
//       <input
//         value={title}
//         name="title"
//         onChange={(e) => {
//           setTitle(e.target.value);
//         }}
//       />
//     </div>
//   ); // Calculates output
// }

//TH 3: Có Dependency là một mảng khác rỗng

function Greet({ name }: { name: string }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = useState();
  const [person, setPerson] = useState("Jonh");
  console.log(`Greet render, ${name}!`, person);

  const [count, setCount] = useState(0);

  //Giai đoạn mounting
  useEffect(() => {
    console.log("Greeting mounting 1");
    return () => {
      console.log("Greeting đã bị gở ra khỏi App", "Unmounting");
    };
  });

  useEffect(() => {
    console.log("Greeting mounting 2");
  }, []);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setCount((count) => count + 1);
  //       console.log("This will run every second!");
  //     }, 1000);
  //   }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Greeting mounting 3");
    document.title = `Chào mừng ${person} đến với  ${name} !`; // Side-effect!
  }, [person, name]); // <== Dependencies thêm vào state person

  return (
    <div className="greet">
      <h1>{count}</h1>
      <h1>{message}</h1>
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
      <input
        value={title}
        name="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </div>
  ); // Calculates output
}

export default Greet;
