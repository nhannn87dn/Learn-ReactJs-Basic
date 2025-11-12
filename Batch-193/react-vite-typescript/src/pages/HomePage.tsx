import ExampleUseCallBack from "../components/ExampleUseCallBack";
import ExampleUseMemo from "../components/ExampleUseMemo";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <h1>Home page</h1>
      {/* <ExampleUseCallBack /> */}
      <ExampleUseMemo />
    </div>
  );
};

export default HomePage;
