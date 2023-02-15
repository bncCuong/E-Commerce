import { Link } from 'react-router-dom'
import categories1 from '../../assets/img/categories1.webp'
import categories2 from '../../assets/img/categories2.jpeg'
import categories3 from '../../assets/img/categories3.jpeg'
import categories4 from '../../assets/img/categories4.jpeg'
import categories5 from '../../assets/img/categories5.webp'
import categories6 from '../../assets/img/categories6.jpg'
import './Categories.scss'

const Categories = () => {
    return (
        <div className='categories'>
            <div className='col-1'>
                <div className='row-1'>
                    <img src={categories1} alt='categories' />
                    <button>Sale</button>
                </div>
                <div className='row-1'>
                    <img src={categories2} alt="categories" />
                    <Link to='/products/1'><button>Women</button></Link>
                </div>
            </div>

            <div className='col-2'>
                <img src={categories3} />
                <button>
                    New Season
                </button>
            </div>

            <div className='col-3'>
                <div className='row-1'>
                    <div className='row-1-1'>
                        <img src={categories4} />
                        <button>Men</button>
                    </div>

                    <div className='row-1-1'>
                        <img src={categories5} />
                        <button>Accessories</button>
                    </div>
                </div>

                <div className='row-2'>
                    <img src={categories6} />
                    <button>
                        Shoes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories