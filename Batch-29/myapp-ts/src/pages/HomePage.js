import React from 'react'
import PageHeader from '../layouts/PageHeader'
import PageFooter from '../layouts/PageFooter'

const HomePage = ({user}) => {
  return (
    <div>
        <PageHeader user={user} />
       <h1>HomePage</h1>
       <PageFooter />
        </div>
  )
}

export default HomePage