import React from 'react'
import {FaFacebookF, FaWhatsapp, FaLinkedinIn} from 'react-icons/fa'
import {ImPhone} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'
import {FiMap} from 'react-icons/fi'

const Contact = () => {
    return (
        <div className="bg-contact-bg h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed relative">
         <div className="absolute h-[100%] w-[100%] bg-[#000000b3] pt-[3.5rem] pb-[5rem]">
         <div className='w-[83vw] mx-[auto] mt-[1.5rem] grid grid-cols-2'>
         <div className='col-span-1'>
         <h1 className='text-white text-[2.5rem] font-semibold'>Get in Touch.</h1>
         <div className='bg-[#f83b66] w-[6rem] h-[0.1rem] mt-[1rem]'></div>
         <p className='text-white mt-[1.5rem] w-[35rem] text-left mx-auto font-medium'>Want to hire me? If you have any query you can contact me via my email, mobile number or social sites links.</p>
         <p className='text-white mt-[1.5rem] w-[35rem] text-left mx-auto font-medium'>This site is owned and operated by Isa Zainab.</p>
         <p className='text-white mt-[1.5rem] w-[35rem] text-left mx-auto font-light'>Block 34 flat 4, Tinubu Estate, Odonla, Ikorodu, Lagos state, Nigeria</p>
         <div className='flex flex-row gap-[1.5rem] mt-[2rem]'>
                <FaFacebookF className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/>
                <FaWhatsapp className='text-[#dcdcdc] hover:text-[green] cursor-pointer'/>
                <FaLinkedinIn className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/>
            </div>
            <div className='flex flex-row gap-[1.9rem] mt-[7rem]'>
                <div className='flex flex-col gap-[0.25cm]'>
                    <div className='w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-[50%] border-2 border-[white]'><ImPhone className='text-[#dcdcdc] text-[1.3rem]'/></div>
                    <p className='text-[#dcdcdc] hover:text-[#f83b66] cursor-pointer'>(234) 8086581111</p>
                </div>
                <div className='flex flex-col gap-[0.25cm]'>
                    <div className='w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-[50%] border-2 border-[white]'><MdEmail className='text-[#dcdcdc] text-[1.3rem]'/></div>
                    <p className='text-[#dcdcdc] hover:text-[#f83b66] cursor-pointer'>ideraoluwaisa29@gmail.com</p>
                </div>
                <div className='flex flex-col gap-[0.25cm]'>
                    <div className='w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-[50%] border-2 border-[white]'><FiMap className='text-[#dcdcdc] text-[1.3rem]'/></div>
                    <p className='text-[#dcdcdc] hover:text-[#f83b66] cursor-pointer'>Nigeria</p>
                </div>
            </div>
         </div>
         <div className='col-span-1'>
          <div className='bg-white w-[26rem] pb-[3rem] ml-auto'>
       <div className='bg-[#f83b66] py-[0.5rem]'> <p className='text-white text-[1.3rem] font-normal text-center'>Contact Me</p></div>
          <form className=' pt-[3rem] px-[2rem] flex flex-col gap-[2rem]'>
              <input type='text' placeholder='Name *' className='border-[1px] border-[#e3e3e3] text-black opacity-90 w-[100%] py-[0.8rem] px-[0.5rem]'/>
              <input type='text' placeholder='E-mail *' className='border-[1px] border-[#e3e3e3] text-black opacity-90 w-[100%] py-[0.8rem] px-[0.5rem]'/>
              <textarea placeholder='Your Message' className='border-[1px] resize-none border-[#e3e3e3] text-black opacity-90 h-[10rem] w-[100%] py-[0.8rem] px-[0.5rem]'/>
              <button className='bg-[#f83b66] transition duration-300 py-[0.5rem] px-[1.7rem] rounded-[25px] border-[1px] border-[#f83b66] hover:border-[white] hover:bg-[#000000e6] text-[white] w-[10rem]'>Send Message</button>
          </form>
          </div>
         </div>
         </div>
         </div>
         </div>
    )
}

export default Contact
