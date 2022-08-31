import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase';

function Header() {

    const [{ cart, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to='/'>
            <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header-logo' />
        </Link>
        <div className='header-search'>
            <input className='header-searchInput' type='text' />
            <SearchIcon className='header-searchIcon' />
        </div>
        <div className='header-nav'>
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header-option'>
                    <span className='header-optionLineOne'>
                        {user ? `Hello ${user.email.substring(0, user.email.indexOf('@')).toUpperCase()}` : 'Hello Guest'}
                    </span>
                    <span className='header-optionLineTwo'>
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>
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
            <Link to='/checkout'>
                <div className='header-optionCart'>
                    <ShoppingCartIcon />
                    <span className='header-optionLineTwo header-cartCount'>
                        {cart?.length}
                    </span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header