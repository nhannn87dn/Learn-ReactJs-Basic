import styles from './Navigations.module.css';

function Navigationsv2({children}: {children?:  React.ReactNode}) {
    return (
      <nav>
          <ul className={styles.nav}>
            {children}
          </ul>
      </nav>
    )
  }

  export default Navigationsv2