import React from 'react'
import './index.css'

const index = ({ title, image, price, rating }) => {
  return (
    <div className='product'>
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img className='product-image' src={image} alt='' />
        <button className='product-button'>
            Add to Cart
        </button>
    </div>
  )
}

export default index