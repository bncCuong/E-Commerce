import React from 'react'
import Categories from '../components/Categories/Categories'
import FeatureProduct from '../components/FeatureProducts/FeatureProduct'
import Slider from '../components/Slider/Slider'



const HomePage = () => {
  return (
    <div>

      <Slider />
      <FeatureProduct />
      <Categories />
    </div>
  )
}

export default HomePage