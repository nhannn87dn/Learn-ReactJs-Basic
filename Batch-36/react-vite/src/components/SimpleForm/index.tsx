import { useState,ChangeEvent } from "react"
const SimpleForm = ()=>{
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log('Bạn đã nhấn nút Submit');

    console.log('name',name, email, isChecked);
  }

  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
  }
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
    setIsChecked(!isChecked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text"
          name='name'
          value={name}

          onChange={handleOnChangeName}

          onKeyUp={()=>{
            console.log('da nhan phim vao Input');
          }}
        />
      </label>
      <label>Enter your Email:
        <input 
          type="text"
          name='email'
          value={email}

          onChange={(e)=>{
            setEmail(e.target.value)
          }}

         
        />
      </label>

      <label htmlFor="topping">
      <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
      </label>
      <input className='btn btn-primary' type="submit" />
    </form>
  )
}

export default SimpleForm