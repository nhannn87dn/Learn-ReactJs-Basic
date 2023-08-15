import React from 'react'
import useCount from '../hooks/useCount'
import useProducts from '../hooks/useProducts';


const CountHangXom = () => {
  //TRuy cập đến kho chứa state
  const {actionUp, actionDown} = useCount();
  const {actionFilter} = useProducts();
  return (
    <div>
      CountHangXom
      <button onClick={actionFilter}>Filter</button>
      <button onClick={actionDown}>Down</button><button onClick={actionUp}>Up</button>
    </div>
  )
}

export default CountHangXom