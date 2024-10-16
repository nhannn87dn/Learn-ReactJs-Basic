import React, {useState} from 'react'

export const NullState = ()=>{
// 👇️ const name: string | null
const [name, setName] = useState<string | null>(null);

// 👉️ name is string or null here

if (name != null) {
  // 👉️ TypeScript knows that name is string here
  console.log(name.toUpperCase());
}

console.log(name?.toUpperCase());
}

export const NullObjectState = () => {
  // 👇️ with objects
  const [state, setState] = useState<{
    first: string | null;
    last: string | null;
  }>({first: null, last: null});

  // 👇️ with other types
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <h2>Name: {name}</h2>
      <button onClick={() => setName('James Doe')}>Set name</button>

      <h2>First: {state.first}</h2>
      <h2>Last: {state.last}</h2>

      <button onClick={() => setState({first: 'Bob', last: 'Ross'})}>
        Set state
      </button>
    </div>
  );
};


