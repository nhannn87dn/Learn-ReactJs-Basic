import { useEffect, useState } from "react";

function Greet({ name }: { name: string }) {
  console.log("Greet re-render");
  const message = `Hello, ${name}!`; // Calculates output
  const [time, setTime] = useState(0);
  //Cần dòng này thực thi sau khi component render xong

  //TH 1: Chỉ chạy 1 lần sau khi component mount
  //   useEffect(() => {
  //     document.title = `Greetings to ${name}`; // Side-effect!
  //     console.log("2");
  //   }, []);
  // Dùng khi nào :
  // - Chỉ cần chạy 1 lần sau khi component mount
  // - Không cần chạy lại khi component re-render

  //TH 2: Chạy lần đầu tiên khi component render và mỗi khi name thay đổi
  useEffect(() => {
    document.title = `Greetings to ${name}`; // Side-effect!
    console.log("2");
  }, [name]);
  // Dùng khi nào :
  // - Chỉ cần chạy lại khi name thay đổi

  //TH 3: Chạy mỗi khi component render
  useEffect(() => {
    console.log("Chạy mỗi khi component re-render");
  }); // ko có dependency array
  // Dùng khi nào :
  // - Cần chạy lại mỗi khi component re-render

  // TH 4: Unmount
  //Dùng khi ?
  // - Cần làm gì đó khi component unmount
  //   useEffect(() => {
  //     // Cleanup function
  //     return () => {
  //       console.log("Component unmounted");
  //     };
  //   });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Hàm dọn dẹp sẽ được return
    return () => {
      console.log("Dọn dẹp! Hủy bộ đếm thời gian.");
      clearInterval(timerId); // Hủy setInterval khi component unmount
    };
  }); // Mảng rỗng -> timer được tạo 1 lần và dọn dẹp 1 lần.

  return (
    <div>
      <h1>{time}</h1>
      {console.log("1")}
      {message}
    </div>
  ); // Calculates output
}
export default Greet;
