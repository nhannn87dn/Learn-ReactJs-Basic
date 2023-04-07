
//import { FaShoppingBag,FaHeart } from "react-icons/fa";
import './App.css';
import Attibutes from './components/Attibutes';
import ConditionalRendering from './components/ConditionalRendering';
import ListKeys from './components/ListKeys';
import Navigations from './components/Navigations';
import Navigationsv2 from './components/Navigationsv2';
import NavigationItem from './components/Navigationsv2/NavigationItem';

function Button({onClick}: {onClick: ()=> void})  {
  return (
    <button onClick={onClick}>Button</button>
  )
}

function App() {

  const handleClickButton = ()=>{
    console.log('handleClickButton');
  }

 // handleClickButton()

  return (
    <div className="App">
      <h1>Hello React</h1>
      <Attibutes />
      <Navigations />
      
      <Navigationsv2>
            <NavigationItem target='_blank' link='https://tinhte.vn' label='Tinh tế' />
            <NavigationItem link='https://24h.com.vn' label='24h.com.vn' />
      </Navigationsv2>
      <ConditionalRendering />
      <ListKeys />

  

      <button onClick={()=>{
         console.log('handleClickButton 2');
      }}>Button 2</button>

      <div onMouseOver={()=>{
        console.log('Bạn đã rê chuật lên div');
      }}>
        i'm Div tag
      </div>

      <form action="index.html">
        <button onClick={(e)=>{
          e.preventDefault();
          console.log('dsdsdsds');
        }} type='submit'>Submit</button>
      </form>

      <button onClick={handleClickButton}>Click Me</button>
      <Button onClick={()=>{
         console.log('Button 1');
      }} />
       <Button onClick={()=>{
         console.log('Button 2');
      }} />
       <Button onClick={()=>{
         console.log('Button 3');
      }} />
    </div>
  );
}

export default App;
