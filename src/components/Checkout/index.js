import React from 'react'
import './index.css'
import Subtotal from '../Subtotal/index'
import { useStateValue } from '../../context/StateProvider'
import CheckoutProduct from '../CheckoutProduct'

function Checkout() {

    const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='checkout-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />
            <div>
                <h2 className='checkout-title'>
                    Your Shopping Cart
                </h2>
                {
                    cart.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))
                }
            </div>
        </div>
        <div className='checkout-right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout