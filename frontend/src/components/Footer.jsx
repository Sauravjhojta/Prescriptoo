import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Left section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="QuickDoc Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            QuickDoc is your reliable partner for managing healthcare with ease. Schedule appointments, maintain health records, and connect with healthcare providers — all in one place.
          </p>
        </div>

        {/* Center section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><Link to="/" className='hover:text-black transition-colors'>Home</Link></li>
            <li><Link to="/about" className='hover:text-black transition-colors'>About Us</Link></li>
            <li><Link to="/contact" className='hover:text-black transition-colors'>Contact Us</Link></li>
            <li><Link to="/my-profile" className='hover:text-black transition-colors'>My Profile</Link></li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-7876719487</li>
            <li><a href="mailto:quickDoc2025@gmail.com" className='hover:text-black'>quickdoc2025@gmail.com</a></li>
          </ul>
        </div>

      </div>

      {/* Footer bottom */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © 2025 QuickDoc — All Rights Reserved. Developed by Saurav, Anuj, Tushar, and Anku.
        </p>
      </div>
    </div>
  )
}

export default Footer
