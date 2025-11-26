import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ExampleReactQuery from "./components/ExampleReactQuery";

// Create a client
const queryClient = new QueryClient();

//component App
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* COMPONENTS NÀO SỬ DỤNG DỤNG REACT QUERY THÌ ĐẶT VÀO Ở GIỮA */}
      <ExampleReactQuery />
    </QueryClientProvider>
  );
}

export default App;
