import React from 'react'
import styles from './AttributesColor.module.css';

const attrs = [
  {id: 1, label: 'Đen'},
  {id: 2, label: 'Hồng'},
  {id: 3, label: 'Xanh'}
]

const AttrItem = ({onClick,label, active=false}: {onClick: ()=> void, label: string, active?: boolean})=>{
    const myClass = active ? `${styles.attr_item} ${styles.active}` : styles.attr_item;
    return (
        <span onClick={onClick} className={myClass}>{label}</span>  
    )
}

const AttributesColor = () => {

  const [currentIndex, setIndex] = React.useState(2);

  const handleClick = (id:number)=>{
    setIndex(id)
  }

  return (
    <div className={styles.attrs}>
        <span className='attr_name'>Màu sắc</span>
        {/* <AttrItem active={true} label='Đen' /> 
        <AttrItem label='Hồng' /> 
        <AttrItem label='Xanh' /> */}
        {
          attrs.map((attr)=> <AttrItem onClick={()=>handleClick(attr.id)} active={currentIndex === attr.id ? true: false} key={attr.id} id={attr.id} label={attr.label} />)
        }
    </div>
  )
}

export default AttributesColor 