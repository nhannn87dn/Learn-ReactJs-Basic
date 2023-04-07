import React from 'react'
import styles from './Navigations.module.css';

const NavigationItem = ({link, label,target='_self'}: {link: string, label: string, target?: string}) => {
  return (
    <li><a target={target} href={link}>{label}</a></li>
  )
}


function Navigations() {
  return (
    <nav>
        <ul className={styles.nav}>
            <NavigationItem target='_blank' link='https://tinhte.vn' label='Tinh tế' />
            <NavigationItem link='https://24h.com.vn' label='24h.com.vn' />
            
        </ul>
    </nav>
  )
}

export default Navigations