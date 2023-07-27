import './Button.css'
import React from 'react'

type ButtonType = {
    label: string,
    type?: string,
    icon?: React.ReactNode //Style của kiểu component
}
//B1 định nghĩa
//default prop cách 2
function Button({label= 'Button', type, icon=''} : ButtonType){

    let class_button = 'button';
    if(type && type === 'dark'){
        class_button = 'button button-dark';
    }else if(type &&type === 'outline'){
        class_button = 'button button-outline';
    }


    return (
        <button className={class_button}>{icon}  {label}</button>
    )
}


//Giá trị mặc định của props
//Cách 1
// Button.defaultProps = {
//     type : '',
//     label: 'Button',
//     icon: ''
// }

//Bước 2: Export

export default Button