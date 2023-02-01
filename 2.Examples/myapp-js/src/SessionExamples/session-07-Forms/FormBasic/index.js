import React, {useState} from 'react'

const FormBasic = () => {
    const [name, setName] = useState("");
    const [myCar, setMyCar] = useState("Volvo");



    const handleChangeCar = (event) => {
        setMyCar(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <select value={myCar} onChange={handleChangeCar}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
        </select>

        <input type="submit" />
      </form>
    )
}

export default FormBasic