import React from 'react';
import axios from 'axios';

const GetProfileAPIToken = () => {

    React.useEffect(()=>{

        const fetchData = async ()=>{
            console.log('GetProfileAPIToken');
            try {
                const result = await axios.get('https://api.escuelajs.co/api/v1/auth/profile',{
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY5NTAzOTQ0NywiZXhwIjoxNjk2NzY3NDQ3fQ.B3UIkKiuc88oJgDToXAAf38ylNGS37103q-2KwfOOfU"
                    }
                })

                console.log(result.data);

            } catch (error) {
                console.log(error);
            }
           
        }

        fetchData();

    },[])


  return (
    <div>index</div>
  )
}

export default GetProfileAPIToken