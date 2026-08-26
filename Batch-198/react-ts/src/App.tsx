import "./App.css";
import GetProfile from "./components/GetProfile";
import UserManager from "./components/UserManager";
//import TodoList from "./components/TodoList";
//import FetchProduct from "./components/FetchProduct";

function App() {
  return (
    <main className="container">
      <h1>Fetch API</h1>
      {/* <FetchProduct /> */}
      <UserManager />
      <GetProfile />
    </main>
  );
}

export default App;
