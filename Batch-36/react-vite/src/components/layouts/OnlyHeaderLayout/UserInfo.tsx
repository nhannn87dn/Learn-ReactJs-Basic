
import useAuth from '../../../hooks/useAuth';

const UserInfo = () => {

  const {user,isAuthenticated,logout} = useAuth()

  return (
    <div>
      UserInfo <strong>{user?.name}</strong>
      {isAuthenticated ? (<span onClick={logout}>Logout</span>)  : null}
      </div>
  )
}

export default UserInfo