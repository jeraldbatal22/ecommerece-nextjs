import React from 'react'
import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <div className={styles.checkoutCOntainer}>
      <div className={styles.leftCheckoutContainer}>
        <div className={styles.card}>
          <div className={styles.card_1}>
            <div>
              <h1><strong>1</strong> Contact Number</h1>
            </div>
            <div className={styles.card_button}>
            </div>
          </div>
          <div className={styles.card_1_info}>
            <input placeholder="19365141641631" />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_1}>
            <div>
              <h1><strong>2</strong> Billing Address</h1>
            </div>
            <div className={styles.card_button}>
            </div>
          </div>
          <div className={styles.card_1_info}>
            <input placeholder="2148 Straford Park, KY, Winchester, 40391, United States" />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_1}>
            <div>
              <h1><strong>3</strong> Shipping Address</h1>
            </div>
            <div className={styles.card_button}>
            </div>
          </div>
          <div className={styles.card_1_info}>
            <input placeholder="Winchester, 40391, United States" />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card_1}>
            <div>
              <h1><strong>4</strong> Delivery Schedule</h1>
            </div>
            <div className={styles.card_button}>
            </div>
          </div>
          <div className={styles.card_1_info}>
            <input placeholder="90 min express deliver" />
          </div>
        </div>

      </div>

      <div className={styles.rightCheckoutContainer}>
        <div>
          <h2>Your Order</h2>
        </div>
        <div className={styles.items}>
          <span>1 sample | 1 pc(s)</span>
          <span>800 PHP</span>
        </div>
        <hr></hr>
        <div className={styles.items_total}>
          <div>
            <span>Subtotal</span>
            <span>23232 PHP</span>
          </div>
          <div >
            <span>Tax</span>
            <span>Calculated at checkout</span>
          </div>
          <div >
            <span>Estimated Shipping</span>
            <span>Calculated at checkout</span>
          </div>
        </div>
        <div className={styles.div_button}>
          <button>Check Availability</button>
        </div>
      </div>
    </div >
  )
}

export default Checkout
