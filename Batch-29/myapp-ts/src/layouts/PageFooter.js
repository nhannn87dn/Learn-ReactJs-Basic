import React, {useContext} from 'react';
import { UserContext } from '../UserContext';


const PageFooter = () => {
  const user = useContext(UserContext);
  return (
    <div>PageFooter <strong>{user?.name} - {user?.email}</strong></div>
  )
}

export default PageFooter