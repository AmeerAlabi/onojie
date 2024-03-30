import React from 'react'
import checkout from './assets/checkout.png'
function Checkout() {
  return (
    <section className='flex flex-row md:flex-col  justify-center items-center '>
    <img src={checkout} alt=""   className="    md:justify-center mr-4  " />
     <div>
      <h3 className=" text-orange-600 text-2xl font-bold md:text-center">Checkout  </h3>
      <h2 className='  text-3xl font-bold md:text-center md:mt-5 mt-3'> when you don checkout   <br /> and we get it delivered </h2>
      <p className='text-gray  md:text-center md:mt-7 font-[18px] text-gray-400 p-2 mt-3'>when you don checkout and get it <br />delivered with ease. </p>
    </div>
  </section>
  )
}

export default Checkout
