import React from 'react'
import {FaFacebookF, FaWhatsapp, FaLinkedinIn} from 'react-icons/fa'
import {ImPhone} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'
import {FiMap} from 'react-icons/fi'

const Contact = () => {
    return (
        <div className="bg-contact-bg md:h-[100vh] h-[200vh] bg-cover bg-center bg-no-repeat bg-fixed relative" id='contact'>
         <div className="absolute h-[100%] w-[100%] bg-[#000000b3] pt-[3.5rem] pb-[5rem]">
         <div className='w-[90vw] md:w-[75vw] lg:w-[83vw] mx-[auto] mt-[1.5rem] grid md:grid-cols-2'>
         <div className='md:col-span-1'>
         <h1 className='text-white text-[2.5rem] font-semibold'>Get in Touch.</h1>
         <div className='bg-[#f83b66] w-[6rem] h-[0.1rem] mt-[1rem]'></div>
         <p className='text-white mt-[1.5rem] w-[100%] md:w-[35rem] text-left mx-auto font-medium'>Want to hire me? If you have any query you can contact me via my email, mobile number or social sites links.</p>
         <p className='text-white mt-[1.5rem] w-[100%] md:w-[35rem] text-left mx-auto font-medium'>This site is owned and operated by Isa Zainab.</p>
         <p className='text-white mt-[1.5rem] w-[100%] md:w-[35rem] text-left mx-auto font-light'>Block 34 flat 4, Tinubu Estate, Odonla, Ikorodu, Lagos state, Nigeria</p>
         <div className='flex flex-row gap-[1.5rem] mt-[2rem]'>
         <a href='https://www.facebook.com/ideraoluwa.isa.1' target="_blank" rel="noreferrer"><FaFacebookF className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/></a>
         <a href='https://wa.me/2349156536793' target="_blank" rel="noreferrer"><FaWhatsapp className='text-[#dcdcdc] hover:text-[green] cursor-pointer'/></a>
         <a href='https://www.linkedin.com/in/zainab-isa-a33066211' target="_blank" rel="noreferrer"><FaLinkedinIn className='text-[#dcdcdc] hover:text-[blue] cursor-pointer'/></a>
            </div>
            <div className='grid grid-cols-solid gap-[2.0rem] mt-[5rem] md:mt-[7rem]'>
                <div className='flex flex-col gap-[0.25cm]'>
                    <div className='w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-[50%] border-2 border-[white]'><ImPhone className='text-[#dcdcdc] text-[1.3rem]'/></div>
                    <a href="tel:+2348086581111"><p className='text-[#dcdcdc] hover:text-[#f83b66] cursor-pointer'>(234) 8086581111</p></a>
                </div>
                <div className='flex flex-col gap-[0.25cm]'>
                    <div className='w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-[50%] border-2 border-[white]'><MdEmail className='text-[#dcdcdc] text-[1.3rem]'/></div>
                    <a href="mailto:ideraoluwaisa29@gmail.com"><p className='text-[#dcdcdc] hover:text-[#f83b66] cursor-pointer'>ideraoluwaisa29@gmail.com</p></a>
                </div>
                <div className='flex flex-col gap-[0.25cm]'>
                    <div className='w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-[50%] border-2 border-[white]'><FiMap className='text-[#dcdcdc] text-[1.3rem]'/></div>
                    <p className='text-[#dcdcdc] hover:text-[#f83b66] cursor-pointer'>Nigeria</p>
                </div>
            </div>
         </div>
         <div className='md:col-span-1'>
          <div className='bg-white w-[95%] md:w-[26rem] pb-[2.5rem] md:ml-auto mt-[1.5rem] md:mt-[0rem]'>
       <div className='bg-[#f83b66] py-[0.5rem]'> <p className='text-white text-[1.3rem] font-normal text-center'>Contact Me</p></div>
          <form className=' pt-[3rem] px-[2rem] flex flex-col gap-[2rem]' 
          action="https://formspree.io/f/mzbqnzba"
           method="POST">
              <input type='text' name='name' placeholder='Name *' required className='border-[1px] border-[#e3e3e3] hover:border-[red] focus:border-[red] text-black opacity-90 w-[100%] py-[0.8rem] px-[0.5rem]'/>
              <input type='text' name='email' placeholder='E-mail *' className='border-[1px] border-[#e3e3e3] hover:border-[red] focus:border-[red] text-black opacity-90 w-[100%] py-[0.8rem] px-[0.5rem]'/>
              <textarea name='message' placeholder='Your Message' className='border-[1px] resize-none border-[#e3e3e3] hover:border-[red] focus:border-[red] text-black opacity-90 h-[10rem] w-[100%] py-[0.8rem] px-[0.5rem]'/>
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
