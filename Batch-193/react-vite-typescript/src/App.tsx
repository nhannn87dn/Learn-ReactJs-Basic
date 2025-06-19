import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsListReactQuery from "./components/ProductsListReactQuery";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Những component nào nằm giữa nó thì dùng được react-query</h1>
      <ProductsListReactQuery />
    </QueryClientProvider>
  );
}
export default App;
