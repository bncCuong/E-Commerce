import { useParams } from 'react-router-dom'

import './ProductsPage.scss'
import List from '../components/List/List'
import banner from '../assets/img/banner-product.jpg'
import { useState } from 'react'



const ProductsPage = () => {
  const id = parseInt(useParams().id)
  const [filter, setFilter] = useState(0)
  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      {/* //Left bar// */}
      <div className='prd-filter'>
        <div className='prd-categories'>
          <h4>Products categories</h4>
          <div className='cate-items'>
            <label className='label' name='shose'>Shose</label>
            <input type='checkbox' id='shose' className='cate-shose__input' />
          </div>

          <div className='cate-items'>
            <label className='label' name='shirt'>T-shirt</label>
            <input type='checkbox' id='t-shirt' className='cate-shirt__input' />
          </div>

          <div className='cate-items'>
            <label className='label' name='coats'>Coats</label>
            <input type='checkbox' id='coats' className='cate-coats__input' />
          </div>
        </div>

        <div className='filter-price'>
          <h4>Filter by Price</h4>
          <span> 0 </span>
          <input type='range' value={filter} min='1' max='100' onChange={e => setFilter(e.target.value)} />
          <span>{filter}</span>
        </div>

        <div className='low-hight'>
          <h4>Short by</h4>

          <div className='radio-input'>
            <label htmlFor='lowest'>Price (lowest first)</label>
            <input type='radio' id='lowest' value='lowest' name='price' onChange={() => setSort('lowest')} />
          </div>

          <div className='radio-input'>
            <label htmlFor='lowest'>Price (highest first)</label>
            <input type='radio' id='highest' value='highest' name='price' onChange={() => setSort('highest')} />
          </div>
        </div>



      </div>

      {/* //Right Bar */}
      <div className='prd-items'>
        <div className='prd-banner'>
          <img src={banner} alt='banner' />
        </div>

        <div className='prd-lists'>
          <List cateId={id} filter={filter} sort={sort} />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage