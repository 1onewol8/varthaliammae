import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4">Varthali Varahi</h3>
            <p className="text-purple-200 mb-4">
              Dedicated to preserving and sharing the sacred teachings and
              worship of Goddess Varthali Varahi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/mantras" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                  Mantras
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/temples" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                  Temples
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                  Books & Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-purple-200 hover:text-amber-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <h4 className="text-lg font-medium mb-4">Subscribe</h4>
            <p className="text-purple-200 mb-4">
              Receive updates on events, articles, and spiritual guidance.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-purple-800 text-white placeholder-purple-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 transition-colors duration-200 rounded-md font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-purple-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-sm">
            &copy; {new Date().getFullYear()} Varthali Varahi Temple. All rights reserved.
          </p>
          <p className="text-purple-300 text-sm mt-2 md:mt-0 flex items-center">
            Made with 
            <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" /> 
            and devotion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;