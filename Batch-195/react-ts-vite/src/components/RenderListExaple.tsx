import React from "react";

const RenderListExaple = () => {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario Jose Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  return (
    <div>
      <h2>RenderListExaple</h2>
      <ul>
        {people.map((item, index) => {
          return (
            <li key={index}>
              {item} - {index}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderListExaple;
