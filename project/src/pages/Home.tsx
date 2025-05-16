import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Info, BookOpen, MapPin, Calendar } from 'lucide-react';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center transition-opacity duration-1000 opacity-0"
      >
        {/* Parallax Background */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6044226/pexels-photo-6044226.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            filter: "brightness(0.5)"
          }}
        ></div>

        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-purple-900/70 to-purple-900/90"></div>
        
        {/* Sacred Geometry Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%)`,
            backgroundSize: '100px 100px',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          {/* Divine Symbol */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-20 h-20 mx-auto bg-amber-500 rounded-full flex items-center justify-center transform rotate-45">
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center transform -rotate-45">
                <span className="text-white font-serif text-2xl">ॐ</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Varthali Varahi
          </h1>
          
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 animate-fade-in-up text-purple-100" style={{ animationDelay: '1.2s' }}>
            Divine embodiment of cosmic energy and spiritual transformation
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <Link 
              to="/about" 
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 transition-all duration-300 rounded-md font-medium inline-flex items-center transform hover:scale-105"
            >
              Begin Your Journey <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/mantras" 
              className="px-8 py-4 bg-purple-800 hover:bg-purple-700 transition-all duration-300 rounded-md font-medium inline-flex items-center transform hover:scale-105"
            >
              Sacred Mantras <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6044267/pexels-photo-6044267.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Sacred statue of deity" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-serif text-lg">Divine</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-purple-900">The Divine Goddess</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Varthali Varahi is the powerful form of the Divine Mother, representing the cosmic energy that transforms and protects. As an embodiment of Shakti, she removes obstacles and bestows wisdom to her devotees.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Her worship brings spiritual advancement, protection from negative energies, and the fulfillment of righteous desires. Devotees seek her blessings for strength, courage, and the removal of obstacles on their spiritual path.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-purple-900 font-medium hover:text-amber-500 transition-colors duration-200"
              >
                Learn more about Varthali Varahi
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Sections */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-purple-900">Explore Sacred Knowledge</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7672252/pexels-photo-7672252.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="About Varthali Varahi" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 text-amber-500">
                  <Info className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-purple-900">About the Deity</h3>
                <p className="text-gray-600 mb-4">
                  Discover the history, significance, and divine forms of Varthali Varahi.
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-purple-900 font-medium hover:text-amber-500 transition-colors duration-200"
                >
                  Explore
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Sacred Mantras" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 text-amber-500">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-purple-900">Sacred Mantras</h3>
                <p className="text-gray-600 mb-4">
                  Learn the powerful mantras and prayers dedicated to invoking her blessings.
                </p>
                <Link 
                  to="/mantras" 
                  className="inline-flex items-center text-purple-900 font-medium hover:text-amber-500 transition-colors duration-200"
                >
                  Discover
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8851078/pexels-photo-8851078.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Sacred Temples" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 text-amber-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-purple-900">Sacred Temples</h3>
                <p className="text-gray-600 mb-4">
                  Visit the sacred temples and shrines dedicated to Varthali Varahi.
                </p>
                <Link 
                  to="/temples" 
                  className="inline-flex items-center text-purple-900 font-medium hover:text-amber-500 transition-colors duration-200"
                >
                  Visit
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/9926046/pexels-photo-9926046.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Festival Calendar" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 text-amber-500">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-purple-900">Sacred Calendar</h3>
                <p className="text-gray-600 mb-4">
                  Mark the auspicious days and festivals dedicated to the goddess.
                </p>
                <Link 
                  to="/calendar" 
                  className="inline-flex items-center text-purple-900 font-medium hover:text-amber-500 transition-colors duration-200"
                >
                  View Calendar
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-purple-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="sacred-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <path d="M 0,40 L 40,0 L 80,40 L 40,80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sacred-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-8">Devotee Experiences</h2>
            <blockquote className="text-xl italic mb-8">
              "Through the grace of Varthali Varahi, I've experienced profound spiritual transformation. Her divine energy has helped me overcome obstacles and find inner peace."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500">
                <img 
                  src="https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Devotee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4 text-left">
                <p className="font-medium">Rajesh Kumar</p>
                <p className="text-purple-300 text-sm">Devotee for 15 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-purple-900">Begin Your Spiritual Journey</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Connect with the divine energy of Varthali Varahi and embark on a transformative spiritual path. Explore her teachings, mantras, and sacred wisdom.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/mantras" 
              className="px-6 py-3 bg-purple-900 text-white hover:bg-purple-800 transition-colors duration-200 rounded-md font-medium"
            >
              Learn Mantras
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 transition-colors duration-200 rounded-md font-medium"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;