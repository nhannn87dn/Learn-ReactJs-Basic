import React, {useState} from 'react'

interface Address {
    street: string;
    number: number;
    zip: string;
  }
  
  
  interface User {
    name: string;
    age: number;
    country: string;
    address: Address;
    admin: boolean;
  }

  //State is an Object 

const TsWithState = () => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = () =>
        setUser({
          name: "Mitchel",
          age: 23,
          country: "the Netherlands",
          address: {
            street: "Main st.",
            number: 88,
            zip: "21345",
          },
          admin: false,
        });
    
     return (
        <>
          <button onClick={fetchUser}>Fetch user on click</button>
          {user && <p>{`Welcome ${user.name}`}</p>}
        </>
     )
}

export default TsWithState