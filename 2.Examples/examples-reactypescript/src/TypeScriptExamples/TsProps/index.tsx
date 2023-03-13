import React from 'react'

type TypeProps = {
  message: string
}

const TsProps = ({message}: TypeProps) => {
  return (
    <div><h1>{message}</h1></div>
  )
}

export default TsProps