import React, { useState } from "react";
import "./App.css";
import ButtonSocial from "./components/ButtonSocial";
import SimpleCount from "./components/SimpleCount";

/*
onclick ==> onClick
onmouseenter ==> onMouseEnter
onkeyup ==> onKeyUp
*/
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function App() {
  console.log("App Render");

  //handle không có tham số
  const handleClickLogin = () => {
    console.log("Clicked");
  };

  const handleMouseEnterLogin = () => {
    console.log("Ban da di chuyen len button Login");
  };

  //handle có sử dụng tham số
  const handlePlayTivi = (chanel: string) => {
    console.log(chanel);
  };

  const [email, setEmail] = React.useState("");
  const [isShow, setIsShow] = React.useState<boolean>(false);

  console.log("<<=== 🚀 email ===>>", email);

  return (
    <div className="container mx-auto">
      <button
        className="btn"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        Toogle SimpleCount
      </button>
      {isShow && <SimpleCount />}

      {/* <h2>Handle cho một component</h2>

      <ButtonSocial onClick={() => handlePlayTivi("Google")} label="Google" />

      <div className="block bottom-1 border-slate-900 my-10"></div>

      <button onClick={() => handlePlayTivi("VTV1")} className="btn">
        VTV1
      </button>
      <button onClick={() => handlePlayTivi("VTV2")} className="btn">
        VTV2
      </button>
      <button onClick={() => handlePlayTivi("VTV3")} className="btn">
        VTV3
      </button>

      <div className="block bottom-1 border-slate-900 my-10"></div>

      <button
        onClick={handleClickLogin}
        onMouseEnter={handleMouseEnterLogin}
        className="btn"
      >
        Login
      </button>

      <input
        onKeyDown={() => {
          console.log("Ban da nhap ban phim");
        }}
        onChange={(event) => {
          console.log(event.target.value);
        }}
        placeholder="username"
        type="text"
      />
      <form
        onSubmit={(e) => {
          //Ngăn form fresh app
          e.preventDefault();

          console.log("Ban da submit form");
          //validate form ở đây
          if (email.length === 0) {
            console.log("Bạn chưa nhập email");
          }

          if (!validateEmail(email)) {
            console.log("Email khong hợp lệ");
          }
        }}
      >
        <input
          onChange={(event) => {
            console.log(event.target.value);
            setEmail(event.target.value);
          }}
          value={email}
          placeholder="email"
          type="text"
          name="email"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form> */}
    </div>
  );
}

export default App;
