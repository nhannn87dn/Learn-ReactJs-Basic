import React, { useState, Fragment } from 'react'
import ButtonAddToCart from './components/ButtonAddToCart'
// import './App.css'

import NavigationBar from './components/NavigationBar'
import Button from './components/Button'
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import NavigationBarChilrend from './components/NavigationBarChilrend'
import NaviItem from './components/NaviItem'
import VideoItem from './components/VideoItem'
import VideoItemV2 from './components/VideoItemV2'
import AttributeColor from './components/AttibuteColor';
import NavigationsBar from './components/NavigationsBar';
import ButtonType from './components/ButtonType'
import {demoLists} from './data/demoLists'
import ProductsList from './components/ProductsList';
import VideosList from './components/VideosList';
import BalaEventsExample from './components/BalaEventsExample'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import MyForm from './components/MyForm';
import FormReactHook from './components/FormReactHook';
import FormReactHookValidation from './components/FormReactHookValidation';
import FormAntd from './components/FormAntd';

/**
 * Khác function js ở chỗ là
 * function COmponent bắt buộc viết HOA kí tự đầu tiên
 * ==> cách tên component theo kiểu PascalCase
 }
 */

function Thumnail(){
  return (
    <>
      <img src="https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/xiaomi-redmi-note-11s-5g-thumb-G4305-1650508487085.jpg" alt="" />
    </>
  )
}

function DemoListsItem({number, check=false} : {number: number, check?: boolean}){
  return (
    // <li>Line {number} {check === true ? '✔' : null}</li>
    <li>Line {number} {check && '✔'}</li>
  )
}

function DemoListsItemV2({number, check=false} : {number: number, check?: boolean}){
  if (check === true){
     return (
      <li>Line {number} ✔</li>
     )
  }else{
    return (
      <li>Line {number}</li>
     )
  }
}

// const demoLists = [
//   {number: 1, check: true},
//   {number: 2, check: true},
//   {number: 3, check: false},
//   {number: 4, check: true},
// ]

function DemoLists(){
  return (
    <ul>
      {
        demoLists.map((item, index)=>{
          return <DemoListsItem key={`DemoLists_${index}`} number={item.number} check={item.check} />
        })
      }
      {/* <DemoListsItem number={1} check={true} />
      <DemoListsItem number={2} check={true}/>
      <DemoListsItem number={3} /> */}
    </ul>
  )
}

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

function PeopoleList(){
  return (
    <ul>
      {
        people.map((item, index)=> {
          console.log(index);
          return (
            <li key={`PeopoleList_${index}`}>{item}</li>
          )
        })
      }
    </ul>
  )
}

function ButtonEvent() {

  const handleCLick = ()=>{
    console.log('Button Login');
  }

  const handlePlay = (number) => {
    console.log('Bạn đã play bài ',number)
  };

  return (
    <>
    <button onClick={()=>{
      console.log('Clicked');
    }}>
      I don't do anything
    </button>
    <button onClick={handleCLick}>
      Login
    </button>
    <button onClick={()=> handlePlay(5)}>Play bài số 5</button>
    </>
  );
}

function MouseEvents(){
  
  const myStyle = {
    width: '200px',
    height: '100px',
    backgroundColor: '#f80',
    color: '#fff',
    padding: '30px'
  }

  const handleMouseOver = ()=>{
    console.log('Bạn đã rê chuột lên Div');
  }

  const handleMouseOut = ()=>{
    console.log('Bạn đã rê chuột ra khỏi Div');
  }


  return (
    <div style={myStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      This is Div tag
    </div>
  )
}

function Signup() {

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submited');
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input className='input-filed' name="username" placeholder='username' />
      <button type="submit">Send</button>
    </form>
  );
}

function NewButton({label, onClick}: {label: string, onClick: () => void}) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

function Count() {
  const [index, setIndex] = React.useState<number>(0)

  console.log('Count render');

  function handleClick() {
    setIndex(i => i + 1); //+
  }
return (
    <>
      <button onClick={handleClick}>
        Increment +1
      </button>
      <h3>  
        {index}
      </h3>
     
    </>
  );
}

function ButtonLike(){
  const [liked, setLiked] = React.useState<boolean>(false);

  return (
    <button className='button button-orange' onClick={()=>{
      setLiked(!liked);
    }} style={{color: liked ? 'blue' : ''}}>Thích</button>
  )
}

