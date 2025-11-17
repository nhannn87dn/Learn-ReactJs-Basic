import ExampleAxiosPost from "./components/ExampleAxiosPost";
import ExampleFetchAPIV1 from "./components/ExampleFetchAPIV1";
import ExampleFetchAPIV2 from "./components/ExampleFetchAPIV2";

//component App
function App() {
  return (
    <div className="container">
      {/* <ExampleFetchAPIV1 /> */}
      <ExampleAxiosPost />
      <ExampleFetchAPIV2 />
    </div>
  );
}

export default App;
