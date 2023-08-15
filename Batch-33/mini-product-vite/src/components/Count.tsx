import React from 'react'
import useCount from '../hooks/useCount'
const Count = () => {
   
  const {count, actionUp, actionDown} = useCount();

   
    return (
      <div>
        <h1>Count</h1>
        <h1>{count}</h1>
        <button onClick={actionDown}>Down</button><button onClick={actionUp}>Up</button>
      </div>
    )
}

export default Count