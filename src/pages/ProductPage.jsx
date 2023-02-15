import "./ProductPage.scss"
import { AddShoppingCartIcon, FavoriteBorderIcon, CompareArrowsIcon } from "../icon/icon"
import product1 from '../assets/img/product1.jpg'
import product2 from '../assets/img/product2.jpg'
import { Link } from "react-router-dom"
import { useState } from "react"

const ProductPage = () => {
  const [mainImg, setMainImg] = useState(product1)
  return (
    <div className='product'>

      <div className='leftBar'>
        <div className='firstImg' onClick={() => setMainImg(product1)} >
          <img src={product1} alt='product' />
        </div>

        <div className='secondImg' onClick={() => setMainImg(product2)} >
          <img src={product2} alt='product' />
        </div>
      </div>

      <div className='product_content'>
        <div className="mainImg">
          <img src={mainImg} alt='product' />
        </div>

        {/* //product infomation  */}
        <div className="product-description">
          <h3> Long Sleeve Grapic T-shirt</h3>

          <p className="product-price">$20</p>

          <div className="button">
            <div className="btn-plus">
              +
            </div>
            <span>1</span>
            <div className="btn-minus">
              -
            </div>
          </div>

          <p className="description-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat quia perspiciatis aspernatur sapiente cum quaerat illo doloremque enim reiciendis beatae rerum nihil deserunt itaque, tempora est aperiam possimus nesciunt.
          </p>

          <button className="product-btn">

            <AddShoppingCartIcon />
            Add to cart

          </button>

          <div className="product-add">
            <Link to='/'>
              <FavoriteBorderIcon />
              <span>Add to wish list</span>
            </Link>

            <Link to='/'>
              <CompareArrowsIcon />
              <span>Add to Compare</span>
            </Link>
          </div>

          <div> <div className="info">
            <p>
              Vendo: Polo
            </p>

            <p>
              Product Type: T-shirt
            </p>

            <p>
              Tag: T-Shirt, Man, Top
            </p>
            <div />

            <div className="bottom">
              <p>description</p>
              <p className="bottom-middle">additional infomation</p>
              <p>faq</p>
            </div>

          </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ProductPage