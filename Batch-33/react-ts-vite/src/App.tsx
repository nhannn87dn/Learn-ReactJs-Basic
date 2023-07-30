import { useState, Fragment } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PeopoleList />
    <DemoLists />
    {/* <ButtonType label='Login' />  */}
    <NavigationsBar />
    <AttributeColor />
    <ProductsList />
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

    </>
  )
}

export default App
