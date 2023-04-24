import React from 'react'
import { Spin } from 'antd';
import { Outlet, Link } from "react-router-dom";

interface ProductType  {
 id: number;
 title: string;
 price: number;
 description: string;
 images: string[];
 creationAt: string;
 updatedAt: string;
 category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
 }
}

const GetProductList = () => {

    let [products, setProducts] = React.useState<[ProductType] | null>(null)
    let [loading, setLoading] =  React.useState(false);

    React.useEffect(()=>{
        let fetchProduct = async ()=>{
            setLoading(true);
            const response = await fetch("https://api.escuelajs.co/api/v1/products")
            let result = await response.json();

            console.log(result);
            setProducts(result)
            setLoading(false);
        }

        fetchProduct();

    },[]);


  return (
    <div>
        GetProductList
        {loading && <Spin />}
        {products && products.length > 0 && products.map((item)=> {
            return (
                <li key={item.id}>
                    <Link to={`/product/${item.id}`}>
                    <img height={50} src={item.images[0]} alt="" />
                    <h3>{item.title}</h3>
                    <div>{item.price}</div>
                    </Link>
                </li>
            )
        })}
    </div>
  )
}

export default GetProductList