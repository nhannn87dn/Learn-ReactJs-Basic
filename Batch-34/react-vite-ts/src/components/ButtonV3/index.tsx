import styles from './ButtonV3.module.css'

type ButtonPropType = {
    icon: React.ReactNode,
    label: string,
    className?:string
  }

function ButtonV3({icon, label='Default', className = ''}: ButtonPropType){
    console.log('ButtonAddToCart render');
    return (
      <>
      <button className={className !== '' ? `${styles.button} ${styles[className]}` : styles.button}>{icon} {label}</button>
      </>
    )
  }

  export default ButtonV3;