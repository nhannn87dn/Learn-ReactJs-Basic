import {useParams} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios  from 'axios';
import { Helmet } from "react-helmet";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
      id: number
    }
    images: string[]
  }

  const fetchData = async (id: number)=>{
    const url = `https://api.escuelajs.co/api/v1/products/${id}`;
    const {data} = await axios.get(url);
    return data
  }

function Loading() {
    return (
      <>
      <Skeleton width={300} duration={1.5} />
      <Skeleton height={300} width={300} />
      <Skeleton width={100} />
      <Skeleton />
      </>
    )
}


const ProductDetails = () => {
    const params = useParams();
    console.log(params);

    const id = params.id ? parseInt(params.id) : 0;

     // Sử dụng useQuery để fetch data từ API
   const { data, isLoading, isError, error} = useQuery<Product, Error>({ 
      queryKey: ['product-detail', id], 
      queryFn: () =>  fetchData(id)
  })

  if(isLoading) return <Loading /> 

  if(isError){
    return (<div>Error: {error.message}</div>)
  }


  return (
    <>
        {data && (
        <>
           <Helmet>
            <meta charSet="utf-8" />
            <title>{data.title}</title>
            <link rel="canonical" href={`http://localhost:5173/product/${data.id}`} />
            <meta
            name="description"
            content={data.description}
          />
          </Helmet>

           <h1>{data.title}</h1>
           <img height={300} width={300} src={data.images[0]} alt="" />
           <div className="price">
                <strong>Price: ${data.price}</strong>
           </div>
           <div>
           {data.description}
           </div>
        </>
        )}
        
    </>
  )
}

// const ProductDetails = () => {
//   return (
//     <Suspense fallback={<Loading />}>
//       <ProductInfo />
//     </Suspense>  
//   )
// }
export default ProductDetails