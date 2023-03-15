import React from 'react'
import {FaFacebookF, FaWhatsapp, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-black opacity-90 h-[6rem] flex items-center'>
        <div className="w-[83vw] mx-[auto] flex flex-row justify-between">
         <p className='text-[#bdbdbd]'>Copyright © {new Date().getFullYear()} <span className='text-[white]'>Isa Zainab</span>. All rights reserved.</p>
         <div className='flex flex-row gap-[1.5rem]'>
                <FaFacebookF className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/>
                <FaWhatsapp className='text-[#dcdcdc] hover:text-[green] cursor-pointer'/>
                <FaLinkedinIn className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/>
            </div>
        </div>
        </div>
    )
}

export default Footer