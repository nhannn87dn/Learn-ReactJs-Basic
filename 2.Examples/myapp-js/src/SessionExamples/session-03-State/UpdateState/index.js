import React from 'react'

/**
 * Ví dụ minh họa
 * - Khi bạn nhập vào input nếu bạn không update lại
 * state text thì component ko re-render.
 * - 
 */
const UpdateState = () => {
  const [text,setText] = React.useState('');

  console.log('UpdateState: Re-render');

 
  const handleChangeInput = (e) => {
    setText(prev => e.target.value);
  }
  //onChange={handleChangeInput}
  return (
    <div>
        <input value={text} type="text" />
    </div>
  )
}

export default UpdateState