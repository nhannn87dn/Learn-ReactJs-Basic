import React from 'react'

import {useParams} from 'react-router-dom';

const ParameterPage = () => {
    let params = useParams();
    console.log(params);
  return (
    <div>
       <h1>ParameterPage</h1>
        </div>
  )
}

export default ParameterPage