import React from 'react'

import { useProducts } from '../../hooks/useProducts';

interface ProductFilterType  {
    name: string
    id: number;
}

function ProductFilter() {
    let [filters,setFilters] = React.useState<Array<ProductFilterType> | null>(null)

    let filterCategory = useProducts(state => state.filterCategory);
    let category = useProducts(state => state.category);


    React.useEffect(() => {
        const  getProducts = async ()=>{
            const response = await fetch(`https://my-json-server.typicode.com/nhannn87dn/ReactJs-Basic-Tutorials/categories`);
            const jsonData = await response.json();

            console.log(jsonData);

            setFilters(jsonData);
        }

        getProducts();

    },[])
  return (
    <div>
        <h2>{category}</h2>
        <ul>
            <li onClick={()=>{
                filterCategory(0);
            }}>Tất cả</li>
            {filters && filters.length > 0 && filters.map((item)=>{
                return (
                    <li key={item.id} onClick={()=>{
                        filterCategory(item.id);
                    }}>{item.name} - {item.id}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default ProductFilter