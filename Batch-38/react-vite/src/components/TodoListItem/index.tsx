import React from "react";

type TProps = {
  text: string;
  done?: boolean;
  icon?: React.ReactNode;
};
// const TodoListItem = ({ text, done = false }: TProps) => {
//   return (
//     <li>
//       {/* {text} {done === true ? "✔" : null} */}
//       {text} {done && "✔"}
//     </li>
//   );
// };

const TodoListItem = ({ text, done = false, icon }: TProps) => {
  if (done === true) {
    return (
      <li>
        {text} ✔ {icon}
      </li>
    );
  }
  return (
    <li>
      {text} {icon}
    </li>
  );
};

export default TodoListItem;
