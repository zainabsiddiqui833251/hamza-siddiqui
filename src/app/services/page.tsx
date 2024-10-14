import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Services = () => {
    return (
        <main className='w-full'>
            <div className="parent w-[90%] m-auto p-6" style={{ backgroundColor: '#FFFAFB' }}>
                <h1 className='text-center text-[48px] font-extrabold' style={{ color: '#2B2C28' }}>Our Services</h1>
                <h2 className='text-left m-4 font-medium text-[32px]' style={{ color: '#339989' }}>A-to-Z eCommerce Services:</h2>
                <div className="service-cards flex justify-between items-center m-5 text-[24px] flex-wrap">
                    <div className="card border-solid border-black border-2 p-3 m-4 text-center rounded-xl w-[300px] h-[150px] hover:bg-[#7DE2D1] transition duration-300 ease-in-out">
                        <i className="bi bi-box-seam text-[36px]"></i>
                        <h3 style={{ color: '#131515' }}>Amazon Private Label Launches</h3>
                    </div>
                    <div className="card border-solid border-black border-2 p-3 m-4 text-center rounded-xl w-[300px] h-[150px] hover:bg-[#7DE2D1] transition duration-300 ease-in-out">
                        <i className="bi bi-cart text-[36px]"></i>
                        <h3 style={{ color: '#131515' }}>Product Sourcing & Brand Creation</h3>
                    </div>
                    <div className="card border-solid border-black border-2 p-3 m-4 text-center rounded-xl w-[300px] h-[150px] hover:bg-[#7DE2D1] transition duration-300 ease-in-out">
                        <i className="bi bi-graph-up text-[36px]"></i>
                        <h3 style={{ color: '#131515' }}>Amazon PPC Management</h3>
                    </div>
                    <div className="card border-solid border-black border-2 p-3 m-4 text-center rounded-xl w-[300px] h-[150px] hover:bg-[#7DE2D1] transition duration-300 ease-in-out">
                        <i className="bi bi-shop-window text-[36px]"></i>
                        <h3 style={{ color: '#131515' }}>Amazon Store Optimization</h3>
                    </div>
                </div>
                <div className="text-[24px] text-center">
                    <h2 className='text-left m-4 font-medium text-[32px]' style={{ color: '#339989' }}>Customized Solutions:</h2>
                    <p style={{ color: '#131515' }}>&quot; Our services are tailored to your business goals, whether you&apos;re a startup or an established brand. &quot;</p>
                </div>
            </div>
        </main>
    );
}

export default Services;
