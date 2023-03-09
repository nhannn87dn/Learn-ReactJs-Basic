import React, { ReactNode } from 'react';
import styles from "./ButtonSocial.module.css";

type ButtonType = {
    brand: string;
    icon: ReactNode;
}


  
function ButtonSocial({brand, icon} : ButtonType){
    return (
      <div className={styles.social_button}>
          <span>
          {icon}
          </span>
          
          <span>Continute width {brand}</span>
      </div>
    );
  }

export default ButtonSocial;