import React from 'react'

const SectionHeader = ({ heading, subHeading, highlighted }) => {
    return (
        <div className='text-center'>
            <p className='lg:text-2xl md:text-xl text-xs '>{heading}</p>
            <h3 className='lg:text-5xl md:text-3xl text-xl'> <span className='text-[#83CD20]'>{highlighted} </span>{subHeading}</h3>
        </div>
    )
}
export default SectionHeader