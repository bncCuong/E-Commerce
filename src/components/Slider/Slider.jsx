import { KeyboardDoubleArrowLeftIcon, KeyboardDoubleArrowRightIcon } from '../../icon/icon'

import './Slider.scss'
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'
import banner3 from '../../assets/img/banner3.jpg'
import { useState } from 'react'

const dataBanner = [banner1, banner2, banner3]

const Slider = () => {
    const [currentBanner, setCurrentBanner] = useState(0)

    const prevBannerHanler = () => {
        setCurrentBanner(currentBanner === 0 ? 2 : prev => prev - 1)
    }
    const nextBannerHanler = () => {
        setCurrentBanner(currentBanner === 2 ? 0 : prev => prev + 1)
    }
    return (
        <div className='slider'>
            <div className='wrapper' style={{ transform: `translateX(-${currentBanner * 110}vw)` }}>
                <img src={dataBanner[0]} alt='banner1' className='banner' />
                <img src={dataBanner[1]} alt='banner2' className='banner' />
                <img src={dataBanner[2]} alt='banner3' className='banner' />
            </div>

            <div className='icon'>
                <div className='arrow' onClick={prevBannerHanler}>
                    <KeyboardDoubleArrowLeftIcon />
                </div>
                <div className='arrow' onClick={nextBannerHanler}>
                    <KeyboardDoubleArrowRightIcon />
                </div>
            </div>
        </div>)

}

export default Slider