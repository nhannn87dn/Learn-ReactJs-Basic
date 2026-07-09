import "./App.css";
//import CategoriesAxios from "./components/CategoriesAxios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoriesAxiosReactQuery from "./components/CategoriesAxiosReactQuery";
import { Toaster } from "@/components/ui/sonner";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="container mx-auto">
        {/* <CategoriesAxios /> */}
        <CategoriesAxiosReactQuery />
        <Toaster position="top-center" />
      </main>
    </QueryClientProvider>
  );
}

export default App;
