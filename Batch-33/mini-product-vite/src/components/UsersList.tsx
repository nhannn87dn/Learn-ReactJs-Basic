import React, {useEffect} from 'react'
import axios from 'axios'

interface UserType {
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
    email: string;
    company: object;
    address: object;
}

const UsersList = () => {

    const [users, setUsers] = React.useState<UserType[]>([]);
    const [loading, setLoading] = React.useState(false)

    useEffect(()=>{

        console.log('run Effect');
        //Gắn cờ đánh dấu data chưa được gọi
        let isFetched  = false;
        setLoading(true);

        const fetchData = async () => {
            try {
                console.log('run fetchData');
                const data = await axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.data);

                console.log(data);

                if (isFetched) {
                    console.log('is fetch');
                    setLoading(false);
                    setUsers(data);
                }
            }
           
            catch (error) {
                console.log('Error fetching data:', error);
           }
        }

        //Nếu chưa thì gọi API lấy data
        if (!isFetched) {
          fetchData();
          //Gọi xong thì đổi cờ là đã gọi
          isFetched = true;
        }

      return () => {
        isFetched = true;
      };
      
    },[]);
  

  return (
    <div>
        <h1>UsersList</h1>
        {loading && <div>Loading......</div>}
        <ul>
            {
                users.map(user =>{
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
        </div>
  )
}

export default UsersList