import React, {useContext} from 'react';
import { UserContext } from '../UserContext';


const UserInfo = () => {
  const user = useContext(UserContext);
  return (
    <div>
        UserInfo - <strong>{user?.name} - {user?.email}</strong>

    </div>
  )
}

export default UserInfo