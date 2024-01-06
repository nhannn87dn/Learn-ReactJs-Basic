type TProps = {
  text: string;
  done?: boolean;
};
// const TodoListItem = ({ text, done = false }: TProps) => {
//   return (
//     <li>
//       {/* {text} {done === true ? "✔" : null} */}
//       {text} {done && "✔"}
//     </li>
//   );
// };

const TodoListItem = ({ text, done = false }: TProps) => {
  if (done === true) {
    return <li>{text} ✔</li>;
  }
  return <li>{text}</li>;
};

export default TodoListItem;
