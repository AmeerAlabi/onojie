import React from 'react'
import explore from './assets/varieties.png'

function Explore() {
  return (
    <section className='flex flex-row md:flex-col  justify-center items-center '>
      <img src={explore} alt=""   className="    md:justify-center mr-4  " />
       <div>
        <h3 className=" text-orange-600 text-2xl font-bold md:text-center">Explore varieties </h3>
        <h2 className='  text-3xl font-bold md:text-center md:mt-5 mt-3'> Shop for your best  <br /> meal as e dey hot </h2>
        <p className='text-gray  md:text-center md:mt-7 font-[18px] text-gray-400 p-2 mt-3'>Shop for your favorite meals or drinks  <br /> enjoy while doing it</p>
      </div>
    </section>
  )
}

export default Explore
