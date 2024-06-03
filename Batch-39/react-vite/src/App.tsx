import "./App.css";
//import Categories from "./components/Categories";
import CategoriesAxios from "./components/CategoriesAxios";

function App() {
  console.log("app render");

  return (
    <div className="container mx-auto">
      {/* <h2>Categories Fetch</h2>
      <Categories /> */}
      <h2>CategoriesAxios</h2>
      <CategoriesAxios />
    </div>
  );
}

export default App;
