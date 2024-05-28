import "./App.css";
import DefaultLayout from "./components/layouts/DefaultLayout";
import StartRating from "./components/StarRating";
import InteractionExample from "./components/UseRefExample/InteractionExample";
import { UserProvider } from "./contexts/userContext";
import { useBrowserWidth } from "./hooks/useBrowserWidth";

function App() {
  console.log("app render");
  const user = { id: 1, name: "Nhan", avatarUrl: "" };
  const useBrowser = useBrowserWidth();

  return (
    <div className="container mx-auto">
      <StartRating />
      <h1 className="text-4xl">{useBrowser}</h1>
      {useBrowser > 768 && <div>Only Desktop</div>}

      {useBrowser > 501 && useBrowser <= 768 && <div>Only Tablet</div>}

      {useBrowser <= 500 && <div>Only Mobile</div>}

      <UserProvider user={user}>
        <DefaultLayout />
      </UserProvider>
      {/* <InteractionExample /> */}
    </div>
  );
}

export default App;
