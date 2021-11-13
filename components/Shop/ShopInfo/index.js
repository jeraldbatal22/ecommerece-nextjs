import React from 'react'
import styles from './ShopInfo.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import furniture from '../../../public/assets/images/Furniture.png'

const ShopInfo = () => {
  return (
    <div className={styles.shopInfoContainer}>
      <div className={styles.shopHeader}>
        <img src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F882%2FFurniture.png&w=1920&q=75' alt="" />
        <h3>Furniture Shop</h3>
        <p>The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.</p>
        <button>Read more</button>
        <p><a href="https://www.instagram.com/" ><InstagramIcon /></a></p>
      </div>
      <hr></hr>
      <div className={styles.shopDetails}>
        <label>Adress</label>
        <p>588 Finwood Road, New Jersey, East Dover, 08753, USA</p>
        <label>Phone</label>
        <p>21342121221</p>
        <label>Website</label>
        <div>
          <p>https://redq.io/</p>
          <button>Visit This Site</button>
        </div>
      </div>
    </div>
  )
}

export default ShopInfo
