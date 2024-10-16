import React from 'react'

const SingleList = ({name, check=false}: {name: string, check?: boolean})=>{

    // if(check) {
    //     return (
    //         <li>{name} ✓</li>
    //     )
    // }else{
    //     return (
    //         <li>{name} </li>
    //     )
    // }


    return (
        <>
        {/* <li>{name} {check ? '✓' : null} </li> */}
        <li>{name} {check && '✓'} </li>
        {/* {
            check === true ? (
                <li>{name} ✓</li>
            )
            : (
                <li>{name}</li>
            )
        } */}
        </>
    )
}


const TaskList = () => {
  return (
    <ol>
       <SingleList check={true} name='Quét nhà' />
       <SingleList check={true} name='Lau nhà' />
       <SingleList name='Rửa bát' />
    </ol>
  )
}

export default TaskList