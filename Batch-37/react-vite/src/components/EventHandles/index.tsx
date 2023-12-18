const EventHandles = () => {
  const handleClickButton = () => {
    //Phan hoi lai su kien click
    console.log("Ban da click vao button");
    //Dua het cac logic ban muon xu li khi click buton
  };

  const handleMouseEnter = () => {
    console.log("MouseEnter");
  };

  const handleMouseLeave = () => {
    console.log("MouseLeave");
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    //Ngăn chặn form fresh lại trang
    event.preventDefault();
    //test alert
    alert("Submitting!");
  };

  //Handle có tham số
  const handlePlay = (number: number) => {
    console.log("Play VTV", number);
  };

  const handleButton = (action: string) => {
    console.log(action);
  };

  return (
    <div>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickButton}
        className="btn btn_primary"
      >
        Buy Now
      </button>

      <button className="btn " onClick={() => handlePlay(2)}>
        Play VTV 2
      </button>
      <button className="btn " onClick={() => handlePlay(3)}>
        Play VTV 3
      </button>

      <form onSubmit={handleSubmitForm}>
        <input placeholder="Username" name="username" />
        <input placeholder="Password" name="password" />
        <button className="btn btn_primary" type="submit">
          Login
        </button>
      </form>
      <hr />
      <CustomButton onHandleClick={() => handleButton("Next")} label="Next" />
      <CustomButton onHandleClick={() => handleButton("Play")} label="Play" />
      <CustomButton onHandleClick={() => handleButton("Prev")} label="Prev" />
    </div>
  );
};

const CustomButton = ({
  label,
  onHandleClick,
}: {
  label: string;
  onHandleClick: () => void;
}) => {
  return (
    <button onClick={onHandleClick} className="btn">
      {label}
    </button>
  );
};

export default EventHandles;
