import { DefaultLayout } from "../../components/layouts/DefaultLayout"
import { useBrowserWidth } from "../../hooks/useBrowser"
const ProductPage = () => {

  const browserWidth = useBrowserWidth();
  
  return (
    <DefaultLayout>
      <div className="layout_wrapper flex">
          <div className="product_main flex-1">
           
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