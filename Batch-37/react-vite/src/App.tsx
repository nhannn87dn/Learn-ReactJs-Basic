import "./App.css";
import CategoriesPage from "./pages/CategoriesPage";
import ProductPage from "./pages/ProductPage";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

/**
 * App --> ko được gọi là hàm trong React
 * ==> gọi là Function Component
 */
function App() {
  console.log("App render");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        {/* <ProductPage /> */}
        <CategoriesPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
