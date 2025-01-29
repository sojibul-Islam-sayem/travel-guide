import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Image from 'next/image'
import img from '../../../public/placeImg.png'
import React from 'react'
import { IoMdTime } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";



const Package = () => {
    return (
        <section className='my-5'>
            <SectionHeader heading='Top Choice' highlighted='Exquisite' subHeading='Tour Packages' />
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9 place-items-center  max-w-[1590px] mx-auto my-6 px-3 '>
                <div className=' bg-white shadow-xl rounded-2xl'>
                    <div className=''>
                        <Image className='w-full rounded-xl' src={img} />
                    </div>
                    <div className='px-5 flex space-y-3 flex-col py-6'>
                        <div className='flex justify-between'>
                            <p className='font-medium flex items-center'><IoMdTime /><span> 07 Days</span></p>
                            <p className='font-bold flex items-center'><FaRegStarHalfStroke /><span>4.5</span></p>
                        </div>
                        <hr />
                        <p className='text-xs'>Location, Country </p>
                        <h3 className='text-4xl'>Spot Name</h3>
                        <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum quis eius eligendi saepe minus?
                        </p>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold flex items-center'><AiOutlineDollar /><span> 2500USD</span></p>
                            <button className='font-semibold  bg-[#83CD20] text-xs text-white px-3 py-2 rounded-3xl'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className=' bg-white shadow-xl rounded-2xl'>
                    <div className=''>
                        <Image className='w-full rounded-xl' src={img} />
                    </div>
                    <div className='px-5 flex space-y-3 flex-col py-6'>
                        <div className='flex justify-between'>
                            <p className='font-medium flex items-center'><IoMdTime /><span> 07 Days</span></p>
                            <p className='font-bold flex items-center'><FaRegStarHalfStroke /><span>4.5</span></p>
                        </div>
                        <hr />
                        <p className='text-xs'>Location, Country </p>
                        <h3 className='text-4xl'>Spot Name</h3>
                        <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum quis eius eligendi saepe minus?
                        </p>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold flex items-center'><AiOutlineDollar /><span> 2500USD</span></p>
                            <button className='font-semibold  bg-[#83CD20] text-xs text-white px-3 py-2 rounded-3xl'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className=' bg-white shadow-xl rounded-2xl'>
                    <div className=''>
                        <Image className='w-full rounded-xl' src={img} />
                    </div>
                    <div className='px-5 flex space-y-3 flex-col py-6'>
                        <div className='flex justify-between'>
                            <p className='font-medium flex items-center'><IoMdTime /><span> 07 Days</span></p>
                            <p className='font-bold flex items-center'><FaRegStarHalfStroke /><span>4.5</span></p>
                        </div>
                        <hr />
                        <p className='text-xs'>Location, Country </p>
                        <h3 className='text-4xl'>Spot Name</h3>
                        <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum quis eius eligendi saepe minus?
                        </p>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold flex items-center'><AiOutlineDollar /><span> 2500USD</span></p>
                            <button className='font-semibold  bg-[#83CD20] text-xs text-white px-3 py-2 rounded-3xl'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className=' bg-white shadow-xl rounded-2xl'>
                    <div className=''>
                        <Image className='w-full rounded-xl' src={img} />
                    </div>
                    <div className='px-5 flex space-y-3 flex-col py-6'>
                        <div className='flex justify-between'>
                            <p className='font-medium flex items-center'><IoMdTime /><span> 07 Days</span></p>
                            <p className='font-bold flex items-center'><FaRegStarHalfStroke /><span>4.5</span></p>
                        </div>
                        <hr />
                        <p className='text-xs'>Location, Country </p>
                        <h3 className='text-4xl'>Spot Name</h3>
                        <p className='text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum quis eius eligendi saepe minus?
                        </p>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold flex items-center'><AiOutlineDollar /><span> 2500USD</span></p>
                            <button className='font-semibold  bg-[#83CD20] text-xs text-white px-3 py-2 rounded-3xl'>Book Now</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>

    )
}

export default Package