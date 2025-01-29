import img1 from '../../../public/coustomer.png'
import Image from 'next/image'
import { FaCheckCircle } from "react-icons/fa";

const Newsletter = () => {
    return (
        <section className='' style={{
            backgroundImage: `url('/3731533_1979344 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className='max-w-[1590px] flex md:flex-row flex-col mx-auto justify-between items-center'>
                <div className='md:w-1/2 w-full'>
                    <h3 className='md:text-5xl text-[#034833] mb-3'>Newslatter</h3>
                    <p className='md:text-base text-xs'>Dreaming of exploring new horizons? Whether you're planning a relaxing beach escape, an exciting city break, or an adventurous trek through nature, we’ve got the perfect trip for you! At [Agency Name], we believe that travel is more than just a journey—it’s an experience that creates lifelong memories.</p>
                    <div className='flex mt-10 bg-[#F1EEEE] rounded-xl pr-5 justify-between'>
                        <input className='bg-transparent pl-5 font-semibold ' type="text" placeholder='Email Address' />
                        <button className='bg-[#83CD20] md:text-base text-xs px-8 py-4 rounded-xl text-white font-bold'>SUBSCRIBE</button>
                    </div>
                </div>
                <div className='md:w-1/2 w-full' >
                    <Image src={img1} />
                </div>
            </div>
        </section>
    )
}
export default Newsletter