import "./App.css";
import UserProfileToken from "./components/UserProfileToken";
import UsersCRUD from "./components/UsersCRUD";

function App() {
  return (
    <div className="container mx-auto">
      <h2>user Profile</h2>
      <UserProfileToken />
      <h1>Simple CRUD</h1>
      <UsersCRUD />
    </div>
  );
}

export default App;
