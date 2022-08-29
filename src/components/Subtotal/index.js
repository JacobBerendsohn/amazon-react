import React from 'react'
import './index.css'
import CurrencyFormat from 'react-currency-format'
import { cardActionAreaClasses } from '@mui/material'
import { useStateValue } from '../../context/StateProvider'
import { getCartTotal } from '../../context/reducer'

function Subtotal() {

    const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({cart.length} items):
                        <strong> {value} </strong>
                    </p>
                    <small className='subtotal-gift'>
                        <input className='subtotal-checkbox' type='checkbox' /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
        <button className='subtotal-button'>
            Proceed to Checkout
        </button>
    </div>
  )
}

export default Subtotal