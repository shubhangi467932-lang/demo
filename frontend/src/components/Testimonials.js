import React from "react";
import { Star, Quote, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Senior Engineer",
      company: "TechFlow",
      content: "This platform transformed our entire development workflow. What used to take weeks now happens in days. The AI assistance is incredible - it's like having a senior developer pair programming with you 24/7.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      stat: "300% faster deployment",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Maria Santos",
      role: "Founder & CEO",
      company: "StartupVibe",
      content: "From MVP to Series A in 6 months. This platform didn't just help us build our product - it scaled with us every step of the way. The security and compliance features saved us months of work.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      stat: "Series A in 6 months",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      company: "Enterprise Corp",
      content: "Managing 50+ microservices used to be a nightmare. Now our team focuses on innovation instead of infrastructure. The monitoring and debugging tools are absolutely game-changing.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      stat: "50+ services managed",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "StartupXYZ", logo: "SXZ" },
    { name: "InnovateLab", logo: "IL" },
    { name: "DevFlow", logo: "DF" },
    { name: "CodeForce", logo: "CF" },
    { name: "BuildFast", logo: "BF" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Loved by
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From ambitious startups to Fortune 500 companies, developers choose us 
            to build the next generation of applications.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative">
                <Quote className="h-10 w-10 text-gray-300 mb-6" />
                
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>

                {/* Stat Badge */}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${testimonial.color} text-white rounded-full text-sm font-semibold mb-6`}>
                  {testimonial.stat}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover ring-4 ring-white shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">
                      {testimonial.role} at <span className="font-semibold">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center mb-16">
          <p className="text-gray-500 font-medium mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center w-20 h-20 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                <span className="font-bold text-gray-700 text-lg">{company.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Happy Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10M+</div>
              <div className="text-gray-600">Apps Deployed</div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Success Stories</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your development process? Join thousands of developers who've already made the switch.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;