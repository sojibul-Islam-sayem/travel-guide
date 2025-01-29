import React from 'react'
import img1 from '../../../public/coustomer.png'
import Image from 'next/image'

const Coustomers = () => {
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
                <h3 className='text-5xl text-[#034833]'><span className='text-[#83CD20]'>Explore </span>the World with Confidence</h3>
                <div className='grid grid-cols-2 place-items-center gap-3 mt-5'>
                    <div className='bg-white text-center border max-w-[270px] max-h-[208px] border-[#034833] rounded-2xl px-5 py-9 inline-block'>
                        <h3 className='text-5xl text-[#83CD20]'>15+</h3>
                        <p className='text-3xl text-[#034833]'>Adventure Tours</p>
                    </div>
                    <div className='bg-white text-center border  max-w-[270px]  max-h-[208px] border-[#034833] rounded-2xl px-5 py-9 inline-block'>
                        <h3 className='text-5xl text-[#83CD20]'>35+</h3>
                        <p className='text-3xl text-[#034833]'>Luxury Escapes</p>
                    </div>
                    <div className='bg-white text-center border  max-w-[270px]  max-h-[208px] border-[#034833] rounded-2xl px-5 py-9 inline-block'>
                        <h3 className='text-5xl text-[#83CD20]'>35+</h3>
                        <p className='text-3xl text-[#034833]'>Cultural & Heritage Tours</p>
                    </div>
                   
                    <div className='bg-white text-center border  max-w-[270px] max-h-[208px] border-[#034833] rounded-2xl px-5 py-9 inline-block'>
                        <h3 className='text-5xl text-[#83CD20]'>25+</h3>
                        <p className='text-3xl text-[#034833]'>Family Vacation Packages</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Coustomers