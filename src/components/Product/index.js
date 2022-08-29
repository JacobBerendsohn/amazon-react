import React from 'react'
import './index.css'
import { useStateValue } from '../../context/StateProvider'

function Product({ id, title, image, price, rating }) {

    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

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
        <button className='product-button' onClick={addToCart}>
            Add to Cart
        </button>
    </div>
  )
}

export default Product