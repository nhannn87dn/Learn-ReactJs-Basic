import { useState } from "react"
const atts = [
  {id: 1, label: 'Đen'},
  {id: 2, label: 'Hồng'},
  {id: 3, label: 'Xanh'}
]

type AttType = {
  att: {
    id: number,
    label: string
  },
  isActive: boolean,
  onClick: (id: number)=>void
}

const SingleAttribute = ({att, isActive, onClick}: AttType)=>{
  return (
      <li onClick={()=>{
        onClick(att.id)
      }} 
      className={`${isActive ? 'border-orange-500 bg-orange-500 text-white': 'border-slate-500'} border  py-1 px-2 text-slate-600`}>
        {att.label}
        </li>
    )
}

const Attributes = ()=>{
  const [currentItem, setCurrentItem] = useState(1);

  return (
    <ul className="flex items-center gap-x-2 my-5">
      <li>Màu sắc: </li>
      {
        atts.map((att)=>{
          return <SingleAttribute 
            onClick={setCurrentItem}  
            isActive={att.id === currentItem}   
            key={att.id} att={att} 
          />
        })
      }
    </ul>
  )
}
export default Attributes