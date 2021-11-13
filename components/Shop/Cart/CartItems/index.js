import React from 'react'
import CartItem from './CartItem'

const CartItems = ({ products }) => {
  return (
    <>
      {
        products.map((item, index) => {
          return <CartItem
            item={item}
            key={index}
          />
        })
      }
    </>
  )
}

export default CartItems
