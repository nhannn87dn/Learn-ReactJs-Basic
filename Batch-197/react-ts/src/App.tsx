import "./App.css";
import StateExample from "./components/StateExample";
// import Exercise7Homeworks4 from "./components/homeworks/session04/Exercise7Homeworks4";

type TButton = {
  name: string;
  onHandleClick: () => void; // hàm ko return
};

const Button = ({ name, onHandleClick }: TButton) => {
  return <button onClick={onHandleClick}>{name}</button>;
};

const SayHello = ({
  name,
  onHandleClick,
}: {
  name: string;
  onHandleClick: () => void;
}) => {
  return <div onClick={onHandleClick}>{name}</div>;
};

function App() {
  //handle có tham số
  const onHandleClick = (channel: string) => {
    console.log("Watching " + channel);
  };

  //Đây là một handle ko có tham số
  const onHandleKeyDown = () => {
    console.log("Ban da nhan phim");
  };

  return (
    <>
      <StateExample />
      <hr />
      <SayHello
        name="Tuấn"
        onHandleClick={() => {
          console.log("Chào tuấn");
        }}
      />
      <SayHello
        name="minh"
        onHandleClick={() => {
          console.log("Chào Minh");
        }}
      />
      <hr />

      <Button
        name="Login"
        onHandleClick={() => {
          console.log("Bạn đã login");
        }}
      />
      <Button
        name="Logout"
        onHandleClick={() => {
          console.log("Bạn đã Logout");
        }}
      />
      <hr />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <Cách dùng 1 hàm có tham số /> */}
      <button onClick={() => onHandleClick("VTV1")}>VTV1</button>
      <button onClick={() => onHandleClick("VTV2")}>VTV2</button>
      <button onClick={() => onHandleClick("VTV3")}>VTV3</button>
      <form>
        {/* Cách dùng 1 handle không có tham số */}
        <input onKeyDown={onHandleKeyDown} type="text" name="email" />
      </form>
    </>
  );
}

export default App;
