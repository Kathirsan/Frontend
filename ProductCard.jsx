import React from 'react'

const ProductCard = ({title,price}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>price :Rs {price}</p>
    </div>
  )
}

export default ProductCard