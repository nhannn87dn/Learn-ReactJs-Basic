const ExampleEventHanding = () => {
  const onHandleClickButton = () => {
    console.log("Ban da click vao toi");
  };
  const onHandleMouseEnter = () => {
    console.log("Re chuot len Button");
  };
  return (
    <div>
      <h1>ExampleEventHanding</h1>
      <button onClick={onHandleClickButton} onMouseEnter={onHandleMouseEnter}>
        Click me
      </button>
      <input
        onKeyDown={() => {
          console.log("Ban da nhan phim xuong");
        }}
        type="text"
        placeholder="Email"
      />
    </div>
  );
};

export default ExampleEventHanding;
