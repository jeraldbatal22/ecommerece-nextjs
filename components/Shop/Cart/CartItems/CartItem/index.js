import React from 'react'
import styles from './CartItem.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
const CartItem = ({ item }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemContainer}>
        <div className={styles.quantity}>
          <AddIcon
            className={styles.add}
          // onClick={addQuantity}
          />
          {/* <strong>{item.count}</strong> */}1
          <RemoveIcon
            className={styles.remove}
          // onClick={minusQuantity}
          />
        </div>
        <div className={styles.image}>
          <img src={item.image} alt="" height="80" width="80" />
        </div>
        <div className={styles.details}>
          <strong style={{ fontSize: "13px", fontWeight: "700" }}>
            {/* {item.title.split(' ')[0] + " " + item.title.split(' ')[1]} */}
            {item.title}
          </strong>
          <strong>{item.price * 50} PHP</strong>
          <strong>
            {/* {item.count} */}
            1 X 1 pc(s)
          </strong>
        </div>
        <div className={styles.total_price}>
          <strong>
            {/* {(item.price * 50) * item.count} */}
            PHP
          </strong>
        </div>
        <div className={styles.remove_to_cart}>
          <CloseIcon className={styles.close_to_cart} />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default CartItem
