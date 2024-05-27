import React from 'react'

const Portfolio = () => {
    return (
        <div className="bg-hero-bg h-[50vh] bg-cover bg-center bg-no-repeat bg-fixed relative" id='portfolio'>
         <div className="absolute h-[100%] w-[100%] bg-[#000000b3] pt-[3.5rem] pb-[5rem]">
         <div className='w-[90vw] md:w-[75vw] lg:w-[83vw] mx-[auto] mt-[1.5rem]'>
         <h1 className='text-[1.8rem] md:text-[3rem] font-semibold text-white text-center'>Portfolio<span className='text-[#f83b66]'>___</span></h1>
            <p className='text-white mt-[1.5rem] w-[100%] sm:w-[25rem] md:w-[35rem] text-center mx-auto'>My projects are not just the catalog, they are the result of my dedication and hard work.</p>
            </div>
            </div>
        </div>
    )
}

export default Portfolio
