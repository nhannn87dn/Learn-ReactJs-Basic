import { navigations } from '../../data/navigation'

const Navigation = () => {
  return (
    <div className='bg-indigo-500 text-white flex gap-x-5'>
        {
           navigations.map((item)=>{
            return <a key={item.id} href={item.url}>
                {item.name}
            </a>
           }) 
        }
    </div>
  )
}

export default Navigation