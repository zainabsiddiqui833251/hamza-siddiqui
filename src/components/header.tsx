import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='flex flex-col-reverse lg:flex-row justify-between items-center w-full px-4 py-8 bg-[#FFFAFB]'>
            {/* Left Section */}
            <div className="text-center lg:text-left lg:w-1/2 p-3">
                <h1 className='text-[6vw] lg:text-[2.5vw] font-bold font-serif text-[#2B2C28]'>
                    "Customized E-Commerce Solutions for Global Success"
                </h1>
                <h3 className='text-[4vw] lg:text-[1.8vw] font-mono text-[#2B2C28] my-4'>
                    "Helping businesses grow worldwide with proven E-Commerce strategies"
                </h3>
                <Link href='' >
                    <button className='text-[4vw] lg:text-[1.3vw] font-bold py-3 px-6 rounded-lg capitalize mt-4 bg-[#339989] text-white hover:bg-[#7DE2D1] transition-colors duration-300'>
                        Start your journey
                    </button>
                </Link>
            </div>
            
            {/* Right Section with Image */}
            <div className="w-[80%] lg:w-[40%] h-auto mx-auto lg:mr-10 mb-8 lg:mb-0">
                <div className="border-2 border-[#131515] rounded-full">
                    <Image src='/images/img1.png' alt='' width={500} height={500} className='p-6 object-cover rounded-full' />
                </div>
            </div>
        </header>
    )
}

export default Header
