import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import DefaultLayout from "./layouts/DefaultLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
        path: là đường dẫn URL
        element: là component sẽ được hiển thị
         khi đường dẫn URL khớp với path
        */}
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>

        {/* 
        - Dòng này phải đặt cuối cùng
        - Nếu mà không khớp với bất kỳ route nào ở trên
         thì sẽ hiển thị component NotFoundPage
         */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
