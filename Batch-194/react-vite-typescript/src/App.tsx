//import CreateProductPostFetch from "./components/SimpleCURD/CreateProductPostFetch";
//import ProductListAxios from "./components/SimpleCURD/ProductListAxios";
//import ProductListFetch from "./components/SimpleCURD/ProductListFetch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductListReactQuery from "./components/SimpleCURD/ProductListReactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProfileWithToken from "./components/SimpleCURD/ProfileWithToken";
import CreateProductReactQuery from "./components/SimpleCURD/CreateProductReactQuery";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        <h1>Call API</h1>
        {/* <CreateProductPostFetch />
          <ProductListFetch /> */}
        <CreateProductReactQuery />
        <ProductListReactQuery />
        <ProfileWithToken />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
