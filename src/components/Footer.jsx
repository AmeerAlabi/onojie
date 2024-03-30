import React from 'react'
import logo from './assets/logo.png'
import facebook from './assets/facebook.png'
import insta from './assets/instagram.png'
import twitter from './assets/twitter.png'
function Footer() {
  return (
<section className='w-full p-6'>
  <div  className=' w-[810px] h-[133px]  flex justify-between items-center m-auto md:flex-col  md:gap-9 md:w-full md:pb-12 '>
  <img src={logo} alt="" className='w-[206px] h-[78px]  md:hidden' />
  <div className='flex justify-around items-center'>
    <img src={facebook} alt=""  className='w-[39px] h-[39px] mr-4 ' />
    <img src={twitter} alt="" className='w-[39px] h-[39px] mr-4 ' />
    <img src={insta} alt="" className='w-[39px] h-[39px] ' />
  </div>
   <p>copywright 2020 Bella onojie.com </p>
  </div>

</section>
  )
}

export default Footer
