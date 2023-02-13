import { Link } from 'react-router-dom'
import './Footer.scss'
import payment from '../../assets/img/payment.png'
import { links, categories } from '../../constants'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        {/* //Categories */}
        <div className='categories'>
          <h4 className='title'>{categories.title}</h4>
          <div className='item'>
            {categories.item.map((item, index) => <Link to={'/home'} key={index}>{item}</Link>)}
          </div>
        </div>
        {/* //Links */}
        <div className='links'>
          <h4 className='title'>{links.title}</h4>
          <div className='item'>
            {links.link.map((item, index) => <Link to={'/home'} key={index} >{item}</Link>)}
          </div>
        </div>
        {/* //About */}
        <div className='about'>
          <h4 className='title'>About</h4>
          <p className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat. Perferendis distinctio, magni voluptas maxime dignissimos a maiores eius cumque aliquid porro sequi qui quibusdam fuga nostrum quas, nemo est! </p>
        </div>
        {/* //Contact */}
        <div className='contact'>
          <h4 className='title'>Contact</h4>
          <p className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat. Perferendis distinctio, magni voluptas maxime dignissimos a maiores eius cumque aliquid porro sequi qui quibusdam fuga nostrum quas, nemo est! </p>
        </div>
      </div>

      <div className='end-footer'>
        <h2>BNC.CuongStore</h2>
        <img src={payment} alt='payment' />
      </div>
    </div>
  )
}

export default Footer