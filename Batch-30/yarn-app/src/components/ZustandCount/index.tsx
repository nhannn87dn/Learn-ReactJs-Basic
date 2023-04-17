import { useCount } from "../../hooks/useCount";

const ZustandCount = () => {
    //Truy cập lần lượt các giá trị của state strong Store
    const count = useCount(state => state.count);
    const actionUp = useCount(state => state.actionUp);
    const actionDown = useCount(state => state.actionDown);

  return (
    <div>
      <h1>Zustand {count}</h1>
      <button onClick={actionDown}>Down</button>
      <button onClick={actionUp}>Up</button>
    </div>
  )
}
export default ZustandCount;