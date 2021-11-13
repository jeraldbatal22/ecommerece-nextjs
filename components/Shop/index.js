import React from 'react'
import ShopInfo from './ShopInfo';
import products from '../../dumpData/products'
import Products from './Products';
import styles from './Shop.module.css'
import Cart from './Cart';

const Shop = () => {
  return (
    <>
      <div className={styles.mainShopContainer} >
        <ShopInfo />
        <Products products={products} />
        <Cart products={products} />
      </div>
    </>
  )
}

export default Shop
