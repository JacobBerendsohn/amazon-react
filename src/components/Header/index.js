import React from 'react'
import './index.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const index = () => {
  return (
    <div className='header'>
        <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header-logo' />
        <div className='header-search'>
            <input className='header-searchInput' type='text' />
            <SearchIcon className='header-searchIcon' />
        </div>
        <div className='header-nav'>
            <div className='header-option'>
                <span className='header-optionLineOne'>
                    Hello Guest
                </span>
                <span className='header-optionLineTwo'>
                    Sign In
                </span>
            </div>
            <div className='header-option'>
                <span className='header-optionLineOne'>
                    Returns
                </span>
                <span className='header-optionLineTwo'>
                    & Orders
                </span>
            </div>
            <div className='header-option'>
                <span className='header-optionLineOne'>
                    Your
                </span>
                <span className='header-optionLineTwo'>
                    Prime
                </span>
            </div>
            <div className='header-optionCart'>
                <ShoppingCartIcon />
                <span className='header-optionLineTwo header-cartCount'>
                0
                </span>
            </div>
        </div>
    </div>
  )
}

export default index