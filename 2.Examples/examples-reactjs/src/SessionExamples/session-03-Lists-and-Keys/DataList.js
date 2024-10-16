import React from 'react'
import { people } from './data.js';
import { getImageUrl } from './utils.js';

const DataList = () => {
    const listItems = people.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
          </p>
        </li>
      );
      return <ul>{listItems}</ul>;
}

export default DataList