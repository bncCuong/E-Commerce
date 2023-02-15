import './FeatureProduct.scss'
import Card from '../Card/Card'

import product1 from '../../assets/img/product1.jpg'
import product2 from '../../assets/img/product2.jpg'
const FeatureProduct = (props) => {

    const data = [{
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
    },
    {
        id: 3,
        img2: product2,
        img: product1,
        title: 'Long Sleeve Grapic T-shirt',
        isNew: false,
        oldPrice: 19,
        price: 12
    },
    {
        id: 4,
        img: product1,
        img2: product2,
        title: 'Long Sleeve Grapic T-shirt',
        isNew: false,
        oldPrice: 19,
        price: 12
    }]
    return (
        <div className='featureProduct'>
            <div className='title'>
                <h4>{props.title}</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet, qui quibusdam tempore nisi in aspernatur! Quibusdam quasi amet, totam, officia vero enim corrupti dolorem similique soluta nobis ex fuga!</p>
            </div>

            <div className='product'>
                {data.map(item => <Card key={item.id} isNew={item.isNew} title={item.title} oldPrice={item.oldPrice} price={item.price} img={item.img} img2={item.img2} />)}
            </div>
        </div>
    )
}

export default FeatureProduct