import React from 'react'
import ReactDOM from 'react-dom'
import product1 from '../../assets/img/product1.jpg'
import product2 from '../../assets/img/product2.jpg'
import './Modal.scss'
import Cart from '../Cart/Cart'


const Overlay = ({ hideCart }) => {
    return (<div className='overlay-modal' onClick={hideCart} ></div>)
}


const Modal = ({ hideCart }) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Overlay hideCart={hideCart} />, document.getElementById('backDrop-modal'))}
            {ReactDOM.createPortal(<Cart hideCart={hideCart} />, document.getElementById('overlay-modal'))}
        </React.Fragment>
    )
}
export default Modal;
