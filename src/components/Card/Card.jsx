import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ title, oldPrice, price, img, id, img2, isNew, cateId }) => {
    return (
        <Link className='links' to={`/product/${id}`} >
            <div className='card'>
                <div className='image'>
                    {isNew && <p className='notification'>New Season</p>}

                    <img src={img} alt='product' className='img1' />
                    <img src={img2} alt='product' className='img2' />
                </div>
                <h2 className='title-product'>{title}</h2>
                <div className='price'>
                    <p className='old-price'>
                        ${oldPrice}
                    </p>
                    <p>${price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card