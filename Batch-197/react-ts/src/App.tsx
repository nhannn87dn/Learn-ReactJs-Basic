import "./App.css";
import Basic1 from "./components/homeworks/session03/Basic1";
//import Basic1 from "./components/homeworks/session03/Basic1";
import BlockUI1 from "./components/homeworks/session03/BlockUI1";
import Videos from "./components/Videos";

//cách 1: if đơn
// function App() {
//   const isShow = true;

//   if (!isShow) return null;

//   return (
//     <>
//       <BlockUI1 />
//     </>
//   );
// }

//Cách 2: toán tử 3 ngôi
// function App() {
//   const isShow = true;
//   return <>{isShow ? <BlockUI1 /> : null}</>;
// }

//Cách 3: sử dụng toán tử &&
function App() {
  const isShow = true;
  return (
    <>
      <Videos />
      {isShow && <BlockUI1 />}
      <Basic1 />
    </>
  );
}

export default App;
