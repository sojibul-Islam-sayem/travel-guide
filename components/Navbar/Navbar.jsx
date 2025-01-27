"use client";

import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";



const Navbar = () => {
    // const [toggle, setToggle] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    console.log(isToggled);


    const navItem = <>
        <li>Home</li>
        <li>Destination</li>
        <li>Tours</li>
        <li>Pages</li>
        <li>About Us</li>
        <li>News</li>
        <li>Contact</li>
    </>
    return (
        <div className="flex justify-between text-[#034833] items-center">
            <div className="font-bold text-2xl md:text-4xl">
                Logo
            </div>
            <ul className='md:flex space-x-4 hidden font-medium'>
                {navItem}
            </ul>
            <div className="flex  items-center">
                <button className="bg-[#83CD20] md:flex hidden items-center rounded-full space-x-2 md:px-10 px-5 md:text-xl text-xs font-semibold md
                md:py-5 py-3 text-white">
                    <p>Book Now Here </p>
                    <FaArrowRightLong/>
                </button>
                <IoMenuSharp className="md:hidden text-4xl" onClick={() => setIsToggled(!isToggled)} />
            </div>
        </div>
    )
}

export default Navbar