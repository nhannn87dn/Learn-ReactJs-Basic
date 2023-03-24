import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function QueryPage() {
  let location = useLocation();
  let [params] = useSearchParams();

  let name = params.get('name');
  let id = params.get('id');

  console.log(location);
  console.log(name, id);

  return <div>
     <h1>Search Page</h1>
  </div>;
}

export default QueryPage;
