import React, { useState } from 'react'
import styles from './Cart.module.css'
import CartButton from './CartButton';
import CartModal from './CartModal';


const Cart = ({ products }) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const showCartModal = () => {
    setIsShowModal(true)
  }

  const cancelCartModal = () => {
    setIsShowModal(false)
  }

  return (
    <div className={styles.cartContainer}>
      {
        isShowModal ?
          <CartModal cancelCartModal={cancelCartModal} products={products} />
          :
          <CartButton showCartModal={showCartModal} />
      }
    </div>
  )
}

export default Cart
