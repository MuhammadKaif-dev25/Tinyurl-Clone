import React from 'react'

const Question = () => {
  return (
    <div className='w-full h-[50vh] bg-[#002342] text-center flex flex-col items-center justify-center'>
      <div className='text-white'>
        <h1 className='font-bold text-3xl mb-6 '>Ready for Shorter, Smarter Links?</h1>
        <p>Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!

</p>
      </div>
      <div className="flex font-medium text-lg mt-8 gap-5 text-center">

       <a href="#" className="bg-white text-black py-1.5 px-3 rounded-md">View Plans</a>
       <a href="#" className="bg-[#0d7693] py-1.5 px-3 rounded-md">Create Free Account</a>
        
      </div>
    </div>
  )
}

export default Question
