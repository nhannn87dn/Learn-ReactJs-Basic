import "./App.css";
import Attributes from "./components/homeworks/session03/Attributes";

/*
Hiển thị một danh sách Công việc cần làm như sau:

--------------------------
- Đi chợ  (Xong)
--------------------------
- Giặt đồ (Chưa)
--------------------------
- Học bài (Chưa)
--------------------------
- Hút bụi (Xong)
--------------------------
*/

const LinkFooter = () => {
  const links = [
    { id: 1, text: "help & FAQ" },
    { id: 2, text: "Order Tracking" },
    { id: 3, text: "Shipping" },
  ];
  return (
    <>
      <h3>Customer Service</h3>
      {links.map((link) => {
        return <p key={link.id}>{link.text}</p>;
      })}
    </>
  );
};

const TodoList = () => {
  const todos = [
    { id: 1, task: "Di cho", status: true },
    { id: 2, task: "Giat do", status: false },
    { id: 3, task: "Hoc bai", status: false },
    { id: 4, task: "Hut bui", status: true },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>Cong viec</th>
          <th>Trang thai</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.task}</td>
              <td>{todo.status ? "Xong" : "Chua"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

function App() {
  return (
    <>
      <TodoList />
      <LinkFooter />
      <Attributes />
    </>
  );
}

export default App;
