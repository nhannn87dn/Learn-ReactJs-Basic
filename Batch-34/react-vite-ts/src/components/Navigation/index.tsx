import styles from './Navigation.module.css'
import { navigation } from '../../data/navigation';
import { Link } from 'react-router-dom';

type ChildType = {
    id: number,
    name: string,
    link: string
}

type SingleNavType = {
    name: string,
    link: string,
    childs?: ChildType[] //object array type
}

const SingleNav = ({item} : {item: SingleNavType}) =>{
    return (
        <li>
            {/* <a href={item.link}>{item.name}</a> */}
            <Link to={item.link}>{item.name}</Link>
            {
                item.childs && item.childs.length > 0 ? (
                   <div>
                        {
                            item.childs.map((child)=> {
                                return <a key={child.id} href={child.link}>{child.name}</a>
                            })
                        }
                    </div>
                )
                :
                null
            }
      </li>
    )
}

const Navigation = () => {
  return (
    <nav className={styles.nav_main}>
    <ul >
      {
        navigation.map((item)=> <SingleNav key={item.id} item={item} />)
      }
      
    </ul>
  </nav>
  )
}

export default Navigation