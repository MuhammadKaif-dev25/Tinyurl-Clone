import React from 'react'


const HeroLeft = () => {
  return (
    <div >
        <div className='max-w-130'>
            <h1 className=' font-semibold text-5xl mb-6 leading-tight  '>URL Shortener, Branded Short Links & Analytics</h1>
            <p className='text-lg leading-[1.4]'>Welcome to the original link shortener — simplifying the Internet through the power of the URL since 2002. <br /> <br /> You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.</p>
        </div>
        <div className="flex font-medium text-lg mt-8 gap-5">
    <a href="#" className="bg-white text-black py-1.5 px-3 rounded-md">View Plans</a>
    <a href="#" className="bg-[#0d7693] py-1.5 px-3 rounded-md">Create Free Account</a>
  </div>
    </div>
  )
}

export default HeroLeft
