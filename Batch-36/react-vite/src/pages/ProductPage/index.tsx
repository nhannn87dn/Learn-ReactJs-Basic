import { DefaultLayout } from "../../components/layouts/DefaultLayout"

const ProductPage = () => {
  return (
    <DefaultLayout>
      <div className="layout_wrapper flex">
          <div className="product_main flex-1">
            product_main
          </div>
          <div className="product_sidebar w-[320px]">
              product_sidebar
          </div>
      </div>
    </DefaultLayout>
  )
}

export default ProductPage