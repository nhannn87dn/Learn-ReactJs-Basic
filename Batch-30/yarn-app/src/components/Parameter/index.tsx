import React from 'react';

import { userContext } from '../../context/userContex';

const Parameter = ({children}: {children?: React.ReactNode}) => {
  let [viewmore, setViewmore] = React.useState<boolean>(false);

  let users = React.useContext(userContext);

  let tabletClass = viewmore ? 'tableparameter showall_parameter' : 'tableparameter';
 
  return (
    <section className={tabletClass} id="tableparameter">
        <h2 className="section_subtitle">Thông số sản phẩm</h2>
        <ul className="parameter">
            {children}
        </ul>
        <div className="viewparameterfull" onClick={()=>{
          setViewmore(!viewmore);
        }}>
        Xem chi tiết
        </div>
        {viewmore ? (
        <div className='modal_parameter'>
          Modal Parameter
          <button onClick={()=>{
          setViewmore(false);
        }}>Close</button>
        </div>
        )
        : null
}
{users.name}
    </section>
  )
}

export default Parameter