import { Link } from 'react-router-dom'
import categories1 from '../../assets/img/categories1.webp'
import categories2 from '../../assets/img/categories2.jpeg'
import categories3 from '../../assets/img/categories3.jpeg'
import categories4 from '../../assets/img/categories4.jpeg'
import categories5 from '../../assets/img/categories5.webp'
import categories6 from '../../assets/img/categories6.jpg'
import './Categories.scss'
import { categoriesData } from '../../constants'

const Categories = () => {

    return (
        <div className='categories'>
            <div className='col-1'>
                <div className='row-1'>
                    <img src={categories1} alt='categories' />
                    <Link to='/products/Sale'><button>Sale</button></Link>
                </div>
                <div className='row-1'>
                    <img src={categories2} alt="categories" />
                    <Link to='/products/women'><button>Women</button></Link>
                </div>
            </div>

            <div className='col-2'>
                <img src={categories3} />
                <Link to='/products/newseason'>
                    <button>
                        New Season
                    </button>
                </Link>
            </div>

            <div className='col-3'>
                <div className='row-1'>
                    <div className='row-1-1'>
                        <img src={categories4} />
                        <Link to='/products/men'><button>Men</button></Link>
                    </div>

                    <div className='row-1-1'>
                        <img src={categories5} />
                        <Link to='/products/accessories'><button>Accessories</button></Link>
                    </div>
                </div>

                <div className='row-2'>
                    <img src={categories6} />
                    <Link to='/products/shoes'>
                        <button>
                            Shoes
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories