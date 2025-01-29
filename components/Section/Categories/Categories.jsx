import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/categories/1.png'
import img2 from '../../../public/categories/2.png'
import img3 from '../../../public/categories/3.png'
import img4 from '../../../public/categories/4.png'
import img5 from '../../../public/categories/5.png'

const Categories = () => {
    return (
        <section className='py-10' style={{
            backgroundImage: `url('/3731533_1979344 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <SectionHeader heading='Unique Tour Categories' highlighted='Explore' subHeading='Discover Wonderful Places'/>
            <div className='flex md:flex-row flex-col items-center md:space-x-4 p-5 md:my-10 lg:p-0 max-w-[1590px] mx-auto'>
                <div className='text-center lg:w-80 md:w-52'>
                    <Image className='rounded-xl' src={img1} />
                    <div>
                        <h3 className='text-[#03422F] lg:text-4xl text-xl'>Wildlife Tours</h3>
                        <p className='text-[#03422F] lg:text-2xl text-xs font-semibold text-opacity-30'>See more....</p>
                    </div>
                </div>
                <div className='text-center lg:w-80 md:w-52'>
                    <Image className='rounded-xl' src={img2} />
                    <div>
                        <h3 className='text-[#03422F] lg:text-4xl text-xl'>Wildlife Tours</h3>
                        <p className='text-[#03422F] lg:text-2xl text-xs font-semibold text-opacity-30'>See more....</p>
                    </div>
                </div>
                <div className='text-center lg:w-80 md:w-52'>
                    <Image className='rounded-xl' src={img3} />
                    <div>
                        <h3 className='text-[#03422F] lg:text-4xl text-xl'>Wildlife Tours</h3>
                        <p className='text-[#03422F] lg:text-2xl text-xs font-semibold text-opacity-30'>See more....</p>
                    </div>
                </div>
                <div className='text-center lg:w-80 md:w-52'>
                    <Image className='rounded-xl' src={img4} />
                    <div>
                        <h3 className='text-[#03422F] lg:text-4xl text-xl'>Wildlife Tours</h3>
                        <p className='text-[#03422F] lg:text-2xl text-xs font-semibold text-opacity-30'>See more....</p>
                    </div>
                </div>
                <div className='text-center lg:w-80 md:w-52'>
                    <Image className='rounded-xl' src={img5} />
                    <div>
                        <h3 className='text-[#03422F] lg:text-4xl md:text-xl'>Wildlife Tours</h3>
                        <p className='text-[#03422F] lg:text-2xl text-xs font-semibold text-opacity-30'>See more....</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories