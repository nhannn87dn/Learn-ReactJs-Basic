type TTodo = {
  text: string;
  done: boolean; // Login true / false
};

// Cách 1
// const Item = ({ text, done }: TTodo) => {
//   if (done === true) {
//     return <li>{text} ✔</li>;
//   }
//   return <li>{text}</li>;
// };

//Cách 2: toán tử 3 ngôi
// const Item = ({ text, done }: TTodo) => {
//   return (
//     <li>
//       {text} {done === true ? "✔" : ""}
//     </li>
//   );
// };

//Cách 3:
const Item = ({ text, done }: TTodo) => {
  return (
    <li>
      {text} {done && "✔"}
    </li>
  );
};

const ConditionalRendering = () => {
  return (
    <div>
      <ul>
        <Item done={true} text="Giặt đồ" />
        <Item done={true} text="Nấu cơm" />
        <Item done={true} text="Học bài" />
      </ul>
    </div>
  );
};

export default ConditionalRendering;
