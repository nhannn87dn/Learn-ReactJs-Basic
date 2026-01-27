const SimpleLikeConditional = () => {
  const isClicked = true;
  return (
    <button
      style={{
        border: "none",
        backgroundColor: "#212121",
        padding: "5px 10px",
        color: isClicked ? "#0969da" : "#999",
      }}
    >
      Thich
    </button>
  );
};

export default SimpleLikeConditional;
