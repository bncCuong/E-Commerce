import { useState } from 'react'
import { KeyboardArrowDownIcon, SearchIcon, PersonOutlineIcon, FavoriteBorderIcon, ShoppingCartIcon } from '../../icon/icon'
import { leftNavbar, rightNavbar } from '../../constants'
import "./Navbar.scss"
import flag from '../../assets/img/en.png'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'

const Navbar = () => {
  const [showCart, setShowCart] = useState(false)

  const showCartHanler = () => {
    setShowCart(true)
  }

  const hideCartHanler = () => {
    setShowCart(false)
  }
  return (
    <div className='navbar'>
      <div className='wrapper'>
        {/* //navbar list left */}
        <div className='left'>
          <div className='flag-item'>
            <img src={flag} alt='flag' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='flag-item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='nav-list'>
            {leftNavbar.map(item => <Link key={item.id} to={item.to}> {item.title}
            </Link>)}
          </div>
        </div>
        {/* //Logo */}
        <div className='center'><Link to='/home'> <h3>BNC.CuongSTORE</h3> </Link></div>

        {/* //navbar list right */}
        <div className='right'>
          {rightNavbar.map(item => <Link key={item.id} to={item.to}>{item.title}</Link>)}
          <div className='icon'>
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />

            <div className='cart-icon' onClick={showCartHanler}>
              <ShoppingCartIcon />
              <span>0</span>
            </div>

            {showCart && <Modal hideCart={hideCartHanler} showCart={showCartHanler} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar