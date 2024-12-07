import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing the icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid for larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div>
            <h3 className="font-semibold mb-4 text-lg sm:text-xl">Exclusive</h3>
            <p className="text-sm sm:text-base">Get 10% off your first order</p>
            <div className="mt-4">
              <label htmlFor="email" className="sr-only">Enter your email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-md text-gray-900"
              />
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold mb-4 text-lg sm:text-xl">Support</h3>
            <p className="text-sm sm:text-base">111 Bijoy Sarani, Dhaka</p>
            <p className="text-sm sm:text-base">DH 1515, Bangladesh</p>
            <p className="text-sm sm:text-base">Email: exclusive@gmail.com</p>
            <p className="text-sm sm:text-base">Phone: +88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="font-semibold mb-4 text-lg sm:text-xl">Account</h3>
            <ul>
              <li className="text-sm sm:text-base">My Account</li>
              <li className="text-sm sm:text-base">Login / Register</li>
              <li className="text-sm sm:text-base">Cart</li>
              <li className="text-sm sm:text-base">Wishlist</li>
              <li className="text-sm sm:text-base">Shop</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold mb-4 text-lg sm:text-xl">Quick Link</h3>
            <ul>
              <li className="text-sm sm:text-base">Privacy Policy</li>
              <li className="text-sm sm:text-base">Terms Of Use</li>
              <li className="text-sm sm:text-base">FAQ</li>
              <li className="text-sm sm:text-base">Contact</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="font-semibold mb-4 text-lg sm:text-xl">Download App</h3>
            <p className="text-sm sm:text-base">Save $3 With App New User Only</p>
            <div className="mt-4 space-y-2">
              <img
                src="/qr.png"
                alt="Google Play Store logo"
                className="h-10 sm:h-12 lg:h-14 mx-auto text-5xl"
              />
              <img
                src="/app.png"
                alt="Apple App Store logo"
                className="h-10 sm:h-12 lg:h-14 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Social Media Icons (Facebook, Instagram, LinkedIn, Twitter) */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-6 sm:h-8 text-gray-400 hover:text-blue-600 transition-all" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 sm:h-8 text-gray-400 hover:text-pink-600 transition-all" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 sm:h-8 text-gray-400 hover:text-blue-700 transition-all" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-6 sm:h-8 text-gray-400 hover:text-blue-400 transition-all" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500 text-sm sm:text-base">
          © Copyright Rimel 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
