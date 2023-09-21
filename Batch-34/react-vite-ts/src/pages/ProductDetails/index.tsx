import {useParams} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Product {
    id: number;
    title: string;
    price: number;
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

const ProductDetails = () => {
    const params = useParams();
    console.log(params);

    const id = params.id ? parseInt(params.id) : 0;

     // Sử dụng useQuery để fetch data từ API
   const { data, isLoading, isError, error } = useQuery<Product, Error>({ 
    queryKey: ['product-detail', id], 
    queryFn: () =>  fetchData(id)
})


  return (
    <div>
        {isLoading && (<div>Đang tải...</div>)}
        {isError && (<span>Error: {error?.message}</span>)}
        {data && (<div>
           <h1>{data.title}</h1>
           <img height={300} width={300} src={data.images[0]} alt="" />
           <div className="price">
                <strong>Price: ${data.price}</strong>
           </div>
        </div>)}
        
    </div>
  )
}

export default ProductDetails