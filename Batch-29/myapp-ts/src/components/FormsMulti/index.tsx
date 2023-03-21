import React from "react";


export default function FormsMulti(){
    let [inputs, setInputs] = React.useState({
      username: '',
      passwords: '',
      age: 0
    
    });
    
    console.log(inputs);
    
    const handleChange = (e : any) => {
      if(e.target.type === 'checkbox'){
        setInputs((values)=> ({...values, [e.target.name]: e.target.checked}));
        // [e.target.name] ==> lấy giá trị làm key
      } 
      else {
        setInputs((values)=> ({...values, [e.target.name]: e.target.value}));
      }
    }
    
    const handleSubmit = (e :React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(inputs);
    }
  
    return (
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your Password:
        <input 
          type="text" 
          name="passwords" 
          value={inputs.passwords || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
    
  }