import React from 'react'
import styles from "./Scientist.module.css"
import {people} from "./data";

type PersonType = {
    id: number;
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;

}

const ScientistPhoto = ({person}: {person: PersonType}) => {
    let photo = `https://i.imgur.com/${person.imageId}s.jpg`;
    return <img src={photo} alt={person.name} /> 
}

const Scientist = () => {
    //Sau khi lọc thì còn lại chemist
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );

    const listItems = chemists.map((person)=>{
            
        return (
            <div className={styles.person_item} key={`person_${person.id}`}>
               <ScientistPhoto person={person} />
               <div className={styles.person_info}>
                <h3>{person.name}</h3>
                <p>accomplishment: {person.accomplishment}</p>
                <p>profession: {person.profession}</p>
               </div>
            </div>
        )
    });

  return (
    <div className={styles.person_wrapper}>
        {listItems}
    </div>
  )
}

export default Scientist