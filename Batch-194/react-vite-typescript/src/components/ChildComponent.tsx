import { memo } from "react";
const ChildComponent = ({ onClick }: { onClick: () => void }) => {
  console.log("ChildComponent re-rendered!"); // Xem nó có render lại không
  return <button onClick={onClick}>Click child</button>;
};

export default memo(ChildComponent);
// Sử dụng memo để tránh re-render không cần thiết
