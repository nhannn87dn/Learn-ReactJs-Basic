import { useCount } from "../../hooks/useCount"

const ZustandCountActions = () => {

  //Truy cập lần lượt các giá trị của state strong Store
  const actionUp = useCount(state => state.actionUp);
  const actionDown = useCount(state => state.actionDown);

  return (
    <div>
        <hr />
        <h1>Zustand hàng xóm</h1>
        <p>Làm sao để đứng từ đây mà có thể làm thay đổi count ở Count Zustand</p>
        <button onClick={()=>{
          console.log("down")
          actionDown()
        }} type='button'>-</button>
        <button onClick={()=>{
          console.log("up");
          actionUp();
        }} type='button'>+</button>
        </div>
  )
}

export default ZustandCountActions