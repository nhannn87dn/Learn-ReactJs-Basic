import { Table } from "lucide-react";
import Level1 from "./components/Level1";
import { UserContext } from "./context/userContext";
import { useBrowserWidth } from "./hooks/useBrowserWidth";
import TabletOnly from "./components/TabletOnly";
import MobileOnly from "./components/MobileOnly";

function App() {
  const userInfo = {
    id: 1,
    name: "John",
    avatarUrl: "http://",
  };

  const browserWidth = useBrowserWidth();
  console.log("<<=== 🚀 browserWidth == 768 ===>>", browserWidth == 768);

  return (
    <UserContext.Provider value={userInfo}>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Browser Width: {browserWidth}px
        </h1>
        {browserWidth == 768 && <TabletOnly />}
        {browserWidth == 425 && <MobileOnly />}
        <Level1 />
      </div>
    </UserContext.Provider>
  );
}

export default App;
