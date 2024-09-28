import "./App.css";
//import ProductCURDAxios from "./components/ProductCURDAxios";
import ProductReactQuery from "./components/ProductReactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        <ProductReactQuery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
