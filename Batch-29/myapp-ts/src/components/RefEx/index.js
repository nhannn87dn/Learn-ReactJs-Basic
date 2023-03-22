import React from 'react'

const RefEx = () => {

  const [inputValue, setInputValue] = React.useState("");
  const previousInputValue = React.useRef("");
  // Sử dụng useEffect
  // Sau khi component render xong, thì quay lại cập nhật giá trị current = giá trị vừa nhập vào
  React.useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
    
  const inputElement = React.useRef();

  const focusInput = () => {
     inputElement.play();
  };

  return (
    <div>
        <input type="text" ref={inputElement} value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
        <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default RefEx