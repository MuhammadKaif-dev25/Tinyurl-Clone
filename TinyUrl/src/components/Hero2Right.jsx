import React from 'react'

const Hero2Right = () => {
  return (
    <div className=' w-1/2 h-full p-10 flex flex-col items-center justify-center '>

     <div className='max-w-100'>

     <h1 className='text-white font-bold text-4xl leading-tight  '>Link Shortening Done Quick and Easy</h1>
      <p className='text-lg leading-[1.4] text-white mt-6'>Our URL shortener is not only among the first-ever link shorteners on the Internet — it's the best out there.

          <br /> <br />Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online.

          <br /><br />Wave goodbye to long, clunky links and give your audiences the experiences they deserve!</p>

     </div>

          <div className='flex font-medium text-lg mt-8 gap-5'>
            <a href="" className="bg-white text-black py-1.5 px-3 rounded-md">View Plans</a>
            <a href="" className="bg-[#002342]  text-white py-1.5 px-3 rounded-md">Contact Sales</a>
          </div>

    </div>
  )
}

export default Hero2Right
