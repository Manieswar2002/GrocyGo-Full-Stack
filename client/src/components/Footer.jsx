// import React from 'react'
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className='border-t'>
//         <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
//             <p>© All Rights Reserved 2025.</p>

//             <div className='flex items-center gap-4 justify-center text-2xl'>
//                 <a href='' className='hover:text-primary-100'>
//                     <FaFacebook/>
//                 </a>
//                 <a href='' className='hover:text-primary-100'>
//                     <FaInstagram/>
//                 </a>
//                 <a href='' className='hover:text-primary-100'>
//                     <FaLinkedin/>
//                 </a>
//             </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer


import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaGooglePlay, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <footer className="
      flex flex-col
      sm:flex-row
      sm:justify-between
      items-start
      p-5
      bg-white
      border-t
      border-gray-300
      font-sans
    ">
      {/* Left Section: Logo, Social Icons, and Copyright */}
      <div className="
        flex flex-col
        items-start
        mb-4 sm:mb-0
        sm:mr-4
        min-w-[300px]
      ">
        {/* Logo */}
        <div className="mb-2 flex items-center space-x-2">
          <img
            src={logo} 
            alt="GrocyGo Logo"
            className="h-10 w-auto"
          />
            <span className="text-2xl font-semibold">GrocyGo</span>
        </div>
        
        {/* Social Icons */}
        <div className="flex space-x-5 mb-5">
          <a href="#" className="hover:text-primary-100">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-primary-100">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-primary-100">
            <FaLinkedin />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © GrocyGo Private Limited
        </p>
      </div>

      {/* Middle Section: Links */}
      <div className="
        flex flex-wrap
        gap-8 sm:gap-12
        mb-4 sm:mb-0
        sm:mr-4
      ">
        <ul className="list-none p-0 m-0 space-y-2">
        <li>
         
            <Link to="/"  onClick={scrollToTop}  className="hover:text-primary-100">
              Home
            </Link> </li>
            <li>
         
            <Link to="/delivery-areas"  onClick={scrollToTop}  className="hover:text-primary-100">
              Delivery Areas
            </Link> </li>
            <li>
            <Link to="/Customer-Support" onClick={scrollToTop} className="hover:text-primary-100">
            Customer Support
            </Link> </li>
        </ul>
        <ul className="list-none p-0 m-0 space-y-2">
        <li>
            <Link to="/Privacy-Policy" onClick={scrollToTop} className="hover:text-primary-100">
            PrivacyPolicy
            </Link> </li>
            <li>
            <Link to="/Terms-of-Use" onClick={scrollToTop} className="hover:text-primary-100">
            Terms of Use
            </Link> </li>
            <li>
            <Link to="/Responsible-Disclosure-Policy" onClick={scrollToTop} className="hover:text-primary-100">
            Responsible Disclosure Policy
            </Link> </li>
        </ul>
      </div>

      <div className="flex flex-col items-start min-w-[160px]">
      <h4 className="mb-2 font-semibold">Download App</h4>
      <div className="flex flex-col space-y-2">
        <a
          href="#"
          className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition"
        >
          <FaGooglePlay className="mr-2 hover:text-primary-100" />
          <span className="text-sm font-medium hover:text-primary-100">
            Get it on Play Store
          </span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition"
        >
          <FaApple className="mr-2 text-black hover:text-primary-100" />
          <span className="text-sm font-medium hover:text-primary-100">
            Get it on App Store
          </span>
        </a>
      </div>
    </div>

    </footer>
  );
};

export default Footer;

