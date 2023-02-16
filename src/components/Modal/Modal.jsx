import React from 'react'
import ReactDOM from 'react-dom'
import product1 from '../../assets/img/product1.jpg'
import product2 from '../../assets/img/product2.jpg'
import './Modal.scss'
import Cart from '../Cart/Cart'

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


const Modal = ({ hideCart }) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Overlay hideCart={hideCart} />, document.getElementById('backDrop-modal'))}
            {ReactDOM.createPortal(<Cart hideCart={hideCart} data={data} />, document.getElementById('overlay-modal'))}
        </React.Fragment>
    )
}
export default Modal;
