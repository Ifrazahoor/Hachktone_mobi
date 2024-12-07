"use client"

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* Logo */}
        <h1 className="text-xl font-bold">Exclusive</h1>

        {/* Links for Larger Screens */}
        <ul className="hidden md:flex space-x-8 text-sm">
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="hidden md:block px-2 py-1 text-black rounded"
          />
          <FiUser className="text-xl cursor-pointer hover:text-gray-400" />
          <FiShoppingCart className="text-xl cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Dropdown for Mobile */}
      {menuOpen && (
        <ul className="mt-4 md:hidden flex flex-col space-y-4">
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Header