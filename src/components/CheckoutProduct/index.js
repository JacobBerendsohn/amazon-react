import React from 'react'
import './index.css'
import { useStateValue } from '../../context/StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct-image' src={image} />
        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>
                {title}
            </p>
            <p className='checkoutProduct-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct-rating'>
                {
                    Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            <button onClick={removeFromCart} className='checkoutProduct-button'>Remove from Cart</button>
        </div>

    </div>
  )
}

export default CheckoutProduct