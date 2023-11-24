//Bước 3
import {useContext} from 'react'
import { userContext } from "../../../context/userContext"

const UserInfo = () => {

  const user = useContext(userContext);

  return (
    <div>UserInfo <strong>{user?.name}</strong></div>
  )
}

export default UserInfo