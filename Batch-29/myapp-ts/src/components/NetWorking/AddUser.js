import React from 'react'

const AddUser = () => {

    const [status,getStatus]  =React.useState(false);
    const [loading,setLoading] = React.useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const url = 'https://640809942f01352a8a890332.mockapi.io/api/v1/users';
        
        const payload = {
            "createdAt": "2023-03-22T18:48:30.916Z",
            "name": "Nhan2",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/931.jpg",
            "email": "Donnell_Harris@example.net",
            "mobile": "860-769-5894 x762",
            "country": "Bahrain"
        }
        
        const options = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(payload), // body payload type must match "Content-Type" header
        }

        const response = await fetch(url, options);

        if(response.ok){
            setLoading(false);
            getStatus(true)
        }

        const results = await response.json();

        console.log(results);

    }
  return (
    <div>
        {status && <h1>Thành công</h1>}
        {loading && <p>Loading....</p>}
       <button disabled={loading} onClick={handleSubmit}>AddUser</button>
    </div>
  )
}

export default AddUser