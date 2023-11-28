import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[]
}

const  CategoryPage  =( ) => {

  const [products, setProducts] = React.useState<IProduct[] | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const [params] = useSearchParams();

  const page = params.get('page');
  const int_page = page ? parseInt(page) : 1; //Mặc định page = 1
  const offset = (int_page - 1) * 9;

  React.useEffect(()=>{
    //Định nghĩa hàm
    const fetchData = async ()=>{
        //Gọi API với method GET
        try {
          //Bắt đầu gọi API thì cho xoay loading...
          setIsLoading(true);
          const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=9`);
          //Log ra để xem API nó trả cái gì 
          console.log(response);
          //Lấy được data rồi thì ngừng loading...
          setIsLoading(false);
           //Sau khi lấy được kết quản thì set State
          setProducts(response.data);
        
          //Lỗi nó nhảy vào phần catch
        } catch (error) {
          setIsLoading(false);
          console.error(error);
        }
      
       
      }
      //Gọi Hàm
      fetchData();
  },[page,offset]);//Dependency là mảng rỗng thì chạy 1 lần duy nhất

  if(isLoading){
    return (<div>Loading.....</div>)
  }


  return (
    <div>
      <h1>CategoryPage Page</h1>
      <section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {
        products && products.length > 0 && products.map((product: IProduct)=>{
          return (
            <div key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <img src={product.images[0]}
                        alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
                        
                        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg></div>
                    </div>
                </div>
            </a>
        </div>
          )
        })
      }
   </section>
   <div className='my-5 flex justify-center gap-x-3'>
      <Link to={`/categories?page=1`} className='border rounded p-2'>1</Link>
      <Link to={`/categories?page=2`} className='border rounded p-2'>2</Link>
      <Link to={`/categories?page=3`} className='border rounded p-2'>3</Link>
   </div>
    </div>
  )
}

export default CategoryPage