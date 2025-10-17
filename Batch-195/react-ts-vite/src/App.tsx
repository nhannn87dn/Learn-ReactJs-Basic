import "./App.css";
import OurServices from "./components/OurServices";
import Profile from "./components/Profile";
import SimpleButton from "./components/SimpleButton";
import appleWatch from "../public/images/apple-watch-series-11.jpg";

//Day la ham
function sum(a: number, b: number) {
  return a + b;
}

//component App
function App() {
  const total = sum(2, 5);
  console.log(total);
  const subject = "ReactJs";

  const info = {
    id: 1,
    name: "John",
    email: "john@example.com",
  };

  return (
    <>
      <ul>
        <li>Name: {info.name}</li>
        <li>Email: {info.email}</li>
      </ul>
      <p>
        <img width={100} height={100} src={appleWatch} alt="" />
      </p>
      <p>
        <img
          width={200}
          height={200}
          src="images/apple-watch-series-11.jpg"
          alt=""
        />
      </p>
      <img
        width={200}
        height={200}
        src="https://cdn.tgdd.vn/Products/Images/42/342676/iphone-17-pro-cam-thumb-600x600.jpg"
        alt=""
      />
      <h1 className="heading">Hello {subject}</h1>
      <h2 className="font_montserrat">
        {total} - {total > 0 ? "So duong" : "so sam"}
      </h2>
      <SimpleButton />
      <SimpleButton />
      <SimpleButton />
      {/* BEGIN UI PROFILE HERE + CTRL+/ */}
      <div>
        <Profile />
        <Profile />
        <Profile />
      </div>
      <OurServices />
    </>
  );
}

export default App;
