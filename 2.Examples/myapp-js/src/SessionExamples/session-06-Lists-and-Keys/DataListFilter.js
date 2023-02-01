import React from 'react'
import { people } from './data.js';
import { getImageUrl } from './utils.js';

const DataList = () => {
  //Lọc nhưng người có chuyên môn là 'chemist'
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );

    const listItems = chemists.map(person =>
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