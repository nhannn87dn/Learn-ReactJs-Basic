import "./App.css";
import ProductListAPI from "./components/ProductListAPI";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductListAPIReactQuery from "./components/ProductListAPIReactQuery";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        {/* <ProductListAPI /> */}
        <ProductListAPIReactQuery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
