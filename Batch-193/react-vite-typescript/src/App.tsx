import Header from "./components/Header";
import { userContext, UserProvider } from "./context/userContext";
import { useBrowserWidth } from "./hooks/usebrowserWidth";
function App() {
  const userInfo = {
    id: 1,
    name: "John",
    avatarUrl: "http://",
  };

  const browserWidth = useBrowserWidth();

  return (
    <UserProvider user={userInfo}>
      <h1 className={`${browserWidth === 768 ? "text-red-500" : ""} `}>
        Hello Heading 1
      </h1>
      <h2>{browserWidth}</h2>
      <div style={{ padding: "15px" }}>
        <Header />
      </div>
    </UserProvider>
  );
}
export default App;
