import "./App.css";
import Header from "./components/Header";

const info = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

function App() {
  return (
    <>
      {5 + 5}
      <Header />
      <p
        className="ten-class"
        style={{
          backgroundColor: "#fff",
          fontSize: "2rem",
        }}
      >
        Para
      </p>
      {info.email}
      <img src="" alt="" />
      <input type="text" />
      {/* đây là comment CTRL + / */}
    </>
  );
}

export default App;
