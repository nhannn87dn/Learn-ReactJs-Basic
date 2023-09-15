import React, {useContext} from 'react'
import {userContext} from '../../contexts/userContex'

const UserInfo = () => {
    const user = useContext(userContext);

    console.log(user);
  return (
    <span>Username: {user?.name}</span>
  )
}

export default UserInfo