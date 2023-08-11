import React from 'react'
import axios from 'axios'

const GetProfile = () => {
    React.useEffect(()=>{

       axios.get(
        'https://api.escuelajs.co/api/v1/auth/profile',
        {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY5MTY3NDcxNiwiZXhwIjoxNjkzNDAyNzE2fQ.qhhZdsJ2nCIyKihbrWKaMbkHj8dhVhD2tCisakYVyjw"
            }
          }
        )
        .then((response) => {
                console.log('GetProfile',response);

                return response.data
            }
        )
        .catch(function (error) {
            console.log(error);
        });

    })

  return (
    <div>GetProfile</div>
  )
}

export default GetProfile