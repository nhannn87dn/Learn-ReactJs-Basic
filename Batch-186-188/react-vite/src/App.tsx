import "./App.css";

function ButtonDemo({ label }: { label: string }) {
  return <button className="btn btn-primary">{label}</button>;
}

// function sum({a,b}: {a: number, b: number}){
//   console.log( a + b)
// }

// sum(2,4) = 6
// sum(4,4) = 8

function App() {
  return (
    <>
      <h1>Components</h1>
      <ButtonDemo label={"Them vao gio hang"} />
      <ButtonDemo label={"Goi Lai Tu Va"} />
    </>
  );
}

export default App;
