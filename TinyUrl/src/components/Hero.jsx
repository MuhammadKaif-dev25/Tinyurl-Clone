import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className='flex w-full h-screen bg-[#002342] text-white px-25 py-20'>
      <HeroLeft />
      <HeroRight />
    </div>
  )
}

export default Hero
