import "./App.css";
import MyCV from "./components/MyCV";

function App() {
  console.log("App Render");
  return (
    <div className="container mx-auto">
      <MyCV />
      <button className="btn">Login</button>
      <button className="btn btn-primary">Primary</button>
      <button className="bg-white border border-slate-300 py-2 px-4 rounded text-slate-700">
        Default
      </button>
      <button className="bg-white border border-slate-300 py-2 px-4 rounded text-slate-700">
        Primary
      </button>
      <input placeholder="ussername" type="text" />
      <input placeholder="email" type="text" />
      <div className="bg-sky-500 pdy-2">Hellllldkslds dsd</div>
    </div>
  );
}

export default App;
