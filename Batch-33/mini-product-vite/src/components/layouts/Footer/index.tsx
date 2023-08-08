import styles from './Footer.module.css'
import FooterCopyright from '../../FooterCopyright'

const Footer = () => {
  return (
    <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footer_middle}>
                <div className={styles.footer_middle_item}>ABOUT US</div>
                <div className={styles.footer_middle_item}>CONTACT INFO</div>
                <div className={styles.footer_middle_item}>CUSTOMER SERVICE</div>
                <div className={styles.footer_middle_item}>POPPULAR TAGS</div>
            </div>
        </div>
        <FooterCopyright  />
    </footer>
  )
}

export default Footer