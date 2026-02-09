"use client"
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Image
              src="/img_8348.png"
              alt="Tranzyte Logo"
              width={200}
              height={200}
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-[#001F54] transition-colors font-medium">
              About
            </a>
            <a href="#courses" className="text-gray-700 hover:text-[#001F54] transition-colors font-medium">
              Courses
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#001F54] transition-colors font-medium">
              Contact
            </a>
            <button className="bg-[#FF6B35] text-white px-6 py-2.5 rounded-lg hover:bg-[#FF8555] transition-all transform hover:scale-105 font-semibold">
              Enroll Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#001F54] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-[#001F54] hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#courses"
              className="block px-3 py-2 text-gray-700 hover:text-[#001F54] hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-[#001F54] hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full bg-[#FF6B35] text-white px-6 py-2.5 rounded-lg hover:bg-[#FF8555] transition-colors font-semibold">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}