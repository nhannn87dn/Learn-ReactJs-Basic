import React from 'react'

import {people} from '../../data/list'

console.log(people);

const SingleItem = ({title}: {title: string})=>{
    return (
        <li>{title}</li>
    )
}


const RenderList = () => {

  return (
    <div>
        <ul>
            {
            people.map((item, index)=> {
                return <SingleItem key={`RenderList_${index}`} title={`${item} ${index}`} />
            })
            }
            
            
        </ul>
    </div>
  )
}

export default RenderList