import CreateProductPostFetch from "./components/SimpleCURD/CreateProductPostFetch";
import ProductListFetch from "./components/SimpleCURD/ProductListFetch";

function App() {
  return (
    <div className="container mx-auto">
      <h1>Call API</h1>
      <CreateProductPostFetch />
      <ProductListFetch />
    </div>
  );
}

export default App;
