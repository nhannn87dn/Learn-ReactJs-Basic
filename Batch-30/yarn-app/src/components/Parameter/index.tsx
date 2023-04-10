import React from 'react'

const Parameter = ({children}: {children?: React.ReactNode}) => {
  return (
    <section className="tableparameter" id="tableparameter">
        <h2 className="section_subtitle">Thông số sản phẩm</h2>
        <ul className="parameter">
            {children}
        </ul>
        <div className="viewparameterfull" id="showall_parameter">
        Xem chi tiết
        </div>
    </section>
  )
}

export default Parameter