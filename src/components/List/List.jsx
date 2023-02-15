import './List.scss'
import Card from '../Card/Card';
import product1 from '../../assets/img/product1.jpg';
import product2 from '../../assets/img/product2.jpg';

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
},
{
    id: 4,
    img: product1,
    img2: product2,
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




const List = () => {

    return (
        <div className='list'>
            {data.map(item => <Card item={item} key={item.id} title={item.title} img={item.img} img2={item.img2} id={item.id} />)}
        </div>
    )
}

export default List