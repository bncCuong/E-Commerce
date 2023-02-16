import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cartActions } from '../../redux/cartSlice'
import './Cart.scss'
const Cart = ({ hideCart }) => {
    const params = useParams()

    const dispatch = useDispatch()
    const data = useSelector(state => state.shoppingCart.items)


    const addItemHanler = () => {
        dispatch(cartActions.addItemToCart({
            id: params,
        }))
    }

    const removeItemHanler = () => {
        dispatch(cartActions.removeItemFromCart(params))
    }
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
                                {item.name}
                            </h4>
                            <p>
                                Product Code: MLSB
                            </p>
                        </div>
                        <div className='item-box'>
                            <span>s</span>
                        </div>

                        <div className='item-quantity'>
                            <button className='item-btn item-box' onClick={addItemHanler}>
                                +
                            </button>

                            <span> 1 </span>

                            <button className='item-btn item-box'>
                                -
                            </button>
                        </div>
                        <button className='cart-remove item-box' onClick={removeItemHanler}>
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
                    <span>Total quantity</span>
                    <span>0.00</span>
                </div>

                <div className='cart-box'>
                    <span>Total Price</span>
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

export default Cart