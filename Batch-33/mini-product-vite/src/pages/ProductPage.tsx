import React from 'react'
import styles from './ProductPage.module.css'
import ProductsGallery from '../components/ProductsGallery'
import OwlCarouselGallery from '../components/OwlCarouselGallery'
import AttributeColor from '../components/AttibuteColor'

const ProductPage = () => {
  return (
    <>
    <div className="container">

     <main className={styles.main}>
        <section className={styles.main_content}>
            <ProductsGallery />
            
            <button className='bg-sky-500 text-white py-2 px-5 rounded hover:bg-sky-600'>Login</button>
            {/* Những UI nằm giữa này thì tách ra components */}
            <AttributeColor />
        </section>
        <aside className={styles.sidebar}>
        sidebar
          {/* Những UI nằm giữa này thì tách ra components */}
        </aside>
    </main>
    </div>
    </>
  )
}

export default ProductPage