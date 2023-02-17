import './List.scss'
import Card from '../Card/Card';

import { categoriesData } from '../../constants';




const List = () => {
    return (
        <div className='list'>
            {categoriesData.map(item => <Card item={item.items} key={item.id} title={item.title} img={item.img} id={item.id} />)}
        </div>
    )
}

export default List