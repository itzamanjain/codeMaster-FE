'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <Link href='/'>
        <div className="text-white text-2xl font-bold">
          CodeMaster
        </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Profile</a>
          <Link href="/login" className="hover:text-gray-300">Login</Link>
        </div>

        {/* Hamburger Icon (shown on small screens) */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </div>
      </div>

      {/* Mobile Menu (shown when hamburger icon is clicked) */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 text-white mt-2 space-y-2">
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">About</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Contact</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Profile</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
