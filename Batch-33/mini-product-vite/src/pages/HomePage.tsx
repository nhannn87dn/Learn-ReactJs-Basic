import React from 'react'
import Count from '../components/Count';
import CountHangXom from '../components/CountHangXom';
import useProducts from '../hooks/useProducts';

const HomePage = () => {
  React.useEffect(()=> {
    document.title = 'Home Page';
  },[])

  const {productsList} = useProducts();

  return (
    <>
    
    <div className="container">

    <h1>HomePage</h1>

   

    {
      productsList.map((item)=> {
        return (
          <li>{item.name} - {item.promoPrice}</li>
        )
      })
    }
    <a href="https:24h.com.vn" target='_blank'>24h.com.vn</a>
    <hr />
    <Count />
    <hr />
    <CountHangXom />
    </div>
    
    </>
  )
}

export default HomePage