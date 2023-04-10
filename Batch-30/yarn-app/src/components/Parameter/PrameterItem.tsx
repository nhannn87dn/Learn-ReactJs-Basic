import React from 'react'

const PrameterItem = ({label, value}: {label: string, value:string}) => {
  return (
    <li className='pro'>
        <span>{label}</span>
        <span>{value}</span>
    </li>
  )
}

export default PrameterItem