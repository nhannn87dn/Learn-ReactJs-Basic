import "./App.css";
import UserAddForm from "./components/UserAddForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      <UserAddForm />
      <UserList />
    </div>
  );
}

export default App;
