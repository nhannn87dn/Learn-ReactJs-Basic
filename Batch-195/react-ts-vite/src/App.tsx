import "./App.css";
import AttributeColor from "./components/AttributeColor";
import RenderListExaple from "./components/RenderListExaple";

//component App
function App() {
  // const isLoggedIn = true; //chưa login
  // if (isLoggedIn) {
  //   return <p>Xin chào</p>;
  // }
  // return <p>Đăng nhập</p>;
  //const weather = "rainys";
  //return <p>{weather == "sunny" ? "Học Offline" : "Học Online"}</p>;

  return (
    <>
      <AttributeColor />
      <RenderListExaple />
    </>
  );
}

export default App;
