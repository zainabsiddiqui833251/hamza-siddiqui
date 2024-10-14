// pages/contact.tsx

import React from 'react';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div className="contact w-full mt-20 bg-white text-gray-800">
      <div className="contact-cont w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="contact-info w-full md:w-1/2 p-5">
          <h1 className="text-[#339989] text-4xl font-bold">&quot;We&apos;re Here to Help!&quot;</h1>
          <h3 className="text-[#F9A3A3] text-2xl font-semibold">
            &quot;Got a question? Fill out the form, and our team will get back to you within 24 hours.&quot;
          </h3>
          <ul className="mt-4 ml-2 font-semibold text-lg">
            <h3 className="capitalize text-xl text-[#222222]">contact info:</h3>
            <li>
              <i className="bi bi-envelope"></i> 
              <Link href="mailto:askahllc564@gmail.com" className="text-[#222222]">askahllc564@gmail.com</Link>
            </li>
            <li>
              <i className="bi bi-telephone"></i> 
              <Link href="tel:+16466311936" className="text-[#222222]">+16466311936</Link>
            </li>
            <li>
              <i className="bi bi-geo-alt-fill"></i> 
              <Link href="" className="text-[#222222]">Florida, USA</Link>
            </li>
            <li>
              <i className="bi bi-telephone"></i> 
              <Link href="tel:+9233273726941" className="text-[#222222]">+9233273726941</Link>
            </li>
          </ul>
          <h3 className="capitalize text-xl text-[#222222] mt-4 ml-2 font-semibold">social links</h3>
          <ul className="social-links flex justify-start gap-6 text-3xl ml-2 items-center">
            <li>
              <Link href="">
                <i className="bi bi-facebook text-[#B3C7E3] hover:text-[#F9A3A3]"></i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="bi bi-tiktok text-[#B3C7E3] hover:text-[#F9A3A3]"></i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="bi bi-linkedin text-[#B3C7E3] hover:text-[#F9A3A3]"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact-form w-full md:w-1/2 p-7">
          <h2 className="text-[#339989] text-3xl font-bold capitalize text-center">contact us</h2>
          <form action="https://formspree.io/f/mrbggkrg" method="POST">
            <label htmlFor="name">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                name="name"
                className="text-lg m-5 font-semibold focus:border-b-2 focus:outline-none text-[#222222] border-b-2 border-[#A3E0D1] w-full"
                required
              />
            </label>
            <br />
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="text-lg m-5 font-semibold focus:border-b-2 focus:outline-none text-[#222222] border-b-2 border-[#A3E0D1] w-full"
                required
              />
            </label>
            <br />
            <label htmlFor="message">
              <textarea
                name="message"
                rows={1}
                id="message"
                placeholder="Type your query here.."
                className="text-lg m-5 font-semibold focus:border-b-2 focus:outline-none text-[#222222] border-b-2 border-[#A3E0D1] w-full"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-[#B3C7E3] border-solid border-[#222222] border-2 block mx-auto rounded-xl capitalize p-2 hover:bg-[#F9A3A3] hover:text-white text-lg font-bold"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
