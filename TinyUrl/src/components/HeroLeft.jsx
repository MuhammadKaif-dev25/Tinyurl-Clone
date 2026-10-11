import React from 'react'


const HeroLeft = () => {
  return (
    <div className='h-screen- w-1/2 flex-col'>
        <div className='max-w-137.5'>
            <h1 className=' font-medium text-6xl leading- mb-6 leading-tight  '>URL Shortener, Branded Short Links & Analytics</h1>
            <p className='text-xl'>Welcome to the original link shortener — simplifying the Internet through the power of the URL since 2002. <br /> <br /> You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.</p>
        </div>
        <div className='flex font-medium text-2xl mt-4'>
            <button className='bg-white py-3 px-5 text-black rounded-md mt-4 mr-4 ' ><a href="">View Plans</a></button>
            <button className='bg-[#0d7693] py-3 px-5  rounded-md mt-4 mr-4 ' ><a href="">Create Free Account</a></button>
        </div>
    </div>
  )
}

export default HeroLeft
