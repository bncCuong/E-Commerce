import React from 'react'
import Categories from '../components/Categories/Categories'
import FeatureProduct from '../components/FeatureProducts/FeatureProduct'
import Slider from '../components/Slider/Slider'
import Contact from '../components/Contact/Contact'


const HomePage = () => {
  return (
    <div>
      <Slider />
      <FeatureProduct title={'FeatureProducts'} />
      <Categories />
      <FeatureProduct title={'Trending Fashion'} />

      <Contact />
    </div>
  )
}

export default HomePage