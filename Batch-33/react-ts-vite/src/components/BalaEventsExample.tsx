import React, { KeyboardEvent } from 'react';

const BalaEventsExample = () => {
 

    const handleKeyDown = (event:  KeyboardEvent<HTMLInputElement>) => {
      console.log('Bạn đã nhấn phím',event.key);
    };
  
    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
      console.log('Bạn đã rời tay khỏi phím',event.key);
    };
  
    return (
      <div>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          placeholder="Nhấn phím bất kỳ vào đây..."
        />
      </div>
    );
  };


export default BalaEventsExample