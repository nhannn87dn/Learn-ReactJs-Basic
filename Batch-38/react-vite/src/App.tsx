import "./App.css";
import ButtonSocial from "./components/ButtonSocial";

/*
onclick ==> onClick
onmouseenter ==> onMouseEnter
onkeyup ==> onKeyUp
*/

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

  return (
    <div className="container mx-auto">
      <h2>Handle cho một component</h2>

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
        }}
      >
        <input placeholder="email" type="text" name="email" />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
