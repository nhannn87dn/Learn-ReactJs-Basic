import React, {useEffect} from 'react';

function Greeting({ name }) {

  const [show, setShow] = React.useState(false);

    const message = `Hello, ${name}!`; // Calculates output
    const [title, setTitle] = React.useState('');
    const [person, setPerson] = React.useState('Jonh');
    console.log('1');
   
    useEffect(()=>{
      document.title = `Chào mừng ${person} đến với  ${name} !`;
      console.log('useEffect 2');
    },[person]);


    useEffect(() => {
      const handleGoTop = ()=> {
          console.log(window.scrollY);
  
          if(window.scrollY >= 200){
              console.log('set state');
              setShow(true)
          }else{
              setShow(false);
          }
  
      }
      window.addEventListener('scroll', handleGoTop);
  
     // cleanup this component
      return () => {
        window.removeEventListener('scroll', handleGoTop);
        console.log('Dondep scroll')
      };
    }, []);

    return <div>
      {message}
      {title}
      <div style={{height: 1000}}>
        dsds
      </div>
      {show && <button 
        style={{ 
            position: 'fixed',
            right: 20,
            bottom: 20,
        }}
      >Go To</button>}
      <div>
      <button onClick={()=> {
          setPerson('Jonh')
        }}>Jonh</button>
      <button onClick={()=> {
          setPerson('Alice')
        }}>Alice</button>
      <button onClick={()=> {
          setPerson('Sarah')
        }}>Sarah</button>
    </div>
      <input value={title} name="title" onChange={(e)=> {
      setTitle(e.target.value);
    }} />
      {console.log('3')}
      </div>;       // Calculates output
  }

export default Greeting