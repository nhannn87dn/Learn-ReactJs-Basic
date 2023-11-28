import { navigations } from '../../data/navigation'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul className='flex gap-x-5'>
        {
           navigations.map((item)=>{
            return <li className='group relative' key={item.id}>
              <Link to={item.url}>
                  {item.name}
              </Link>
              {item.childs && item.childs.length > 0 ? (
                <div className='sub_child hidden group-hover:flex group-hover:flex-col text-slate-900 absolute bg-white py-3 px-2'>
                    {
                      item.childs.map((child)=>{
                        return <Link key={child.id} to={child.url}>{child.name}</Link>
                      })
                    }
                </div>
              )
              : null
            }
            </li>
           }) 
        }
      </ul>
    </nav>
  )
}

export default Navigation