import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Play, Star, TrendingUp, Users, Zap } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
            animationDelay: '1s'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center mr-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping mr-2"></div>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <span>New: AI-powered features just landed</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Build The
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
              Future Today
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your wildest ideas into reality with our next-generation platform. 
            <span className="font-medium text-indigo-600"> Lightning-fast development</span>, 
            <span className="font-medium text-purple-600"> enterprise security</span>, and 
            <span className="font-medium text-teal-600"> unlimited scale</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl rounded-xl">
              Start Building Free
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 hover:border-indigo-400 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-xl bg-white/80 backdrop-blur-sm">
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Social Proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-2">
                <Users className="h-6 w-6 text-indigo-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">50K+</span>
              </div>
              <span className="text-gray-600 font-medium">Active Builders</span>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-2">
                <Zap className="h-6 w-6 text-emerald-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">99.9%</span>
              </div>
              <span className="text-gray-600 font-medium">Uptime SLA</span>
              <div className="flex mt-2">
                <div className="w-16 h-2 bg-emerald-200 rounded-full">
                  <div className="w-full h-2 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-3xl font-bold text-gray-900">10M+</span>
              </div>
              <span className="text-gray-600 font-medium">Apps Deployed</span>
              <div className="text-xs text-gray-500 mt-2">Growing daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;