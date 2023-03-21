import React, {useEffect} from 'react';

//Syntax useEffect(callback, [options]);
// 1.useEffect(callback)
// 2.useEffect(callback,[])
// 3.useEffect(callback, [dev])


export default function Greet({ name } : { name : string}) {
    const message = `Hello, ${name}!`; // Calculates output
    // Bad!
    document.title = `Greetings to ${name}`; // Side-effect!
    return <div>{message}</div>;       // Calculates output
  }