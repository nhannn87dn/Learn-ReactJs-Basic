import styles from './ButtonV2.module.css'

function  ButtonV2({icon, name, className}: {name: string, className?: string, icon: React.ReactNode}){
    
    console.log('ButtonV2 render');

    const btn_class = className ? `${styles.btn} ${styles.btn_dark}` : styles.btn;
    
    return (
        <button className={btn_class}>{icon} {name}</button>
    )
}

export default ButtonV2