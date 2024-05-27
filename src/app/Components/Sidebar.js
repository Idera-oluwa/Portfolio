import React from 'react';
import { FaTimes} from'react-icons/fa'
import {Link} from 'react-scroll'

const Sidebar = ({menuOpen,closeMenu}) =>{
    return(
        <div className='md:hidden block'>
         <div  className={`fixed top-0 ${menuOpen ? `h-[100vh]` : `h-0`} z-[12000] w-[100%] bg-[#000000cc]`}>
        <div className={`flex flex-row transition-all ease-in-out duration-500 container transform -translate-x-full ${menuOpen && `transform translate-x-0`}`}>
            <div className={`w-[6.5cm] h-[100vh] bg-black px-[0.5cm] pt-[0.3cm]`}>
            <a href='#'><h1 className='text-[2rem] text-white font-semibold cursor-pointer'><span className='text-[#f83b66]'>I</span>sa <span className='text-[#f83b66]'>Z</span>ainab</h1></a>
            <div className="flex flex-col gap-[1.3rem] text-[0.95rem] mt-[0.7cm]">
            <Link  to="home" spy={true} smooth={true} onClick={closeMenu} className="group cursor-pointer text-white hover:text-[#f83b66] transition duration-300">
             Home
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="about" spy={true} smooth={true} onClick={closeMenu}  className="group cursor-pointer text-white hover:text-[#f83b66] transition duration-300">
             About
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="whyme" spy={true} smooth={true} onClick={closeMenu}  className="group cursor-pointer text-white hover:text-[#f83b66] transition duration-300">
             Why Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="portfolio" spy={true} smooth={true} onClick={closeMenu}  className="group cursor-pointer text-white hover:text-[#f83b66] transition duration-300">
             Portfolio
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="contact" spy={true} smooth={true} onClick={closeMenu}  className="group cursor-pointer text-white hover:text-[#f83b66] transition duration-300">
             Contact Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
</div>
            </div>
           <FaTimes className='text-white text-[1.5rem] mt-[0.1cm] cursor-pointer' onClick={closeMenu}/>
        </div>
        </div>
        </div>
    )
}

export default Sidebar;