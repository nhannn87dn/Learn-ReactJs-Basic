import { KeyboardEvent } from 'react';

export const EventsHandle = ({onClick}: {onClick: () => void}) => {
  
    const handleClickButton = () => {
        console.log("Add to Cart");
    };

    const handleMouseEnter = () => {
        console.log('MouseEnter')
      };
    
      const handleMouseLeave = () => {
        console.log('MouseLeave')
      };

      const handleKeyDown = (event:  KeyboardEvent<HTMLInputElement>) => {
        console.log('Bạn đã nhấn phím',event.key);
      };
    
      const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log('Bạn đã rời tay khỏi phím',event.key);
      };

      const handlePlay = (number: number) => {
        console.log('Bạn đã play bài ',number)
      };

  return (
    <div>
      <button
        onClick={onClick}
        className="btn btn-orange"
      >
        Events as Prop
      </button>
      {/* Sự kiện viết theo kiểu inline */}
      <button
        onClick={() => {
          console.log("Button Clicked");
        }}
        className="btn btn-orange"
      >
        Submit
      </button>

      <button className="btn btn-orange" onClick={()=> handlePlay(2)}>Play bài số 5</button>

      {/* Cách tách hàm xử lý sự kiện ra ngoài */}
      <button onClick={handleClickButton} className="btn btn-orange">
        Add to Cart
      </button>

      <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="btn btn-orange"
    >
      Di chuột vào đây
    </button>

    <input
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="Nhấn phím bất kỳ vào đây..."
      />
      <div></div>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          //Ngăn chặn form fresh lại trang
            e.preventDefault();
            //test alert
            alert('Submitting!');
          }}>
          <input name="username" placeholder='username' />
          <button className="btn btn-orange" type="submit">Send</button>
        </form>
    </div>
  );
};
