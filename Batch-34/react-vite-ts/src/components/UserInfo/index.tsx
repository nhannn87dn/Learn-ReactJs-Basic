import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const {user, logout} = useAuth();
 
  return (
    <span>
      {user ? (
        <span className="flex gap-x-2 items-center">
          <img className="rounded-full" width={30} height={30} src={user.avatar} alt={user.name} />
          <strong>{user.name}</strong>
          <span className="cursor-pointer border-s border-slate-900 pl-2" onClick={logout}>Đăng xuất</span>
        </span>
      )
        
      : (
        <Link to={'/login'}>Login</Link>
      )
    }
    </span>
  )
}

export default UserInfo