import React from "react";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-white shadow rounded-lg p-6">
          <IoCall />
            <h3 className="text-lg font-medium text-gray-900 mb-4">Call To Us</h3>
            <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
            <p className="mt-2 text-gray-900 font-semibold">Phone: +8801611112222</p>
            <hr className="my-6" />
            <h3 className="text-lg font-medium text-gray-900 mb-4">Write To Us</h3>
            <p className="text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mt-2 text-gray-900 font-semibold">Email: customer@exclusive.com</p>
            <p className="text-gray-900 font-semibold">Email: support@exclusive.com</p>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-400"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-400"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-400 h-28"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;