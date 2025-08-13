import React from "react";
import { Zap, Shield, Smartphone, Globe, Clock, Users, Code, Database, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Lightning Performance",
      description: "Sub-second deployment times with edge computing. Your users experience blazing-fast load times worldwide.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-500" />,
      title: "Fort Knox Security",
      description: "Military-grade encryption, automated security scans, and SOC 2 compliance built into every deployment.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-500" />,
      title: "AI-Powered Coding",
      description: "Intelligent code completion, automatic bug detection, and smart refactoring suggestions powered by GPT-4.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "Infinite Scale",
      description: "Auto-scaling infrastructure that grows with your success. From MVP to IPO without breaking a sweat.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-pink-500" />,
      title: "Mobile-First Design",
      description: "Progressive web apps that feel native. One codebase, infinite devices, perfect experience everywhere.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-500" />,
      title: "Deploy in Seconds",
      description: "Git push to production in under 30 seconds. Rollbacks, A/B testing, and canary deployments included.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const stats = [
    { number: "10x", label: "Faster Development" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50+", label: "Integrations" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
            POWERFUL FEATURES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              And More
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop juggling dozens of tools. Our comprehensive platform includes everything 
            you need to build, deploy, and scale world-class applications.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative">
                <div className="mb-6 p-3 bg-gray-50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 p-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who've already made the switch to next-generation development.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;