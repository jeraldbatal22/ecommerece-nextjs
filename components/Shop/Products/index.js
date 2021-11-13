import React from 'react'
import Pagination from './Pagination'
import styles from './Products.module.css'
import { useState } from 'react'
const Products = ({ products }) => {

  const [currenPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)
  const indexOflastPost = currenPage * postsPerPage;
  const indexOfFirstPost = indexOflastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost, indexOflastPost)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(products.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={styles.itemListContainer}>
      {
        currentPosts.map((item, index) => {
          return (
            <div key={index} className={styles.fulldetails}>
              <div className={styles.details}>
                <img src={item.image} alt="" height="200" width="300" />
                <div className="details">
                  <strong style={{ width: '10px' }}>{item.title}</strong>
                  <p>{item.price * 50} PHP </p>
                  <div className={styles.button}>
                    <button>Add To Cart</button>
                    <button>Checkout</button>
                  </div>
                </div>
              </div>

            </div>
          )
        })
      }
      <Pagination pageNumbers={pageNumbers} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Products
