import React from 'react'
import {portfolioData} from './data'
import {MdLaptopMac} from 'react-icons/md'

const Catalogue = () => {
    return (
        <div className="bg-white relative">
         <div className="w-[83vw] mx-[auto] py-[5rem]">
         <div className='w-[10rem] h-[5rem] bg-[white] absolute z-[10000] top-0 left-0 right-0 mx-auto mt-[-3rem] rounded-tl-[100px] rounded-tr-[100px] rounded-b-[0px]'>
         <p className='text-center text-[#f83b66] mt-[0.5rem] cursor-pointer'>All</p>
         <div className='bg-[#f83b66] w-[4rem] h-[0.1rem] mt-[0.5rem] mx-auto'></div>
         </div>
         <div className='grid grid-cols-fluid gap-[2rem]'>
             {portfolioData.map((data)=>{
                 const {id,img,link,title}=data;
                 return(
              <div key={id}>
                                    <a href={link} target="_blank" rel="noreferrer"><div className='cursor-pointer relative group'>
                <div className='absolute invisible group-hover:visible w-[100%] h-[100%] bg-[#000000b3] flex items-center justify-center'>
                <div>
                    <div className='w-[2rem] h-[2rem] bg-[#f83b66] flex items-center justify-center absolute right-0 mt-[1rem] top-0 mr-[1rem]'>
                        <p className='text-white'>ALL</p>
                    </div>
                <h1 className='text-white text-[1.2rem] font-semibold'>{title}</h1>
                <div className='bg-white flex items-center justify-center mx-auto rounded-full w-[2rem] h-[2rem]'><MdLaptopMac className='text-black text-[1.2rem]'/></div>
                </div>
                </div>
                    <img src={img} alt=''/>
                </div></a>
              </div>
                 )
             })}
         </div>
            </div>
        </div>
    )
}

export default Catalogue;