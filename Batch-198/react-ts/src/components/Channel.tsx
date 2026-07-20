const Channel = (props) => {
  //Thì khi đó props nó s
  //nhận tất cả thuộc tính
  //được truyền vào

  console.log("<<=== 🚀 props ===>>", props);
  return <button>{props.n}</button>;
};

export default Channel;
