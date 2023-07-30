import React from "react";
import styles from './NavigationsBar.module.css'

type NavItemType = { 
    link: string; 
    label: string; 
    className?: string;
    childs?: object[] //object array
 };


const NavItem = ({ link, label, className = "", childs }: NavItemType) => {
  return (
    <li className={className}>
      <a href={link}>{label}</a>
        {
          childs && childs.length > 0 ? (
            <div className={styles.nav_child}>
            <a href="">Tech</a>
            <a href="">Sport</a>
            <a href="">Fashion</a>
        </div>
          )
          :
          null
        }
        
    </li>
  );
};

export default NavItem;
