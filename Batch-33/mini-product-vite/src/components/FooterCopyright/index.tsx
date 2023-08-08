import {useContext} from 'react'

import {NameContext} from '../../context/NameContext'

import styles from './FooterCopyright.module.css'

const FooterCopyright = () => {

  const name = useContext(NameContext);

  console.log('FooterCopyright',name);

  return (
    <div className={styles.footer_copyright}>
        <div className="container">
            <p>© {name} eCommerce. 2022. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default FooterCopyright