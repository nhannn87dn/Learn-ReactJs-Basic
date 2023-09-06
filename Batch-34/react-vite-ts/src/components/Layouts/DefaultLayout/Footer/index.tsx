import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
          <div className={styles.footer_wrapper}>
              <div className={styles.item}>1</div>
              <div className={styles.item}>2</div>
              <div className={styles.item}>3</div>
              <div className={styles.item}>4</div>
          </div>
          <div className={styles.footer_copyright}>
            <p>© Aptech eCommerce. 2022. All Rights Reserved</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer