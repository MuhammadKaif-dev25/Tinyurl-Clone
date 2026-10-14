import React from 'react'

const Plans = (props) => {
  return (
    
    <div className=''>
        

            <div className=' justify-around '> 

                <div className='max-w-80'>
                <h2 className='font-bold text-xl mt-12 mb-6'>{props.heading}</h2>
                <p className='text-md mb-6 max-w-60'>{props.detail}</p>
                <img className='w-48 h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110' src={props.img} alt="" />
                </div>
           
            </div>

    </div>
  )
}

export default Plans
