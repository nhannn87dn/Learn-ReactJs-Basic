import React, { useEffect } from "react";

const computeLetterCount = (word: string) => {
  let i = 0;
  while (i < 1000000000) i++;
  return word;
};

function Greet({ name }: { name: string }) {
  const message = `Hello, ${name}!`; // Calculates output
  const [title, setTitle] = React.useState("");
  const [count, setCount] = React.useState(0);
  //TH 1: Dùng useEffect không có dependencies
  // useEffect(() => {}); //
  // ==> Mỗi khi component render lại thì useEffect sẽ chạy
  // Khi nào thì dùng ?
  //   useEffect(() => {
  //     document.title = `Greetings to ${name}`; // Side-effect!
  //     console.log("2");
  //   });
  // TH 2: Dùng useEffect có dependencies là một mảng rỗng []
  // useEffect(() => {}, []); //
  // ==> Chỉ chạy 1 lần duy nhất sau khi component render lần đầu tiên thôi
  //   useEffect(() => {
  //     document.title = `Greetings to ${name} - ${title}`; // Side-effect!
  //     console.log("2");
  //   }, []); //dependencies là một mảng rỗng []

  // TH 3: Dùng useEffect có dependencies là một mảng không rỗng
  // useEffect(() => {}, [name, title]); //
  // ==> Chạy mỗi khi name hoặc title thay đổi
  useEffect(() => {
    document.title = `Greetings to ${name} - ${title}`; // Side-effect!
    console.log("2");
  }, [name, title]); // [props, state]
  /**
   * Muốn có callback chạy lại khi prop nào, hoặc state nào thay đổi
   * thì bạn lấy chúng liệt kê vào mảng dependencies
   */

  useEffect(() => {
    const time = setInterval(() => {
      setCount((count) => count + 1);
      console.log("This will run every second!");
    }, 1000);
    return () => {
      clearInterval(time);
      console.log("Unmount");
      //Unmount
    };
  }, []);

  return (
    <div className="i-am-greet">
      {count}
      <h1>Title: {title}</h1>
      {console.log("1")}
      {message}
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
