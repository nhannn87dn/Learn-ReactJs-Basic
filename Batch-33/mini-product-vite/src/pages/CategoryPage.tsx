import React from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import ProductsListAPI from '../components/ProductsListAPI'
import ProductFilter from '../components/ProductsListAPI/ProductFilter';


const CategoryPage = () => {

  const location = useLocation();
  const [params] = useSearchParams();

  React.useEffect(()=> {
    document.title = 'Category Page';
  },[])

  const offset = params.get('offset');
  const limit = params.get('limit');

  const int_offset = offset ? parseInt(offset) : 0;
  const int_limit = limit ? parseInt(limit) : 10;

  console.log(location,offset);

  return (
    <div className="container">
      <h3>Phân trang</h3>
    <Link to='/category?offset=0&limit=10'>1</Link> <Link to='/category?offset=20&limit=10'>2</Link> <Link to='/category?offset=30&limit=10'>3</Link>
      <h3>Bộ lọc</h3>
      <ProductFilter offset={int_offset} limit={int_limit} />
      <ProductsListAPI offset={int_offset} limit={int_limit} />
    </div>
  )
}

export default CategoryPage