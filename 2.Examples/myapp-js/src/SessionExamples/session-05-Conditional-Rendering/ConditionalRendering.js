import React from 'react'


function ItemSingle({name}){
    return <li className="item">{name} </li>;
}
/**
 * Làm sao để check công việc hoàn thành
 * ✔
 * Các cách code khác nhau để hiển thị công việc hoàn thành
 */
function ConditionalRendering() {
  return (
    <div>
        <h1>Check List</h1>
        <ul>
            <ItemSingle name="Quét nhà" />
            <ItemSingle name="Hút bụi" />
            <ItemSingle name="Giặt quần áo" />
            <ItemSingle name="Làm bài tập" />
        </ul>

    </div>
  )
}

export default ConditionalRendering