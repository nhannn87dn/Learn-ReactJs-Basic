import React from 'react'
import HeaderLogo from '../../HeaderLogo'
import HeaderNavigation from '../../HeaderNavigation'
import HeaderNavigationItem from '../../HeaderNavigationItem'
import ShoppingCart from '../../ShoppingCart';

import { navs } from '../../../data/navigations';

const Header = () => {
  return (
    <header>
      <div className="container">
          <div className="header-main d-flex">
              <HeaderLogo />
              <div className="header-right d-flex">
                <HeaderNavigation>
                  {navs.map(nav=> <HeaderNavigationItem key={nav.id} link={nav.link} label={nav.label} target={nav.target} />)}
                </HeaderNavigation>
               <ShoppingCart />
              </div>
          </div>
        
      </div>
      </header>
  )
}

export default Header