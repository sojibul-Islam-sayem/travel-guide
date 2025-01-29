import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Image from 'next/image'
import React from 'react'
import img1 from '../../../public/TopDestination/1.jpg'
import img2 from '../../../public/TopDestination/2.jpg'
import img3 from '../../../public/TopDestination/3.jpg'
import img4 from '../../../public/TopDestination/4.jpg'
import './TopDestination.css'

const TopDestination = () => {
    return (
        <section>
            <SectionHeader heading='Top Destinations' highlighted='Explore' subHeading='Discover Your' />
            <div className='grid grid-cols-12 md:px-5 grid-rows-2 max-w-[1610px] my-10 mx-auto gap-2'>
                <div className='col-span-8 relative'>
                    <Image className='w-full rounded-2xl' src={img1} />
                    <div className='destination_content'>
                        <div className='destination'>
                            <h3 className=''>Thailand</h3>
                            <p className=''>Location, Thailand</p>
                        </div>
                        <div>
                            <button className='btn'>
                                15 Trips
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-4  row-span-2 relative'>
                    <Image className='w-full rounded-xl h-full' src={img2} />
                    <div className='destination_content'>
                        <div className='destination'>
                            <h3 className=''>Thailand</h3>
                            <p className=''>Location, Thailand</p>
                        </div>
                        <div>
                            <button className='btn'>
                                15 Trips
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 relative'>
                    <Image className='w-full rounded-xl' src={img3} />
                    <div className='destination_content'>
                        <div className='destination'>
                            <h3 className=''>Thailand</h3>
                            <p className=''>Location, Thailand</p>
                        </div>
                        <div>
                            <button className='btn'>
                                15 Trips
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 relative'>
                    <Image className='w-full rounded-xl' src={img4} />
                    <div className='destination_content'>
                        <div className='destination'>
                            <h3 className=''>Thailand</h3>
                            <p className=''>Location, Thailand</p>
                        </div>
                        <div>
                            <button className='btn'>
                                15 Trips
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopDestination