import React from 'react'
import styles from './AttribuesColor.module.css'

const AttrItem = ({label, active=false}: {label: string, active?: boolean})=>{
    const myClass = active ? `${styles.attr_item} ${styles.active}` : styles.attr_item;
    return (
        <span className={myClass}>{label}</span>  
    )
}

const AttribuesColor = () => {
  return (
    <div className={styles.attrs}>
        <span className='attr_name'>Màu sắc</span>
        <AttrItem active={true} label='Đen' /> 
        <AttrItem label='Hồng' /> 
        <AttrItem label='Xanh' />
    </div>
  )
}

export default AttribuesColor 