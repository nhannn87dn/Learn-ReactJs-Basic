import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { userContext } from "./context/userContext";

/**
 * Tất cả UI đều phải
 * đưa vào App component
 * để hiển thị ra trình duyệt
 */
function App() {
  const user = {
    id: 1,
    name: "Nguyen Van B",
  };
  return (
    <>
      <userContext.Provider value={user}>
        <Header />
        <Footer />
      </userContext.Provider>
    </>
  );
}

export default App;

/**
 * Mục tiêu hôm nay
 * Biến HTML --> React (JSX)
 *
 */
