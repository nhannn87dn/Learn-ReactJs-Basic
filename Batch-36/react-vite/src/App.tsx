import './App.css';
import Button from './components/Button'
import List from './components/List';
import ListItem from './components/ListItem';
import Policy from './components/Policy';

import styles from './components/Button.module.css'
import { AiFillHeart,AiFillShopping } from 'react-icons/ai';
import ButtonV2 from './components/ButtonV2';
import { FaShoppingCart, FaPhone } from "react-icons/fa";
import stylesV2 from './components/ButtonV2/ButtonV2.module.css'
import SingleProduct from './components/SingleProduct';
import { products } from './data/product';
import Navigation from './components/Navigation';
import Videos from './components/Videos';

const SingleItem = ({title, done=false}: {title: string, done?: boolean})=>{
  return (
    <li>{title} {done && '✔'}</li>
  )
}

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
  'kdsds',
  'kdjskjd dsdsds',
  'kjdsjdksjdk'
];


function App() {

  const isAdmin = true;
 

  console.log('App rendering');
  
  console.log('<<=== 🚀 products ===>>',products);
 
  return (
    <div className='container mx-auto'>
    {
      isAdmin && (<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>)
    }
      <Videos />

      <Navigation />
      <ul>
        {
          people.map((item,index)=>{
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>

     <ul>
      <SingleItem title='Quet nha' done={true} />
      <SingleItem title='Lau nha' done={true} />
      <SingleItem title='Giat do' done={true} />
     </ul>

     <hr />

     {/* <div className='product_list flex'>
        <SingleProduct thumb='https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/airpods-3-thumb-G4324-1649993281055.png' promoPrice={790000} price={1290000} name='Cap chuyen doi USB' />
        <SingleProduct thumb='https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/adapter-sac-apple-type-c-20w-thumb-G4322-1649993189264.png' price={520000} name='Adapter sac Apple' />
     </div> */}
      
     <div className='product_list flex'>
      {
        products.map((product) =>{
          return <SingleProduct key={product.id} thumb={product.thumb} promoPrice={product.promoPrice}  price={product.price} name={product.name}  />
        })
      }
     </div>

      {/* <img className='' src="" alt="" />
      <input type="email" name="" id="" />

      <label style={{
        fontSize: '16px',
        backgroundColor: '#fff'
        }} htmlFor="gender">
        <input type="radio" name="gender" id="gender" />
      </label>

      <button className='btn'>OK</button> */}

      {/* Cách dùng component */}
      {/* <Button icon={<AiFillHeart />} name='Mua ngay'  />
      <Button icon={<AiFillShopping />} className={styles.btn_dark} name='Trả góp' />
      <Button className={styles.btn_outline} name="Gọi tư vấn" />

      <Button  />

      <Policy title='Bộ sản phẩm gồm' desc='Hộp, Sách hướng dẫn, Cáp, Cây lấy sim' />
      <Policy title='Bảo hành' desc='Chính hãng 12 tháng' />
      <Policy title='Đổi trả' desc='Hư gì đổi nấy 6 tháng' />

        
      <List>
          <ListItem name='item 1' />
          <ListItem name='item 2' />
      </List> */}

      <hr />

      {/* <ButtonV2 icon={<FaShoppingCart />} name='Thêm vào giỏ hàng' />
      
      <ButtonV2 className={stylesV2.btn_dark} icon={<FaPhone />} name='Gọi lại tư vấn' />
         */}
    </div>
  )
}

export default App
