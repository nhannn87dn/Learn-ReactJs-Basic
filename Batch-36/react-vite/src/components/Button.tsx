//==> Cái này được gọi là 1 component
//Tên component đặt = tên file tập tin 
import './Button.css' 
//=> Css toàn cục
import styles from './Button.module.css'

type PropsType = {
    name: string;
    className?: string;
    icon?: React.ReactNode;
}

function Button({name, icon, className}: PropsType){
    return (
      <button className={className ? styles.btn + ' '+ className  : styles.btn}>
        {icon ? icon: null} {name}
        </button>
    )
}
//Giá trị mặc định
Button.defaultProps = {
    name: "Button Label",
}
//xuất nó ra
//Mục đích: để tái sử dụng
export default Button