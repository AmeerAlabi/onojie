import React from 'react'
import footer from './assets/footer.png'
function Download() {
  return (
<section className='w-full bg-footer p-16 mt-10 md:bg-blue-950 md:bg-none'>
 <h2 className='text-white text-center text-4xl font-bold '>Download the app now </h2>
  <p className='text-gray-100 font-normal text-center mt-3'>Availble on your favorite store . Start your premiuim experience now . </p>
  <div className='flex justify-center items-center md:flex-col  mt-14  gap-6 md:mt-6  '>
      <button className='  bg-orange-600 w-[120px] h-[68]  rounded-md text-white py-[12px] px-0 md:w-[250px]   '> Playstore </button>
      <button className='  w-[120px] h-[68] rounded-md border-white border-2 text-white py-[10px] px-0 md:text-white md:font-bold md:border-white md:w-[250px] '>Apple Store </button>
    </div>
</section>
  )
}

export default Download
