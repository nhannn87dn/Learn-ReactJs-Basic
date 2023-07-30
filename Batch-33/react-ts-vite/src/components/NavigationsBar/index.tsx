import React from 'react'
import styles from './NavigationsBar.module.css'
import NavItem from './NavItem'


//object array
let navchilds = [
    {link: '', label: 'Tech'},
    {link: '', label: 'Sport'}
];


const NavigationsBar = () => {
    console.log('NavigationsBar render');
  return (
    <nav className={styles.header_nav}>
        <ul className="flex">
            <NavItem className={styles.actived} link='index.html' label='Home' />
           
            <NavItem childs={navchilds} className={styles.has_child} link='blog.html' label='Blog' />
            <NavItem link='category.html' label='Category' />
            <NavItem link='login.html' label='Login' />
            
        </ul>
        
    </nav>
  )
}

export default NavigationsBar