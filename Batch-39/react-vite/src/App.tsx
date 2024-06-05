import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import ProductsReactQuery from "./components/ProductsReactQuery";
//import Categories from "./components/Categories";
//import CategoriesAxios from "./components/CategoriesAxios";

const queryClient = new QueryClient();

function App() {
  console.log("app render");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        {/* <h2>Categories Fetch</h2>
        <Categories /> */}
        {/* <h2>CategoriesAxios</h2>
        <CategoriesAxios /> */}
        <ProductsReactQuery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
