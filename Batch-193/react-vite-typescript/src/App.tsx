//import PostsList from "./components/PostsList";
import AddNewPostAxios from "./components/AddNewPostAxios";
import PostsListAxios from "./components/PostsListAxios";

function App() {
  return (
    <>
      <h1>Call API</h1>
      {/* <PostsList /> */}
      <AddNewPostAxios />
      <hr />
      <PostsListAxios />
    </>
  );
}
export default App;
