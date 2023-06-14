"use client"
import React,{useState, useEffect} from 'react'
import { FaBars} from'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = ({openMenu}) => {
    const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > window.innerHeight ) {
          setShow(true)
      }else{
        setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
    return (
        <div className='fixed top-0 z-[11000] mx-[auto] left-0 right-0 bg-white flex items-center shadow-md'>
            {show && <div className='w-[90vw] md:w-[75vw] lg:w-[83vw] mx-[auto]'>
                <div className='flex flex-row items-center py-[0.8rem]'>
            {/* For Navbar */}
            <a href='#'><h1 className='text-[2rem] text-[#383838] font-semibold cursor-pointer'><span className='text-[#f83b66]'>I</span>sa <span className='text-[#f83b66]'>Z</span>ainab</h1></a>
            <div className="ml-auto hidden md:flex flex-row  gap-[2rem] font-semibold">
            <Link  to="home" spy={true} smooth={true} className="group cursor-pointer text-[#383838] hover:text-[#f83b66] transition duration-300">
             Home
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="about" spy={true} smooth={true} className="group cursor-pointer text-[#383838] hover:text-[#f83b66] transition duration-300">
             About
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="whyme" spy={true} smooth={true} className="group cursor-pointer text-[#383838] hover:text-[#f83b66] transition duration-300">
             Why Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="portfolio" spy={true} smooth={true} className="group cursor-pointer text-[#383838] hover:text-[#f83b66] transition duration-300">
             Portfolio
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="contact" spy={true} smooth={true} className="group cursor-pointer text-[#383838] hover:text-[#f83b66] transition duration-300">
             Contact Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
</div>
<div className='flex flex-row md:hidden text-[#383838] ml-auto text-[1.3rem] cursor-pointer'><FaBars onClick={openMenu}/></div>
        </div>
            </div>}
        </div>
    )
}

export default Navbar
