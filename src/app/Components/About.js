import React from 'react'
import {ImCheckmark} from 'react-icons/im'

const About = () => {
    return (
        <div className='w-[83vw] mx-[auto] mt-[5.5rem] pb-[5.5rem] grid grid-cols-2'>
           <div className='col-span-1 flex items-center'> <img src='Images/Lps2.png' alt=''/></div>
            <div className='col-span-1 relative'>
            <h1 className='absolute top-0 left-0 mt-[-5.5rem] ml-[-1rem] text-[7.5rem] font-semibold text-black opacity-[0.03]'>About</h1>
        <h1 className='text-[3rem] font-semibold text-black opacity-90'>About Me<span className='text-[#f83b66]'>___</span></h1>
            <p className='text-black opacity-90 mt-[1rem]'>Isa Zainab is a Software Developer with a primary focus on frontend development, experienced in HTML, CSS, JavaScript, and React Js.</p>
            <p className='font-semibold text-black opacity-90 mt-[1rem]'>This site is owned and operated by Isa Zainab.</p>
            <p className='font-semibold text-black opacity-90'>Skills:</p>
            <p className='text-black opacity-90'>HTML5, CSS3, Javascript, Bootstrap, SASS, React Js, Git, Redux, Tailwind, Next Js, Graphql, Graphcms, Firebase</p>
            <p className='font-semibold text-black opacity-90 mt-[1rem]'>Key Features:</p>
            <div className='flex flex-row gap-[1rem] items-center text-black opacity-90'><ImCheckmark className='text-[#f83b66]'/><p>Fully Responsive</p></div>
            <div className='flex flex-row gap-[1rem] items-center text-black opacity-90'><ImCheckmark className='text-[#f83b66]'/><p>Cross browser compatible</p></div>
            <div className='flex flex-row gap-[1rem] items-center text-black opacity-90'><ImCheckmark className='text-[#f83b66]'/><p>Well written code</p></div>
            <div className='flex flex-row gap-[1rem] items-center text-black opacity-90'><ImCheckmark className='text-[#f83b66]'/><p>Images Optimization Included</p></div>
            <div className='flex flex-row gap-[1rem] items-center text-black opacity-90'><ImCheckmark className='text-[#f83b66]'/><p>Website Speed Optimization Included</p></div>
            <div className='flex flex-row gap-[1rem] items-center text-black opacity-90'><ImCheckmark className='text-[#f83b66]'/><p>On-Page SEO Included</p></div>
            <div className='flex flex-row gap-[1rem] items-center text-black opacity-90'><ImCheckmark className='text-[#f83b66]'/><p>Dynamic Websites - On Demand</p></div>
            <div className='flex flex-row gap-[1rem] text-white mt-[2rem] font-semibold'>
            <button className='bg-[#f83b66] transition duration-300 py-[0.5rem] px-[1.7rem] rounded-[25px] border-[1px] border-[#f83b66] hover:border-[white] hover:bg-[#000000e6]'>My Work</button>
            <button className='border-[1px] transition duration-300 border-[white] py-[0.5rem] px-[1.7rem] rounded-[25px] bg-[#000000e6] hover:border-[#f83b66] hover:bg-[#f83b66]'>Contact Me</button>
        </div>
            </div>
        </div>
    )
}

export default About
