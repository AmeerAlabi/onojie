import React, {useState} from 'react'
import mlogo from "./assets/mobile-logo.svg"
import dlogo from "./assets/logo.png"
import burger from "./assets/burger.png"
import close from "./assets/cls.png"

const Navbar = () => {

const [toggle, setToggle] = useState(false);

  return (
   <nav className='w-full flex justify-between items-center p-5'> 
    <img src={dlogo} alt="" className='  w-[124px] h-[32px] ' />
    <div>
      <img src={toggle ? close : burger} alt="" className=' w-[28px] h-[28px] object-contain flex-1 justify-end items-center hidden md:block burger ' onClick={() => setToggle((prev) => !prev)}  />
      <ul className='flex items-center space-x-9 md:hidden md:overflow-hidden '>
        <li className=' hover:text-orange-600 ' >Home </li>
        <li className=' hover:text-orange-600 ' >Products </li>
        <li className=' hover:text-orange-600 ' >Faq </li>
        <li className=' hover:text-orange-600 ' >Contact </li>
      </ul>
    </div>

    <div className={` ${toggle ? 'md:flex' : 'hidden'} p-6 absolute top-10 right-0  left-0  mx-4 my-2 min-w-[140px] rounded-xl hidden justify-center  `}>
    <ul className='flex items-center space-x-9 flex-col justify-around px-20 gap-10 py-5  bg-gray-50 rounded-xl'>
        <li className=' hover:bg-orange-600 text-center py-5 px-20  hover:text-white rounded-full shadow-md' >Home</li>
        <li className=' hover:bg-orange-600 text-center py-5 px-20  hover:text-white rounded-full shadow-md' >Products</li>
        <li className=' hover:bg-orange-600 text-center py-5 px-20  hover:text-white rounded-full shadow-md ' >Faq</li>
        <li className=' hover:bg-orange-600  text-center py-5 px-20  hover:text-white rounded-full shadow-md' >Contact</li>
      </ul>
    </div>
   </nav>
  )
}

export default Navbar
// checked✅