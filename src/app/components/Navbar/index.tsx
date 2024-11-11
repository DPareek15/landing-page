import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto px-2 sm:px-2 lg:px-2">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="CodingPro logo"
              width={200}
              height={100}
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-24">
            <Link
              href="#"
              className="text-gray-700 hover:text-teal-500 px-3 py-2 text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-teal-500 px-3 py-2 text-sm font-medium"
            >
              Virtual Labs
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-teal-500 px-3 py-2 text-sm font-medium"
            >
              Programs
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-teal-500 px-3 py-2 text-sm font-medium"
            >
              For Colleges
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-teal-500 border-2 border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300">
              Log in
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 text-base font-medium"
            >
              Virtual Labs
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 text-base font-medium"
            >
              Programs
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 text-base font-medium"
            >
              For Colleges
            </Link>
          </div>
          <div className="px-4 py-3 space-y-3">
            <button className="w-full text-teal-500 border-2 border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300">
              Log in
            </button>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
