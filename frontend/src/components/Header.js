import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Logo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 transition-colors duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-2 py-1">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-2 py-1">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-2 py-1">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-2 py-1">
                Contact
              </a>
              <div className="pt-2">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white transition-colors duration-200">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;