import React from 'react'


const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

const Item = ({person} : {person: string})=>{
    return <li>{person}</li>
}

const ListKeys = () => {
  const listItems = people.map((person,index)=>{
    return <Item key={index} person={person} />
  });

  return <ul>{listItems}</ul>
}

export default ListKeys