import React from 'react'

type PaginationType = {
    currentPage: number;
    totalPages: number;
    classActived: string
}

// Methods

const Pagination = ({currentPage, totalPages, setActivePage } : PaginationType) => {
  return (
    <div className='pagination'>
        <div
       // Previous page (<) inactive if current page is 1
       className={`pagination-arrow ${currentPage === 1 ? "inactive" : ""}`}
       onClick={() => currentPage !== 1 && setActivePage(page => page - 1)}
     >
       {"<"}
     </div>
        
    </div>
  )
}

export default Pagination