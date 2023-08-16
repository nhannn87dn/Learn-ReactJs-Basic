import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
interface Product {
  id: number;
  title: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  price: number;
}

const fetchProducts = async (page: number, filters: object) => {
  const response = await axios.get("https://api.escuelajs.co/api/v1/products", {
    params: {
      offset: (page - 1) * 10,
      limit: 10,
      ...filters,
    },
  });
  return response.data;
};


const buildUri = ({pathName, search, params}: {pathName: string, search: string, params: []}) => {
  const url = search.includes("?") ? `pathName?` : pathName;
  return `${url}`+params.join("&");
  
}

const Products: React.FC = () => {
  const [params, searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log('<<=== 🚀 searchParams ===>>',searchParams);

  console.log('<<=== 🚀 location ===>>',location);

  

  const page_param  = params.get('page');
  const page = page_param ? parseInt(page_param) : 1;

  const category_param  = params.get('cid');
  const categoryIdFilter = category_param ? category_param : '';

  const title_param  = params.get('title');
  const titleFilter = title_param ? title_param : '';

  console.log('<<=== 🚀 page bef ===>>',page );
  
  const [stateFilters, setStateFilters] = useState<{page: number, cateId:  string, title: string}>({
    page: page,
    cateId: categoryIdFilter,
    title: titleFilter
  });

  const handleFilter = ()=>{
    let url = `/product`;
    if(stateFilters.cateId){
      url += `?cid=${stateFilters.cateId}`;
    }
    if (stateFilters.title) {
      url += `${stateFilters.cateId ? '&' : '?'}title=${stateFilters.title}`;
    }
    navigate(url)
  }

  const handleResetFilter = ()=> {
    setStateFilters({
      page: 1,
      cateId: '',
      title: ''
    });
    navigate('/product')
  }

  console.log('<<=== 🚀 param ===>>',page_param,categoryIdFilter,titleFilter );

  let optionsFilter: object = {};

  if(categoryIdFilter){
    optionsFilter = {...optionsFilter, categoryId: categoryIdFilter}
  }

  if(titleFilter){
    optionsFilter = {...optionsFilter, title: titleFilter}
  }




  const { data, isLoading, isError, error  } = useQuery<Product[], Error>({
    queryKey:["products", page, {categoryIdFilter, titleFilter}],
    queryFn: () => fetchProducts(page, optionsFilter),
  });


  console.log('<<=== 🚀 page ===>>',page,optionsFilter,stateFilters);

  // Nếu thành công, hiển thị danh sách sản phẩm
  return (
    <div>

     
      {isError && <div>Error: {error.message}</div>}
      
      <div>
        <input
          type="text"
          value={stateFilters.cateId}
          placeholder="Filter by category"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setStateFilters(prev => ({ ...prev, cateId: e.target.value }));
          }}
        />
        <input
          type="text"
          value={stateFilters.title}
          placeholder="Filter by title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setStateFilters(prev => ({ ...prev, title: e.target.value }));
          }}
        />
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleResetFilter}>Reset Filter</button>
       
      </div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {data && data.map((product: Product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.category.id}</td>
            <td>{product.price}</td>
          </tr>
        ))}
        </tbody>
      </table>
      {isLoading && <div>Loading...</div>}
      <div className="pagination" style={{marginTop: 30}}>
      <span>Current Page: {stateFilters.page} | </span>
      {/* <button disabled={isPreviousData || stateFilters.page === 1} onClick={() => {
         setStateFilters(prev => ({ ...prev, page: prev.page - 1 }));
         
      }}>
        Previous Page
      </button> */}
      <button onClick={()=>{
          setStateFilters(prev => ({ ...prev, page: 1}));
          navigate('/product?page=1');
      }}>
        1
      </button>
      <button onClick={()=>{
        setStateFilters(prev => ({ ...prev, page: 2}));
        navigate('/product?page=2');
      }}>
        2
      </button>
      <button onClick={()=>{
        setStateFilters(prev => ({ ...prev, page: 3}));
        navigate('/product?page=3');
      }}>
        3
      </button>
      {/* <Link to='/product?page=1'>1</Link> <Link to='/product?page=2'>2</Link> <Link to='/product?page=3'>3</Link> */}
      {/* <button onClick={() =>{
         setStateFilters(prev => ({ ...prev, page: prev.page + 1 }));
      }}>Next Page</button> */}
      </div>
     
    </div>
  );
};

export default Products;
