'use client';
import React from 'react'
import {ImPhone} from 'react-icons/im'
import {MdEmail, MdOutlineKeyboardDoubleArrowDown} from 'react-icons/md'
import {FiMap} from 'react-icons/fi'
import {FaFacebookF, FaWhatsapp, FaLinkedinIn} from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div className="bg-hero-bg h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed relative">
        <div className="absolute h-[100%] w-[100%] bg-[#000000b3]">
        <div className='w-[83vw] mx-[auto] mt-[1.5rem]'>
        <div className='flex flex-row'>
            {/* for the top contact stuff */}
            <div className='flex flex-row gap-[0.5cm]'>
                {/* The first part of the top contact stuff */}
                <div className='flex flex-row gap-[0.25cm] cursor-pointer'>
                    <div className='w-[0.65cm] h-[0.65cm] flex items-center justify-center rounded-[50%] border-2 border-[#989898]'><ImPhone className='text-[#dcdcdc] text-[0.7rem]'/></div>
                    <p className='text-[#dcdcdc] hover:text-[#f83b66]'>Phone: + (234) 8086581111</p>
                </div>
                <div className='flex flex-row gap-[0.25cm] cursor-pointer'>
                    <div className='w-[0.65cm] h-[0.65cm] flex items-center justify-center rounded-[50%] border-2 border-[#989898]'><MdEmail className='text-[#dcdcdc] text-[0.7rem]'/></div>
                    <p className='text-[#dcdcdc] hover:text-[#f83b66]'>ideraoluwaisa29@gmail.com</p>
                </div>
                <div className='flex flex-row gap-[0.25cm] cursor-pointer'>
                    <div className='w-[0.65cm] h-[0.65cm] flex items-center justify-center rounded-[50%] border-2 border-[#989898]'><FiMap className='text-[#dcdcdc] text-[0.7rem]'/></div>
                    <p className='text-[#dcdcdc] hover:text-[#f83b66]'>Nigerian</p>
                </div>
            </div>
            <div className='flex flex-row ml-auto gap-[1.5rem]'>
                {/* The second part of the top contact stuff */}
                <FaFacebookF className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/>
                <FaWhatsapp className='text-[#dcdcdc] hover:text-[green] cursor-pointer'/>
                <FaLinkedinIn className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/>
            </div>
        </div>
        <div className='mt-[3rem] flex flex-row'>
            {/* For Navbar */}
            <h1 className='text-[2rem] text-white font-semibold cursor-pointer'><span className='text-[#f83b66]'>I</span>sa <span className='text-[#f83b66]'>Z</span>ainab</h1>
            <div className="ml-auto flex flex-row gap-[2rem]">
            <a href="#" class="group text-white hover:text-[#f83b66] transition duration-300">
             Home
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
             <a href="#" class="group text-white hover:text-[#f83b66] transition duration-300">
             About
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
             <a href="#" class="group text-white hover:text-[#f83b66] transition duration-300">
             Why Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
             <a href="#" class="group text-white hover:text-[#f83b66] transition duration-300">
             Portfolio
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
             <a href="#" class="group text-white hover:text-[#f83b66] transition duration-300">
             Contact Me
             <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#f83b66]"></span>
             </a>
</div>
        </div>
        <div className='text-[3.5rem] mt-[8rem] font-semibold flex justify-center items-center text-white'>
        <Typewriter
            words={["I'm Isa Zainab", "I'm a Frontend Developer", "I Do On-Page SEO"]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className='text-white mt-[1.5rem] w-[40rem] text-center mx-auto'>I am <span className='text-[#f83b66]'>inspired</span> by creating <span className='text-[#f83b66]'>great work</span> with people who are as <span className='text-[#f83b66]'>passionate</span> as I am about building something awesome.</p>
        <div className='flex flex-row gap-[1rem] text-white justify-center mt-[2rem] font-semibold'>
            <button className='bg-[#f83b66] transition duration-300 py-[0.5rem] px-[1.7rem] rounded-[25px] border-[1px] border-[#f83b66] hover:border-[white] hover:bg-transparent'>My Work</button>
            <button className='border-[1px] transition duration-300 border-[white] py-[0.5rem] px-[1.7rem] rounded-[25px] hover:border-[#f83b66] hover:bg-[#f83b66]'>Why Choose Me?</button>
        </div>
        <MdOutlineKeyboardDoubleArrowDown className='text-white text-[3rem] cursor-pointer absolute bottom-0 left-0 right-0 mx-auto animate-bounce'/>
        </div>
        </div>
        </div>
    )
}

export default Hero
