import React from 'react'
import styles from './Product.module.css'
import ProductGallery from '../../components/ProductGallery'
import AttributesColor from '../../components/AttributesColor'
import ProductsList from '../../components/ProductsList'
import { FaCartPlus, FaHeart} from "react-icons/fa";
import ButtonV3 from '../../components/ButtonV3'
const Product = () => {

  const buttonList = [
    {id: 1,  icon: <FaCartPlus />, label:'Thêm vào giỏ hàng'},
    {id: 2, class: 'button_dark', icon: <FaHeart />, label:'Yêu thích'}
  ]

  return (
    <>
      <div className={styles.main_wrapper}>
          <section>
              <div className={styles.product_details}>
                  <ProductGallery />
                  <div className="product_infos">
                      <AttributesColor />
                      <ButtonV3 icon={<FaCartPlus />} label='Thêm vào giỏ hàng' />
                      <ButtonV3 className="button_dark" icon={<FaHeart />} label='Yêu thích' />

                    {
                      buttonList.map((item)=> {
                       
                        return <ButtonV3 className={item.class} icon={item.icon} label={item.label} />
                      })
                    }
                  
                  </div>
              </div>
              <ProductsList />
          </section>
          <aside>
            sidebar
          </aside>
      </div>
    </>
  )
}

export default Product