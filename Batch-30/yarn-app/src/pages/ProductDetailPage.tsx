import React from 'react'
import {useParams} from 'react-router-dom';



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

const ProductDetailPage = () => {

  let [products, setProducts] = React.useState<ProductType | null>(null)
  let [loading, setLoading] =  React.useState(false);

  let params = useParams();
  console.log(params);

  React.useEffect(()=>{
      let fetchProduct = async ()=>{

        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
        let result = await response.json();

        console.log(result);
        setProducts(result)
        setLoading(false);

      }
      fetchProduct();
  },[]);

  return (
    <div>
      <h1>Chi tiet san pham co ID {params?.id}</h1>
       <h2>{products?.title}</h2> 
       <div><img height={200} src={products?.images[0]} alt="" /></div> 
       <strong>$ {products?.price}</strong>
       <article>
        {products?.description}
       </article>
      </div>
  )
}

export default ProductDetailPage