import React from "react";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Sparkles, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 opacity-50"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive insights, early access to new features, and developer tips delivered weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Join 25,000+ developers. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nexus
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Empowering the next generation of developers to build extraordinary applications 
              with cutting-edge tools and unparalleled support.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-indigo-400 flex-shrink-0" />
                <span>hello@nexus.dev</span>
              </li>
              <li className="flex items-start text-gray-300">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-indigo-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-indigo-400 flex-shrink-0" />
                <span>
                  San Francisco, CA<br />
                  New York, NY<br />
                  London, UK
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 lg:mb-0 text-center lg:text-left">
              © 2025 Nexus Technologies. All rights reserved. Built with ❤️ for developers worldwide.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;