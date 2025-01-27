import React from 'react'
import "./Banner.css"
import img from '../../public/banner.png'
import bgImg from '../../public/36879 (1) 1.png'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";


const Banner = () => {
    return (
        <section
        style={{
            backgroundImage: `url('/36879 (1) 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
            className='banner'>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='w-1/2 banner_text'>
                <h3 className='header'>Effortless Process
                    Dreams Come To Life</h3>
                <p className='banner_p'>A seamless journey not only simplifies the process but also brings your dreams closer to reality.
                    With every step, the once distant aspirations become attainable, empowering you to achieve
                    your goals effortlessly and confidently.</p>
                <div className='flex items-center space-x-10'>
                    <div className='select'>
                        <p>Where to</p>
                        <h5><span>Select The Place</span> <IoIosArrowDown />
                        </h5>
                    </div>
                    <div className='select'>
                        <p>Destination</p>
                        <h5><span>Select The Place</span> <IoIosArrowDown />
                        </h5>
                    </div>
                    <div className='select'>
                        <p>Date</p>
                        <h5><span>3/27/2025</span><IoIosArrowDown />
                        </h5>
                    </div>
                    <button className='text-xl font-bold p-4 rounded-xl bg-[#83CD20] text-white'>Find Now</button>
                </div>
            </div>
            <div className='md:w-5/12'>
                <div className='w-[600px]'>
                    <Image className='w-full'
                        src={img}></Image>
                </div>
            </div>

        </section>
    )
}

export default Banner