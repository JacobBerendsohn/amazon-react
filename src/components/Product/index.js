import React from 'react'
import './index.css'

const index = () => {
  return (
    <div className='product'>
        <div className='product-info'>
            <p>Test Product</p>
            <p className='product-price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className='product-rating'>
                <p>⭐</p>
            </div>
        </div>
        <img className='product-image' src='https://www.ondemandcmo.com/wp-content/uploads/2016/03/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg' alt='' />
        <button className='product-button'>
            Add to Cart
        </button>
    </div>
  )
}

export default index