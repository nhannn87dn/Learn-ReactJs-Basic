import React from 'react'

interface NavType 
{
  id: number;
  link: string;
  label: string;
  target?: string;
}


const HeaderNavigationItem = ({link='', label='', target='_self', childs}: {link: string, label: string, target?: string, childs: Array<NavType | null> }) => {
  let [active, setActive] = React.useState(false);
  
  return (
    <li >
      <a onClick={(e)=>{
        e.preventDefault();
        setActive(prev=> !prev);

      }} target={target !== '' ? target: ''}>{label}</a>
      {childs && childs.length > 0 ? (
        <div className={active ? 'nav_child actived' : 'nav_child'}>
          {childs.map(child=> {
            return (
              <a href={child?.link} target={child?.target}>{child?.label}</a>
            )
          })}
        </div>
      ) : null}
    </li>
  )
}

export default HeaderNavigationItem