/*
Cấu trúc của 1 component */
function greet() {
  return "Hello, world!";
}
//Phần 1: tên component Viết HOA kí tự đầu
function JsxExample() {
  //Phần 2: Logic xử lý nếu có
  let myName = "Nhan";

  //Object
  const info = {
    id: 1,
    name: "John",
    email: "john@example.com",
  };

  //Phần 3: return về JSX
  return (
    <div>
      {3 + 4}
      {console.log("Hey Jsx")}
      {greet()}
      <div className="head">JSX 1</div>
      <p>Áp dụng quy tắc camelCase cho thuộc tính css Inline</p>
      <div
        style={{
          color: "red",
          fontSize: "18px",
          backgroundColor: "yellow",
        }}
      >
        JSX 2
      </div>
      <div className="head">JSX 3</div>
      <div>{myName}</div>
      <ul>
        <li>{info.email}</li>
        <li>{info.name}</li>
        <li>{info.id}</li>
      </ul>
      {/* <img src="images/yt.png" alt="" /> */}
      <label htmlFor=""></label>
      <input type="text" />
      <hr />
      <br />
    </div>
  );
}
//Phần 4: Export ra để sử dụng
export default JsxExample;
