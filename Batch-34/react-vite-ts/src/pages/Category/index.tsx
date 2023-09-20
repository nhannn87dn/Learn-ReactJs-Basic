import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams  } from 'react-router-dom';
interface Product {
  id: number;
  title: string;
  price: number;
  category: {
    id: number
  }
}

type FiltersType = {
  categoryId? : number
}

const fetchData = (page: number, filters: FiltersType)=>{
  // const page = 1;
  const offset = (page - 1) * 10;
  let url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`;
  
  if(filters.categoryId && filters.categoryId > 0){
    url += `&categoryId=${filters.categoryId}`;
  }
  
  return fetch(url).then(res => res.json())
}

const Category = () => {
  const [params] = useSearchParams();

   const page =  params.get('page');
   const int_page = page ? parseInt(page) : 1;

   const cid =  params.get('categoryId');
   const int_cid = cid ? parseInt(cid) : 0;

   console.log('<<=== 🚀 page ===>>',page);
   // Sử dụng useQuery để fetch data từ API
   const { data, isLoading, isError, error } = useQuery<Product[], Error>({ 
    queryKey: ['products', {page,cid}], 
    queryFn: () =>  fetchData(int_page, {categoryId: int_cid})
})

  return (
    <>
      <h1 className='py-5'>Category Page</h1>

      <div className='border-b-4'>
          <Link className='me-5' to={'/category/?categoryId=1'}>DM ID 1</Link>
          <Link className='me-5' to={'/category/?categoryId=2'}>DM ID 2</Link>
          <Link className='me-5' to={'/category/?categoryId=3'}>DM ID 3</Link>
      </div>

      {isLoading && (<div>Đang tải...</div>)}
      {isError && (<span>Error: {error?.message}</span>)}
      <ul>
        {data && data.map((product: Product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title} - {product.price} - CID: {product.category.id}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <div className="pagination my-5">
          <Link className='py-2 px-2 border border-slate-950 me-3' to={'/category'}>1</Link>
          <Link className='py-2 px-2 border border-slate-950 me-3' to={'/category?page=2'}>2</Link>
      </div>
    </>
  )
}

export default Category