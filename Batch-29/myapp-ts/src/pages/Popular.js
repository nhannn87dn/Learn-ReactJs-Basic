import React from 'react'
import axios from 'axios';

const Popular = () => {
    const [populars,setPopulars] = React.useState([]);

    React.useEffect(()=>{
        const fetchData = async () => {
            try {
                const url = 'https://api.themoviedb.org/3/movie/popular?api_key=bbf4abc4e3112c3a8b28301c1ad039ee';
                const data = await axios.get(url)
                .then((response) => response.data);

                if(data){
                    setPopulars(data.results);
                }
        } catch (error) {
                console.log(error);
        }
        }

        fetchData();


    },[]);

    console.log(populars);
  return (
    <div>Popular</div>
  )
}

export default Popular