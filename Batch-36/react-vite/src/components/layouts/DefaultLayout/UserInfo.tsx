//Bước 3
import {useContext} from 'react'
import { userContext } from "../../../context/userContext"

import useAuth from '../../../hooks/useAuth';

const UserInfo = () => {

  const {user} = useAuth()

  return (
    <div>UserInfo <strong>{user?.name}</strong></div>
  )
}

export default UserInfo