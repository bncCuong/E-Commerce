import React from 'react'
import ReactDOM from 'react-dom'
import product1 from '../../assets/img/product1.jpg'
import product2 from '../../assets/img/product2.jpg'
import './Modal.scss'


const data = [
    {
        id: 1,
        img: product1,
        img2: product2,
        title: 'Long Sleeve Grapic T-shirt',
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 2,
        img: product1,
        img2: product2,
        title: 'Long Sleeve Grapic T-shirt',
        isNew: true,
        oldPrice: 19,
        price: 12
    }
    ,
    {
        id: 2,
        img: product1,
        img2: product2,
        title: 'Long Sleeve Grapic T-shirt',
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 2,
        img: product1,
        img2: product2,
        title: 'Long Sleeve Grapic T-shirt',
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 2,
        img: product1,
        img2: product2,
        title: 'Long Sleeve Grapic T-shirt',
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 2,
        img: product1,
        img2: product2,
        title: 'Long Sleeve Grapic T-shirt',
        isNew: true,
        oldPrice: 19,
        price: 12
    }
]

const Overlay = ({ hideCart }) => {
    return (<div className='overlay-modal' onClick={hideCart} ></div>)
}

const CartModal = ({ hideCart }) => {
    return (
        <div className='cart-modal'>
            <h3 className='cart-title'>Product in your Cart</h3>
            <div className='cart-header'>
                <span className='header-des'>Description</span>
                <span>Size</span>
                <span className='header-quantity'>Quantity</span>
                <span className='header-remove'>Remove</span>
                <span>Price</span>
            </div>
            <div className='cart-items'>

                {data.map(item =>
                    <div className='cart-item'>
                        <div className='item-img'>
                            <img src={item.img} alt='product' />
                        </div>
                        <div className='item-info'>
                            <h4 className='item-title'>
                                {item.title}
                            </h4>
                            <p>
                                Product Code: MLSB
                            </p>
                        </div>
                        <div className='item-box'>
                            <span>s</span>
                        </div>

                        <div className='item-quantity'>
                            <button className='item-btn item-box'>
                                +
                            </button>

                            <span> 1 </span>

                            <button className='item-btn item-box'>
                                -
                            </button>
                        </div>
                        <button className='cart-remove item-box'>
                            x
                        </button>
                        <p className='cart-price'>${item.price}</p>
                    </div>

                )}
            </div>

            <div className='price-box'>
                <div className='cart-box'>
                    <span>Discount</span>
                    <span>0.00</span>
                </div>

                <div className='cart-box'>
                    <span>Delivery</span>
                    <span>0.00</span>
                </div>

                <div className='cart-box'>
                    <span>Subtotal</span>
                    <span>0.00</span>
                </div>

                <div className='cart-box'>
                    <span>Total</span>
                    <span>0.00</span>
                </div>
            </div>

            <div className='cart-footer'>
                <div className='code-footer'>
                    <p>If you have a promotion code, please enter code here</p>
                    <div className='input-wrap'>
                        <input name='code' id='code' className='code-input' placeholder='Please enter code here' />
                        <button className='code-btn'>
                            Apply Discount
                        </button>
                    </div>
                </div>

                <div className='footer-box'>
                    <button className='checkout-btn'>
                        Checkout
                    </button>
                    <button className='checkout-btn'>
                        Remove all
                    </button>
                    <button onClick={hideCart} className='continue-btn'>
                        Continue Shopping
                    </button>

                </div>
            </div>

        </div>)
}


const Modal = ({ showCart, hideCart }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Overlay hideCart={hideCart} />, document.getElementById('backDrop-modal'))}
            {ReactDOM.createPortal(<CartModal hideCart={hideCart} />, document.getElementById('overlay-modal'))}
        </React.Fragment>
    )
}
export default Modal;
