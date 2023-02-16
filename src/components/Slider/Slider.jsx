import { KeyboardDoubleArrowLeftIcon, KeyboardDoubleArrowRightIcon } from '../../icon/icon'

import './Slider.scss'
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'
import banner3 from '../../assets/img/banner3.jpg'
import banner4 from '../../assets/img/banner4.jpg'
import banner5 from '../../assets/img/banner5.jpg'
import { useState } from 'react'

const dataBanner = [banner1, banner2, banner3, banner4, banner5]

const Slider = () => {
    const [currentBanner, setCurrentBanner] = useState(0)

    const prevBannerHanler = () => {
        setCurrentBanner(currentBanner === 0 ? 4 : prev => prev - 1)
    }
    const nextBannerHanler = () => {
        setCurrentBanner(currentBanner === 4 ? 0 : prev => prev + 1)
    }
    return (
        <div className='slider'>
            <div className='wrapper' style={{ transform: `translateX(-${currentBanner * 72}vw)` }}>
                <img src={dataBanner[0]} alt='banner1' className='banner' />
                <img src={dataBanner[1]} alt='banner2' className='banner' />
                <img src={dataBanner[2]} alt='banner3' className='banner' />
                <img src={dataBanner[3]} alt='banner3' className='banner' />
                <img src={dataBanner[4]} alt='banner3' className='banner' />

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