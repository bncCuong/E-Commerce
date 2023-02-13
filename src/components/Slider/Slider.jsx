import './Slider.scss'
import banner1 from '../../assets/img/banner1.jpeg'
import banner2 from '../../assets/img/banner2.webp'
import banner3 from '../../assets/img/banner3.webp'

const Slider = () => {
    return (
        <div>
            <img src={banner1} alt='banner1' width={1420} />
            <img src={banner2} alt='banner2' width={1420} />
            <img src={banner3} alt='banner3' width={1420} />
        </div>)

}

export default Slider