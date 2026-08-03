import "./App.css";
import Exercise3 from "./components/homeworks/session05/Exercise3";
import RankStar from "./components/homeworks/session05/RankStar";
import SimpleGallery from "./components/homeworks/session05/SimpleGallery";
import TagsList from "./components/homeworks/session05/TagsList";

function App() {
  return (
    <main className="container">
     <TagsList />
     <hr />
     <Exercise3 />
      <hr />
     <SimpleGallery />
     <hr />
     <RankStar />
    </main>
  );
}

export default App;

/*
TASK 1;
Tạo một component HeartButton để mô phỏng lại
Nút thả tim như Zalo.
- Mặc định lúc đầu tim màu đen
- Click vào thì nó thành màu đỏ

=======
Task 2
- Tạo một components SuggestSearch gồm 2 phần
+ Input text và một thẻ div với nội dung "Tìm kiếm gần đây"
- Mặc định thẻ div chưa xuất hiện
- Khi click vào input thì thẻ div xuất hiện.
*/
