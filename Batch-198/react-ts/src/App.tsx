import "./App.css";
import Accessories from "./components/homeworks/session04/Accessories";
import ArticleList from "./components/homeworks/session04/ArticleList";
import MyCV from "./components/homeworks/session04/MyCV";

function App() {
  return (
    <main className="container">
      <Accessories />
      <hr />
      <ArticleList />
      <hr />
      <MyCV />
    </main>
  );
}

export default App;
