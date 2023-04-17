import React from 'react'
import { useProducts } from '../../hooks/useProducts';
interface ProductType  {
    createdAt: string
    name: string
    thumbnail: string;
    price: string;
    salePrice: string;
    category: string;
    id: string;
}

function ProductList() {

    let products =  useProducts(state=> state.products);
    let setProducts = useProducts(state => state.setProducts);
    let category = useProducts(state => state.category);

    React.useEffect(() => {
        const getProducts = async ()=>{
            const response = await fetch('https://my-json-server.typicode.com/nhannn87dn/ReactJs-Basic-Tutorials/products');
            let results = await response.json();
            if(category > 0){
                results = await results.filter((item: any)=>item.category == category)
            }
            setProducts(results)
        }
        getProducts();

    },[category])
  return (
    <div>
        <ul>
            {products && products.length > 0 && products.map((item)=>{
                return (
                    <li key={item.id}>{item.name} - CategoryID {item.category}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default ProductList