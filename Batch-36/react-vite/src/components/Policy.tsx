
/**
 * Component ở dạng 
 * arrow function
 */
//props = {title, desc}

type PolicyType = {
    title: string;
    desc: string
}

const Policy = ({title, desc} : PolicyType)=>{

  console.log('Policy render');

  return (
    <p>
        <strong>{title}:</strong>
        {desc}
    </p>
  )
}

export default Policy