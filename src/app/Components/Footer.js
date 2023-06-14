import React from 'react'
import {FaFacebookF, FaWhatsapp, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-black opacity-90 h-[6rem] flex items-center py-[0.5rem]'>
        <div className="w-[83vw] mx-[auto] flex flex-col gap-[1rem] sm:gap-[0rem] sm:flex-row sm:justify-between">
         <p className='text-[#bdbdbd] text-center'>Copyright © {new Date().getFullYear()} <span className='text-[white]'>Isa Zainab</span>. All rights reserved.</p>
         <div className='flex flex-row mx-auto gap-[1.5rem]'>
         <a href='https://www.facebook.com/ideraoluwa.isa.1' target="_blank" rel="noreferrer"><FaFacebookF className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/></a>
         <a href='https://wa.me/2349156536793' target="_blank" rel="noreferrer"><FaWhatsapp className='text-[#dcdcdc] hover:text-[green] cursor-pointer'/></a>
         <a href='https://www.linkedin.com/in/zainab-isa-a33066211' target="_blank" rel="noreferrer"><FaLinkedinIn className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/></a>
            </div>
        </div>
        </div>
    )
}

export default Footer