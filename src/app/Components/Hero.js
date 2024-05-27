'use client';
import React from 'react'
import {ImPhone} from 'react-icons/im'
import {MdEmail, MdOutlineKeyboardDoubleArrowDown} from 'react-icons/md'
import {FiMap} from 'react-icons/fi'
import {FaFacebookF, FaBars, FaWhatsapp, FaLinkedinIn} from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import {Link} from 'react-scroll'

const Hero = ({openMenu}) => {
    return (
        <div className="bg-hero-bg h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed relative" id='home'>
        <div className="absolute h-[100%] w-[100%] bg-[#000000b3] z-[100]">
        <div className='w-[90vw] md:w-[75vw] lg:w-[83vw] mx-[auto] mt-[1.5rem]'>
        <div className='flex flex-row'>
            {/* for the top contact stuff */}
            <div className='flex flex-row gap-[0.5cm] text-[0.9rem] md:text-[1rem]'>
                {/* The first part of the top contact stuff */}
                <div className='hidden sm:flex flex-row gap-[0.25cm] cursor-pointer'>
                    <div className='w-[0.65cm] h-[0.65cm] flex items-center justify-center rounded-[50%] border-2 border-[#989898]'><ImPhone className='text-[#dcdcdc] text-[0.7rem]'/></div>
                    <a href="tel:+2348086581111"><p className='text-[#dcdcdc] hover:text-[#f83b66]'>Phone: + (234) 8086581111</p></a>
                </div>
                <div className='flex flex-row gap-[0.25cm] cursor-pointer'>
                    <div className='w-[0.65cm] h-[0.65cm] flex items-center justify-center rounded-[50%] border-2 border-[#989898]'><MdEmail className='text-[#dcdcdc] text-[0.7rem]'/></div>
                    <a href="mailto:ideraoluwaisa29@gmail.com"><p className='text-[#dcdcdc] hover:text-[#f83b66]'>ideraoluwaisa29@gmail.com</p></a>
                </div>
                <div className='hidden lg:flex flex-row gap-[0.25cm] cursor-pointer'>
                    <div className='w-[0.65cm] h-[0.65cm] flex items-center justify-center rounded-[50%] border-2 border-[#989898]'><FiMap className='text-[#dcdcdc] text-[0.7rem]'/></div>
                    <p className='text-[#dcdcdc] hover:text-[#f83b66]'>Nigerian</p>
                </div>
            </div>
            <div className='hidden md:flex flex-row ml-auto gap-[1.5rem]'>
                {/* The second part of the top contact stuff */}
                <a href='https://www.facebook.com/ideraoluwa.isa.1' target="_blank" rel="noreferrer"><FaFacebookF className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/></a>
                <a href='https://wa.me/2349156536793' target="_blank" rel="noreferrer"><FaWhatsapp className='text-[#dcdcdc] hover:text-[green] cursor-pointer'/> </a>
                <a href='https://www.linkedin.com/in/zainab-isa-a33066211' target="_blank" rel="noreferrer"><FaLinkedinIn className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/></a>
            </div>
        </div>
        <div className='mt-[3rem] flex flex-row items-center'>
            {/* For Navbar */}
            <a href='#'><h1 className='text-[2rem] text-white font-semibold cursor-pointer'><span className='text-[#f83b66]'>I</span>sa <span className='text-[#f83b66]'>Z</span>ainab</h1></a>
            <div className="ml-auto hidden md:flex flex-row gap-[2rem] text-[0.95rem]">
            <Link  to="home" spy={true} smooth={true} className="group text-white hover:text-[#f83b66] transition duration-300 cursor-pointer">
             Home
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="about" spy={true} smooth={true} className="group text-white hover:text-[#f83b66] transition duration-300 cursor-pointer">
             About
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="whyme" spy={true} smooth={true} className="group text-white hover:text-[#f83b66] transition duration-300 cursor-pointer">
             Why Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="portfolio" spy={true} smooth={true} className="group text-white hover:text-[#f83b66] transition duration-300 cursor-pointer">
             Portfolio
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
             <Link  to="contact" spy={true} smooth={true} className="group text-white hover:text-[#f83b66] transition duration-300 cursor-pointer">
             Contact Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </Link>
</div>
              <div className='flex flex-row md:hidden text-[white] ml-auto text-[1.3rem] cursor-pointer'><FaBars onClick={openMenu}/></div>
        </div>
        <div className='text-[1.8rem] md:text-[2.7rem] lg:text-[3.5rem] mt-[10rem] sm:mt-[8rem] font-semibold flex justify-center items-center text-white'>
        <Typewriter
            words={["I'm Isa Zainab", "I'm Frontend Developer", "I Do On-Page SEO"]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className='text-white mt-[1.5rem] w-[100%] sm:w-[30rem] md:w-[40rem] text-center mx-auto text-[1.05rem]'>I am <span className='text-[#f83b66]'>inspired</span> by creating <span className='text-[#f83b66]'>great work</span> with people who are as <span className='text-[#f83b66]'>passionate</span> as I am about building something awesome.</p>
        <div className='flex flex-row gap-[1rem] text-[0.9rem] text-white justify-center mt-[2rem] font-semibold'>
        <Link  to="portfolio" spy={true} smooth={true}><button className='bg-[#f83b66] transition duration-300 py-[0.5rem] px-[1.7rem] rounded-[25px] border-[1px] border-[#f83b66] hover:border-[white] hover:bg-transparent'>My Work</button></Link> 
        <Link  to="whyme" spy={true} smooth={true}><button className='border-[1px] transition duration-300 border-[white] py-[0.5rem] px-[1.7rem] rounded-[25px] hover:border-[#f83b66] hover:bg-[#f83b66]'>Why Choose Me?</button></Link> 
        </div>
        <Link  to="about" spy={true} smooth={true}><MdOutlineKeyboardDoubleArrowDown className='text-white text-[3rem] cursor-pointer absolute bottom-0 left-0 right-0 mx-auto animate-bounce'/></Link>
        </div>
        </div>
        </div>
    )
}

export default Hero
