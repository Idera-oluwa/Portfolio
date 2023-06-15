import React from 'react'

const WhyMe = () => {
    return (
        <div className='bg-[#f0f3ff] pt-[3.5rem] pb-[5rem]' id='whyme'>
            <div className='w-[90vw] md:w-[75vw] lg:w-[83vw] mx-[auto] mt-[1.5rem] relative'>
            <h1 className='absolute top-0 left-0 right-0 md:mt-[-5.5rem] mt-[-4rem] mx-auto text-center text-[5.5rem] md:text-[7.5rem] font-semibold text-black opacity-[0.03]'>Services</h1>
                <h1 className='text-[1.8rem] md:text-[3rem] font-semibold text-center text-black opacity-90'>Why Choose Me?<span className='text-[#f83b66]'>___</span></h1>
            <p className='text-center text-black opacity-90 font-semibold mt-[0.5rem]'>I am different from others because I provide extra facilities as bonuses such as:</p>
            <div className='grid md:grid-cols-3 mt-[3.5rem] gap-[2rem]'>
             <div className='md:col-span-1 bg-white px-[2rem] pb-[2rem]'>
             <img src='Images/dev1.gif' alt='' className='w-[7rem] mx-auto'/>
             <p className='text-center text-black opacity-90 font-semibold mt-[0.5rem] text-[1.2rem] mt-0 mb-[0.5rem]'>Fully Responsive</p>
             <p className='text-center text-black opacity-90'>My layouts will work on any device, big or small.</p>
             </div>
             <div className='md:col-span-1 bg-white px-[2rem] pb-[2rem]'>
             <img src='Images/speed.gif' alt='' className='w-[7rem] mx-auto'/>
             <p className='text-center text-black opacity-90 font-semibold mt-[0.5rem] text-[1.2rem] mt-0 mb-[0.5rem]'>Fast</p>
             <p className='text-center text-black opacity-90'>Fast load times and lag free interaction, my highest priority.</p>
             </div>
             <div className='md:col-span-1 bg-white px-[2rem] pb-[2rem]'>
             <img src='Images/seo.gif' alt='' className='w-[7rem] mx-auto'/>
             <p className='text-center text-black opacity-90 font-semibold mt-[0.5rem] text-[1.2rem] mt-0 mb-[0.5rem]'>On-Page SEO <span className='text-[#f83b66]'>Included</span></p>
             <p className='text-center text-black opacity-90'>I use proper tags and meta description to make your site SEO friendly.</p>
             </div>
            </div>
            </div>
        </div>
    )
}

export default WhyMe
