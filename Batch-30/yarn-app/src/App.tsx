import ProductPage from "./pages/ProductPage";
import React from 'react';
import "./styles/global.css";

function Count() {
  console.log('Count render')
  //destructuring
  let [index, setIndex] = React.useState<number>(0);

  function handleClick() {
    setIndex(n => n + 1);
    setIndex(n => n + 1);
    setIndex(n => n + 1);
  }
return (
    <>
      <button onClick={handleClick}>
        Increment +3
      </button>
      <h3>  
        {index}
      </h3>
     
    </>
  );
}

function ButtonLike(){
  let [liked, setLiked] = React.useState(false);
  console.log('ButtonLike render')
  return (
    <>
    <button onClick={()=>{
      setLiked(!liked);
    }}>{liked ? 'Đã thích' : 'Chưa Thích'}</button>
    </>
  )

}

function App() {

  console.log("App rendered");

  return (
    <div>
        {/* <ProductPage /> */}
        <Count />
        <ButtonLike />
    </div>
  );
}

export default App;
