import React from 'react'
import { people } from './data.js';
import { getImageUrl } from './ultils';


type PersonType = {
  person: {
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;
  }
}

function Item({person} : PersonType){
  return (
    <li>
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
  )
}

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


function ListComponent() {
  const listItems = people.map(person => <Item key={person.id} person={person} />);
  return <ul>{listItems}</ul>;
}

export default DataList