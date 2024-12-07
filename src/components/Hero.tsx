import { FaApple } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-4 py-10 bg-gray-100">
      {/* Left Sidebar */}
      <ul className="hidden md:block space-y-4 text-gray-700">
        <li className="cursor-pointer hover:text-blue-600">Women's Fashion →</li>
        <li className="cursor-pointer hover:text-blue-600">Men's Fashion →</li>
        <li className="cursor-pointer hover:text-blue-600">Electronics</li>
        <li className="cursor-pointer hover:text-blue-600">Home & Lifestyle</li>
        <li className="cursor-pointer hover:text-blue-600">Medicine</li>
        <li className="cursor-pointer hover:text-blue-600">Sports & Outdoor</li>
        <li className="cursor-pointer hover:text-blue-600">Baby's & Toys</li>
        <li className="cursor-pointer hover:text-blue-600">Groceries & Pets</li>
        <li className="cursor-pointer hover:text-blue-600">Health & Beauty</li>
      </ul>

      {/* Hero Banner */}
      <div className="w-full max-w-2xl mt-9 md:mt-0 md:mr-[350px] pt-[50px]">
        <div className="relative bg-black text-white p-[50px] rounded-lg flex flex-col md:flex-row items-center md:items-start pt-[50px]">
          <div className="flex-1">
          <FaApple />
            <h2 className=" font-sans">iPhone 14 Series</h2>
            <p className="mt-2 text-2xl font-bold">Up to 10% off Voucher</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 rounded-full text-sm hover:bg-blue-700">
              Shop Now →
            </button>
          </div>
          {/* Image */}
          <div className="mt-9 md:mt-0 md:ml-6">
            <img
              src="/mobile.png"
              alt="iPhone 14"
              className="w-40 md:w-46"
            />
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;