function Notification(){
  const [show,setShow] = React.useState(false);
  return (
    <>
    <button onClick={()=>{
      setShow(!show);
    }}>Toogle Notification</button>
    {
      show && (
        <div>
          <p>lorem 1</p>
          <p>lorem 2</p>
          <p>lorem 3</p>
          <p>lorem 4</p>
      </div>
      )
    }
    
    </>
  )
}

function ButtonRanks(){
  const stars = [1,2,3,4,5];

  const [current, setCurrent] = React.useState(0);

  console.log('current',current);

  const handleClick = (number:number)=>{
    //console.log(number);
    if(number === current){
      setCurrent(0);
    }else{
      setCurrent(number);
    }
    
  }

  return (
    <div>
      {
        stars.map((index)=> {
           console.log(index);
          if(index > current){
            return<AiOutlineStar onClick={()=> handleClick(index)} key={index} />
          }else{
            return<AiFillStar onClick={()=> handleClick(index)} key={index} />

          }
        })
      }
        
       
        {/* <AiOutlineStar /> */}
    </div>
  )
}

function App() {

  console.log('APp Render');

  const [toogle, setToggle] =  useState(false)

  const handleLoginCLick = ()=>{
    console.log('Button Login');
  }

  const handleRegisterCLick = ()=>{
    console.log('Button REgister');
  }

  return (
    <>
    
   <div className="container mx-auto">
    <FormAntd />
   <hr />
    <FormReactHookValidation />
    <FormReactHook />
   <MyForm />
    </div>
   
    <hr />
    <div className="container mx-auto">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia esse quasi accusantium quod. Exercitationem inventore doloremque dolores. Magnam corrupti quis accusamus sint illum, ab, maiores non, obcaecati dignissimos molestias quibusdam?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia esse quasi accusantium quod. Exercitationem inventore doloremque dolores. Magnam corrupti quis accusamus sint illum, ab, maiores non, obcaecati dignissimos molestias quibusdam?</p>
        
        <ul>
          <li>List 1</li>
          <li>List 1</li>
          <li>List 1</li>
          <li>List 1</li>
        </ul>
        <form action="">
           <label htmlFor="">Username</label>
           <input type="text" name="username" placeholder='username' />
           <label htmlFor="">Province</label>
           <select name="" id="">
            <option value="">Ha Noi</option>
            <option value="">Da Nang</option>
           </select>
           <label htmlFor="">Content</label>
           <textarea name=""></textarea>
           <button type='submit'>Submit</button> <button>Reset</button> <button className='btn-empty'>Cancle</button> <a href='' className='btn'>Link Button</a>
        </form>
    </div>
   
    
    <form action="">
      <input type="text" />
      <select name="" id=""></select>
    </form>

    <button onClick={()=>{
      setToggle(!toogle)
    }}>Toggle</button>

    {toogle && <Count /> }

     <hr />
    <ButtonRanks />
    <ButtonRanks />
    <Notification />
    <ButtonLike />

    
    <NewButton onClick={handleLoginCLick} label='Login' />
    <NewButton onClick={handleRegisterCLick} label='Register' />

    <ButtonEvent />
    <MouseEvents />
    <BalaEventsExample />
    <Signup />
   
     {/* <VideosList />
    <PeopoleList />
    <DemoLists /> */}
    {/* <ButtonType label='Login' />  */}
    {/* <NavigationsBar />
    
    <ProductsList /> */}
    {/* <Button icon={<FaShoppingCart />}  label='Thêm vào giỏ hàng' />
    <Button icon={<FaHeart />} type='dark' label='Yêu thích' />
    <Button label='Đăng Ký' />
    <Button type='outline' label='Xem chi tiết' />
    <Thumnail />
    <ButtonAddToCart />
    <NavigationBar />
    <NavigationBarChilrend>
        <NaviItem label="Home" />
        <NaviItem label="Blog" />
        <NaviItem label="Contact" />
    </NavigationBarChilrend>
    <VideoItem thumb='./images/video-1.png' title='React: The Documentary' desc='The origin story of React' />
    <VideoItem thumb='./images/video-2.png' title='Rethinking Best Practices' desc='The origin story of React' />
    <VideoItem thumb='./images/video-1.png' title='Introducing React Native' desc='The origin story of React' />
    <VideoItemV2 thumb='./images/video-1.png' title='Introducing React Native - V2' desc='The origin story of React' />
     */}
    <AttributeColor />
    </>
  )
}

export default App
