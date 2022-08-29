import React from 'react'
import './index.css'
import CurrencyFormat from 'react-currency-format'
import { cardActionAreaClasses } from '@mui/material'

const index = () => {
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal (0 items):
                        <strong> 0 </strong>
                    </p>
                    <small className='subtotal-gift'>
                        <input className='subtotal-checkbox' type='checkbox' /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
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

export default index