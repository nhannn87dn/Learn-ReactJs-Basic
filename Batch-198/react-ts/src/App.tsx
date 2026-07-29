import "./App.css";
import EventHanding from "./components/EventHanding";

const Button =({name, onClick}: {name: string, onClick: ()=>void})=>{
  return <button onClick={onClick}>{name}</button>
}
function App() {
  return (
    <main className="container">
      <EventHanding />
      <Button onClick={()=>{
        console.log('Da login ');
      }} name="Login" />
      <Button onClick={()=>{
        console.log('Da logout ');
      }}name="Logout" />
    </main>
  );
}

export default App;


/* 
TASK 1
Tạo một component EventHandingExample 
- Với giao diện là một element button Thêm vào giỏ hàng và Gọi lại tư vấn
- Mong muốn khi click vào button Thêm vào giỏ hàng --> log ra: đã thêm thành công
 Nếu click vào button Gọi lại tư vấn --> log ra:  NV sẽ gọi lại sớm

 TASK 2:
 - Tạo một component Button với props hợp lý
 - Dùng component Button đó, hiển thị ra thành 2 nút: Login, Logout
 - Bắt sự kiện onClick cho 2 button:
 + Khi Click vào Login --> thì log ra:  Đã Login
+ Khi Click vào Logout --> thì log ra:  Đã Logout
*/