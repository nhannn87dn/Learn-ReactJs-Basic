import React from 'react';
import logo from './logo.svg';
import { FaShoppingBag,FaHeart } from "react-icons/fa";
import './App.css';
import ButtonEs6 from './components/ButtonEs6';
import Button from './components/Button';
//props = {label: 'Thêm giỏ hàng'}
//props.label
// let {label} = props;

//console.log(label)

type TypeProps = {
  label: string
}

//Định nghĩa 1 component
// function Button(props: TypeProps){
//     return (
//       <button type='button'><FaShoppingBag /> {props.label}</button>
//     )
// }
let a = 5;
let b = 6;
const element = <h1>Hello, world!</h1>;
const myelement = <h1>React is {a + b} times better with JSX</h1>;
//Es6 

function Link(){
  return (
    <a href="">Home</a>
  )
}

function NavigationItem(){
  return (
    <li>Home</li>
  )
}

function Navigation(){
  return (
    <nav className="navigation" style={{backgroundColor: 'red',padding: '10px', fontSize: '16px'}}>
      <ul>
          <NavigationItem />
          <NavigationItem />
          <NavigationItem />
          <NavigationItem />
          <NavigationItem />
          <img src="" alt="" />
          <input type="text" />
      </ul>
    </nav>
  )
}

function Son(){
  return (
    <>
    <h3>Son</h3>
    </>
  )
}

function Dad({children} : {children: React.ReactNode}){
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <ButtonEs6 icon={<FaShoppingBag />} label='Thêm giỏ hàng' />
      <ButtonEs6 customClass='button-dark'  />
      <ButtonEs6 customClass='button-detail' label='Xem chi tiết'  />
      {/* <Link />
      <Navigation /> */}
      <Button label='Add To Cart' />
    </div>
  );
}

export default App;
