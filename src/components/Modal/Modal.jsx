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
                <span>Description</span>
                <span>Size</span>
                <span>Quantity</span>
                <span>Remove</span>
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

            <div>
                <span>SUBTOTAL</span>
                <span>$20</span>
            </div>

            <button>
                Proceed to check out
            </button>

            <button>
                Reset Cart
            </button>

            <button onClick={hideCart}>
                Close
            </button>
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
