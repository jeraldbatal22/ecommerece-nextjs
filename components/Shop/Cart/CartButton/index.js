import React from 'react'
import styles from './CartButton.module.css'
import ShopIcon from '@mui/icons-material/Shop';

const CartButton = ({ showCartModal }) => {
  return (
    <div className={styles.item_button}>
      <div className={styles.item_button_body}
        onClick={showCartModal}
      >
        <ShopIcon />
        <div><strong>2</strong><p>Item('s')</p></div>
        <strong>3232 PHP</strong>
      </div>
    </div>
  )
}

export default CartButton
