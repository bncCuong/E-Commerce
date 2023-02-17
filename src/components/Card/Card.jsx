import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ title, img, item, isNew, id }) => {
    return (
        <Link className='links' to={`/product/${title}/${id}`} >
            <div className='card'>
                <div className='image'>
                    {isNew && <p className='notification'>New Season</p>}

                    <img src={img} alt='product' className='img1' />
                </div>
                <h2 className='title-product'>{title}</h2>
            </div>
        </Link>
    )
}

export default Card