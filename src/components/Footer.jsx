import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        {/* About Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">COVID-19 Dashboard</h3>
          <p className="text-sm">
            Track the latest COVID-19 statistics with real-time data and interactive graphs. 
            Stay informed and safe with up-to-date information on cases, recoveries, and more.
          </p>
        </div>

     

        {/* Social Media Section */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/eshankhairwar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://github.com/eshanKhairwar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      <div className="bg-white py-4 text-center text-black-400 text-sm">
        <p>&copy; {new Date().getFullYear()} COVID-19 Dashboard. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
