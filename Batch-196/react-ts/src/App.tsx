import "./App.css";
import ProductCRUDReactQuery from "./components/ProductCRUDReactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        <ProductCRUDReactQuery />
      </div>
    </QueryClientProvider>
  );
}

export default App;

/**
 * Mục tiêu hôm nay
 * Biến HTML --> React (JSX)
 *
 */
