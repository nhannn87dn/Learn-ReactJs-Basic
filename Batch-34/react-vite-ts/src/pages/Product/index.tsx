import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import styles from './Product.module.css'
import ProductGallery from '../../components/ProductGallery'
import AttributesColor from '../../components/AttributesColor'
import ProductsList from '../../components/ProductsList'
import { FaCartPlus, FaHeart} from "react-icons/fa";
import ButtonV3 from '../../components/ButtonV3'
const Product = () => {
  return (
    <>
    <DefaultLayout>
      <div className={styles.main_wrapper}>
          <section>
              <div className={styles.product_details}>
                  <ProductGallery />
                  <div className="product_infos">
                      <AttributesColor />
                      <ButtonV3 icon={<FaCartPlus />} label='Thêm vào giỏ hàng' />
                      <ButtonV3 className="button_dark" icon={<FaHeart />} label='Yêu thích' />
                  </div>
              </div>
              <ProductsList />
          </section>
          <aside>
            sidebar
          </aside>
      </div>
    </DefaultLayout>
    </>
  )
}

export default Product