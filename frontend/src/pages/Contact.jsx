import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
   <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm px-6 md:px-20'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact QuickDoc" />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>
            Kufri Hill Station <br /> Shimla, H.P
          </p>

          <p className='text-gray-500'>
            Tel: (+91) 7876719487 <br />
            Email: <a href="mailto:quickDoc2025@gmail.com" className='underline hover:text-black'>quickdoc2025@gmail.com</a>
          </p>

          <p className='font-semibold text-lg text-gray-600'>CAREERS AT QUICKDOC</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>

          <Link to="/home">
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
              Explore more
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Contact
