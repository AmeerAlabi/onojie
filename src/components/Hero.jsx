import React from 'react'
import image from './assets/image-1.png'

const Hero = () => {
  return (
  <section >
    <div className='    md:bg-dimWhite md:bg-none  md:p-2  px-[251px] py-[126px] bg-hero-bg '>
    <h2 className='text-white  font-bold text-2xl text-center md:text-gray-400 '>Food App </h2>
    <h2 className='text-center text-white md:text-black text-5xl mt-1 font-bold  md:leading-tight md:mt-7 '>Why stay hungry when you can order from Bella onojie</h2>
    <p className='text-normal text-white  text-center mt-4 md:text-gray-400 md:text-[20px] md:p-2'>Download the bella onoje's food app from now on  </p>
    <div className='flex justify-center items-center md:flex-col  mt-14  gap-6 md:mt-6  '>
      <button className='  bg-orange-600 w-[150px] h-[68] rounded-full text-white py-[12px] px-0 md:w-[250px]   '> Playstore </button>
      <button className='  w-[150px] h-[68] rounded-full border-white border-2 text-white py-[10px] px-0 md:text-orange-600 md:font-bold md:border-orange-600 md:w-[250px] '>Apple Store </button>
    </div>
    </div>
    <div className=' w-[548px] h-[640px] -translate-y-52 flex justify-center items-center m-auto  md:w-[270px] md:h-[392px] md:-translate-y-0 md:m-auto  md:justify-center md:flex  '>
    <img src={image} alt="" className=' md:m-auto ' />
    </div>
    <div className='   flex justify-center m-auto w-full'>
    <h2 className='font-semibold text-center text-4xl pb-12 md:m-auto md:text-center md:border-b-[0] '>How the app works </h2>
    </div>

   </section>
  )
}

export default Hero
