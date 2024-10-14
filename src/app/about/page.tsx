import React from 'react'
import Image from 'next/image'
import 'bootstrap-icons/font/bootstrap-icons.css'

const About = () => {
    return (
        <main className="bg-[#FFFAFB] p-6 lg:p-12">
            <div className="parent flex flex-col lg:flex-row justify-between items-center h-auto ">
                
                {/* Left Image Section */}
                <div className="child1-about p-4 text-center lg:text-left lg:ml-14 lg:w-[45%] w-full">
                    <Image src='/images/img2.1.png' alt='' width={600} height={600} className="mx-auto lg:mx-0" />
                </div>
                
                {/* Right Content Section */}
                <div className="child2-about lg:mr-10 w-full lg:w-[45%] h-auto mt-8 lg:mt-0 p-6 bg-white shadow-lg rounded-lg">
                    <h1 className='text-[6vw] lg:text-[2.5vw] capitalize font-bold font-serif text-[#2B2C28]'>
                        About Us
                    </h1>
                    <p className='text-base lg:text-[1.2vw] mt-3 text-[#2B2C28]'>
                        &quot; My name is Hamza Siddiqui, and I specialize in providing comprehensive e-commerce solutions with a focus on Amazon. With expertise in offering A-TO-Z services, I assist businesses in navigating the complexities of Amazon, from product hunting to product sourcing, inventory management, listing optimization, PPC advertising, and account management. My approach is client-centered, ensuring customized strategies that drive growth and maximize potential. We are committed to delivering professional and reliable support, helping businesses scale their operations and achieve success on Amazon through tailored, data-driven solutions. &quot;
                    </p>
                    <p className='text-base lg:text-[1.2vw] mt-4 text-[#2B2C28]'>
                        &quot; With a global reach and expertise in private label models, we ensure businesses thrive in both domestic and international markets. &quot;
                    </p>
                    
                    {/* Qualities Section */}
                    <div className="qualities flex flex-wrap justify-center lg:justify-start gap-5 text-[1.2vw] text-center mt-8">
                        
                        {/* Quality 1 */}
                        <div className="quality-1 border-2 border-[#131515] p-4 rounded-xl w-[150px] bg-[#FFFAFB] hover:bg-[#339989] hover:text-white transition-colors">
                            <i className="bi bi-tools text-[6vw] lg:text-[2.5vw]"></i>
                            <h3 className="text-[3.5vw] lg:text-[1.3vw] font-bold mt-2">Comprehensive <br /> Solutions</h3>
                        </div>
                        
                        {/* Quality 2 */}
                        <div className="quality-2 border-2 border-[#131515] p-4 rounded-xl w-[150px] bg-[#FFFAFB] hover:bg-[#339989] hover:text-white transition-colors">
                            <i className="bi bi-globe text-[6vw] lg:text-[2.5vw]"></i>
                            <h3 className="text-[3.5vw] lg:text-[1.3vw] font-bold mt-2">Global <br /> Expertise</h3>
                        </div>
                        
                        {/* Quality 3 */}
                        <div className="quality-3 border-2 border-[#131515] p-4 rounded-xl w-[150px] bg-[#FFFAFB] hover:bg-[#339989] hover:text-white transition-colors">
                            <i className="bi bi-person-check text-[6vw] lg:text-[2.5vw]"></i>
                            <h3 className="text-[3.5vw] lg:text-[1.3vw] font-bold mt-2">Tailored <br /> Services</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About

