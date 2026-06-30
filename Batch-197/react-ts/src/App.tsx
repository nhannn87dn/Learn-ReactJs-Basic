import "./App.css";
import Attributes from "./components/Attributes";
import RankStars from "./components/RankStars";
import SimpleGallery from "./components/SimpleGallery";

function App() {
  return (
    <main className="container mx-auto">
      <Attributes />
      <RankStars />
      <SimpleGallery />
    </main>
  );
}

export default App;
