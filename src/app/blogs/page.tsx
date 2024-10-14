import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blogs = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mb-3 mt-5 text-[#B3C7E3]">Latest Articles & Updates</h1>
      <div className="blog-parent flex justify-center items-center flex-wrap">
        <div className="blog-card w-full sm:w-[300px] border-solid border-[#333333] border-2 rounded-xl m-[3%] mt-[5%] p-3">
          <div className="blog-img">
            <Image 
              src='/images/blog-1.jpeg' 
              alt='blog 1' 
              width={500} 
              height={500} 
              className='w-[100%] h-[150px] border-solid border-[#333333] border-2' 
            />
          </div>
          <div className="blog-content">
            <h2 className='text-[18px] font-bold text-[#333333]'>Top 5 Strategies for Launching a Brand on Amazon</h2>
            <p className='text-[16px] mt-2 text-[#333333]'>Your source for insights on Amazon brand launches and e-commerce strategies</p>
            <Link href='/blog-1'>
              <button className='border-solid border-2 border-[#333333] p-2 rounded-lg mt-3 capitalize text-[18px] hover:bg-[#B3C7E3] hover:text-black'>learn more</button>
            </Link>
          </div>
        </div>
        <div className="blog-card w-full sm:w-[300px] border-solid border-[#333333] border-2 rounded-xl m-[3%] mt-[5%] p-3">
          <div className="blog-img">
            <Image 
              src='/images/blog-2.jpeg' 
              alt='blog 2' 
              width={500} 
              height={500} 
              className='w-[100%] h-[150px] border-solid border-[#333333] border-2' 
            />
          </div>
          <div className="blog-content">
            <h2 className='text-[18px] font-bold text-[#333333]'>How Amazon PPC Can Boost Your Sales by 50%</h2>
            <p className='text-[16px] mt-2 text-[#333333]'>Explore how Amazon PPC can elevate your sales and enhance product visibility.</p>
            <Link href='/blog-2'>
              <button className='border-solid border-2 border-[#333333] p-2 rounded-lg mt-3 capitalize text-[18px] hover:bg-[#B3C7E3] hover:text-black'>learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
