import "./App.css";
import ReactHookFormBasic from "./components/ReactHookFormBasic";
import ReactHookFormValidation from "./components/ReactHookFormValidation";
import SubscriberForm from "./components/SubscriberForm";
// import FormExample from "./components/FormExample";

function App() {
  return (
    <main className="container">
      {/* <FormExample /> */}
      <ReactHookFormBasic />
      <hr />
      <ReactHookFormValidation />
      <hr />
      <SubscriberForm />
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
