import styles from './Attributes.module.css';

function AttibutesItem({label} : {label: string}){
    return (
        <span className={styles.label}>
            {label}
        </span>
    )
}

function Attibutes(){
    return (
        <div>
            Màu sắc <AttibutesItem label="Đen" /> <AttibutesItem label="Hồng" /> <AttibutesItem label="Xanh" />
        </div>
    )
}

export default Attibutes