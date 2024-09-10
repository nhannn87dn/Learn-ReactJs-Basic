import "./App.css";
import ButtonAddToCart from "./components/ButtonAddToCart";
//import ButtonCallCenter from "./components/ButtonCallCenter";

function App() {
  return (
    <div className="container mx-auto">
      <button className="btn btn-primary">Default button</button>
      <h2>heading 2</h2>
      <h2>Heading 2 222</h2>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-[15px] py-1 rounded">
        Tailwind
      </button>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-[15px] py-1 rounded">
        By Now
      </button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="button">Style Component</h1>

      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <ButtonAddToCart />
      {/* <ButtonCallCenter /> */}
      <button
        style={{
          backgroundColor: "#f80",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
