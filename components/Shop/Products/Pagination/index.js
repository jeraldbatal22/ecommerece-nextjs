import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({ pageNumbers, setCurrentPage }) => {
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber)
  }
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.empty}></div>
      <div className={styles.pagination}>
        {
          pageNumbers.map(number => (
            <button key={number} type="button" onClick={() => paginate(number)}>{number}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Pagination
