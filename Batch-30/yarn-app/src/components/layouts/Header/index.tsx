import React, {useState} from 'react'
import HeaderLogo from '../../HeaderLogo'
import HeaderNavigation from '../../HeaderNavigation'
import HeaderNavigationItem from '../../HeaderNavigationItem'
import ShoppingCart from '../../ShoppingCart';
import { userContext } from '../../../context/userContex';
import { navs } from '../../../data/navigations';

const Header = () => {

  const users = React.useContext(userContext);

  return (
    <header>
      <div className="container">
          <div className="header-main d-flex">
              <HeaderLogo />
              <div className="header-right d-flex">
                <HeaderNavigation>
                  {navs.map(nav=> <HeaderNavigationItem key={nav.id} childs={nav.childs} link={nav.link} label={nav.label} target={nav.target} />)}
                </HeaderNavigation>
                <span>{users.name}</span>
               <ShoppingCart />
              </div>
          </div>
        
      </div>
      </header>
  )
}

export default Header