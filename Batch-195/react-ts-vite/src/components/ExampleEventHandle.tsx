interface ButtonPlayProps {
  channel: string;
  handleClickButton: () => void;
}

const ButtonPlay = ({ channel, handleClickButton }: ButtonPlayProps) => {
  //Nên di chuyển logic xử lý ra bên ngoài để
  //  tránh việc mỗi lần component re-render thì hàm này lại được tạo lại
  //     const handleClickButton = () => {
  //     console.log(`Đang phát kênh`);
  //   };
  return <button onClick={handleClickButton}>{channel}</button>;
};

const ExampleEventHandle = () => {
  const handleClickButton = () => {
    alert("Thêm vào giỏ hàng thành công !");
  };

  const handleMouseEnter = () => {
    console.log("Move in me");
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //chặn hành vi mặc định của form
    console.log("Đã submit form");
  };

  return (
    <div>
      <h2 className="my-5 font-bold">ExampleEventHandle</h2>
      <button onClick={handleClickButton} onMouseEnter={handleMouseEnter}>
        Add To Cart
      </button>
      <form onSubmit={handleSubmitForm}>
        <div>
          <input
            onKeyDown={() => {
              console.log("Đã nhấn");
            }}
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>

      <ButtonPlay
        handleClickButton={() => {
          console.log("Đang phát kênh VTV1 xxxxx");
        }}
        channel="VTV1"
      />
      <ButtonPlay
        handleClickButton={() => {
          console.log("Đang phát kênh VTV2 yyyy");
        }}
        channel="VTV2"
      />
      <ButtonPlay
        handleClickButton={() => {
          console.log("Đang phát kênh VTV3 zzzzz");
        }}
        channel="VTV3"
      />
    </div>
  );
};

export default ExampleEventHandle;
