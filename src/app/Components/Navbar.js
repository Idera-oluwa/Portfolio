"use client"
import React,{useState, useEffect} from 'react'

const Navbar = () => {
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
            {show && <div className='w-[83vw] mx-[auto]'>
                <div className='flex flex-row items-center py-[0.8rem]'>
            {/* For Navbar */}
            <h1 className='text-[2rem] text-[#383838] font-semibold cursor-pointer'><span className='text-[#f83b66]'>I</span>sa <span className='text-[#f83b66]'>Z</span>ainab</h1>
            <div className="ml-auto flex flex-row gap-[2rem] font-semibold">
            <a href="#" class="group text-[#383838] hover:text-[#f83b66] transition duration-300">
             Home
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
             <a href="#" class="group text-[#383838] hover:text-[#f83b66] transition duration-300">
             About
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
             <a href="#" class="group text-[#383838] hover:text-[#f83b66] transition duration-300">
             Why Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
             <a href="#" class="group text-[#383838] hover:text-[#f83b66] transition duration-300">
             Portfolio
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
             <a href="#" class="group text-[#383838] hover:text-[#f83b66] transition duration-300">
             Contact Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
</div>
        </div>
            </div>}
        </div>
    )
}

export default Navbar
