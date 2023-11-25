import AddProduct from "../../components/AddProduct";
import ProductList from "../../components/ProductsList";
import ProductListAxios from "../../components/ProductsListAxios";
import { DefaultLayout } from "../../components/layouts/DefaultLayout"
import { useBrowserWidth } from "../../hooks/useBrowser"
const ProductPage = () => {

  const browserWidth = useBrowserWidth();
  
  return (
    <DefaultLayout>
      <div className="layout_wrapper flex">
          <div className="product_main flex-1">
            <h2 className='text-2xl font-bold my-5'>Thêm sản phẩm</h2>
            <AddProduct />

            <h2 className='text-2xl font-bold my-5'>Danh sách sản phẩm</h2>
            {/* <ProductList /> */}
            <ProductListAxios />

            product_main
            {browserWidth}
           {
            browserWidth <= 542 ? ('Giao diện mobile') : 'Giao diện Desktop'
           }
          </div>
          <div className="product_sidebar w-[320px]">
              product_sidebar
          </div>
      </div>
    </DefaultLayout>
  )
}

export default ProductPage