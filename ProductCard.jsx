import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>price :Rs {props.price}</p>
    </div>
  )
}

export default ProductCard