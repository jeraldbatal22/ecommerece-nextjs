import React from 'react'
import styles from './CartModal.module.css'
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CartItems from '../CartItems';
import Link from 'next/link';

const CartModal = ({ cancelCartModal, products }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.backdrop} onClick={cancelCartModal} />
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h1 ><ShoppingBagIcon className="shop-icon" />Items</h1>
          <CloseIcon className={styles.close} onClick={cancelCartModal} />
        </div>
        <CartItems products={products} />
        {
          <div className={styles.checkout_btn}>
            <Link href="/checkout">
              <button className="checkout" > <p>Checkout</p>
                <strong> 2000 PHP</strong>
              </button>
            </Link>
          </div>
        }

      </div>
    </div>
  )
}

export default CartModal
