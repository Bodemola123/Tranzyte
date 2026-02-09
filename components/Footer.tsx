import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#001F54] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="/img_8349.png"
              alt="Tranzyte Logo"
              width={200}
              height={200}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              School of Transport and Logistics Excellence, Nigeria
            </p>
            <p className="text-[#FF6B35] font-semibold mt-4">
              The future of transport education in Africa
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-[#FF6B35] transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Our Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Faculty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Certification</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Fleet Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Driver Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Logistics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Urban Mobility</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-[#FF6B35] shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={18} className="text-[#FF6B35] shrink-0" />
                <span>info@tranzyte.ng</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="text-[#FF6B35] shrink-0" />
                <span>+234 XXX XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              2026 Tranzyte. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#FF6B35] transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#FF6B35] transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-[#FF6B35] transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}