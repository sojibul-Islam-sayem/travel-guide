import React from 'react'
import img1 from '../../../public/coustomer.png'
import Image from 'next/image'
import { FaCheckCircle } from "react-icons/fa";

const WithUs = () => {
    return (
        <section className='flex md:flex-row flex-col items-center' style={{
            backgroundImage: `url('/3731533_1979344 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div>
                <Image src={img1} />
            </div>
            <div className='px-5'>
                <p className='text-3xl text-[#034833]'>Travel  Point</p>
                <h3 className='text-5xl text-[#034833]'><span className='text-[#83CD20]'>Why</span> Travel with Us?</h3>
                <div className='flex flex-col space-y-5 mt-10'>
                    <p className='text-[#034833] space-x-3 flex items-center'><FaCheckCircle className='text-2xl' /><span className='text-black text-opacity-60 text-2xl'>Handpicked destinations tailored to your interests</span></p>
                    <p className='text-[#034833] space-x-3 flex items-center'><FaCheckCircle className='text-2xl' /><span className='text-black text-opacity-60 text-2xl'>Exclusive deals on flights, hotels, and tours</span></p>
                    <p className='text-[#034833] space-x-3 flex items-center'><FaCheckCircle className='text-2xl' /><span className='text-black text-opacity-60 text-2xl'>24/7 customer support to ensure a smooth trip</span></p>
                    <p className='text-[#034833] space-x-3 flex items-center'><FaCheckCircle className='text-2xl' /><span className='text-black text-opacity-60 text-2xl'>Expert travel tips and guides for your journey</span></p>
                    <p className='text-[#034833] space-x-3 flex items-center'><FaCheckCircle className='text-2xl' /><span className='text-black text-opacity-60 text-2xl'>Trusted Network of Partners</span></p>
                    <p className='text-[#034833] space-x-3 flex items-center'><FaCheckCircle className='text-2xl' /><span className='text-black text-opacity-60 text-2xl'>Trusted Network of Partners</span></p>
                    <p className='text-[#034833] space-x-3 flex items-center'><FaCheckCircle className='text-2xl' /><span className='text-black text-opacity-60 text-2xl'>Exclusive deals on flights, hotels, and tours</span></p>
                </div>
            </div>
        </section>
    )
}

export default WithUs