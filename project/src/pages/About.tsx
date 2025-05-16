import React from 'react';
import { BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-20 bg-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="about-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <path d="M 0,40 L 40,0 L 80,40 L 40,80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">About Varthali Varahi</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-purple-100">
            Discover the divine essence and spiritual significance of the powerful goddess
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold mb-6 text-purple-900 flex items-center">
                  <BookOpen className="mr-3 h-7 w-7 text-amber-500" />
                  The Divine Goddess
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Varthali Varahi is a powerful manifestation of the Divine Mother Shakti, combining fierce protective energy with profound spiritual wisdom. She is revered as both a protector and a bestower of spiritual knowledge.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  In her cosmic form, she represents the transformative power of consciousness that helps devotees overcome obstacles and attain higher spiritual states. She embodies the perfect balance of grace and power, offering both protection and profound spiritual transformation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Worshipped across many traditions, Varthali Varahi holds a special place in Tantric practices where she is invoked for spiritual advancement and the removal of negative energies. Her energy clears the path for spiritual seekers, helping them transcend limitations and connect with their highest potential.
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold mb-6 text-purple-900">Iconography & Symbolism</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Varthali Varahi is typically depicted with multiple arms, each holding sacred implements symbolizing different aspects of spiritual power. Her fierce expression represents her ability to destroy negative forces and obstacles on the spiritual path.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-2">Sacred Weapons</h4>
                    <p className="text-gray-700">
                      The various implements she holds—sword, trident, mace, and shield—symbolize her power to cut through illusion, provide protection, and bestow spiritual knowledge.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-2">Third Eye</h4>
                    <p className="text-gray-700">
                      Her prominent third eye represents cosmic wisdom, spiritual insight, and the ability to perceive beyond ordinary reality.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The intricate symbolism in her iconography speaks to her multifaceted nature as both protective mother and spiritual guide. Each element of her depiction contains deeper spiritual meanings relevant to the seeker's journey.
                </p>
              </section>
              
              <section>
                <h2 className="text-3xl font-serif font-bold mb-6 text-purple-900">Spiritual Significance</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Devotees turn to Varthali Varahi for various spiritual and worldly needs. Her worship is believed to provide:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-900 mb-1">Protection from Negative Energies</h4>
                      <p className="text-gray-700">Her fierce aspect serves as a shield against negative influences and energies in one's life and spiritual practice.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-900 mb-1">Removal of Obstacles</h4>
                      <p className="text-gray-700">She helps devotees overcome both internal and external obstacles on their spiritual journey.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-900 mb-1">Spiritual Awakening</h4>
                      <p className="text-gray-700">Her energy facilitates the awakening of spiritual consciousness and higher awareness.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-900 mb-1">Divine Wisdom</h4>
                      <p className="text-gray-700">She bestows spiritual knowledge and insights that transcend ordinary understanding.</p>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Regular worship and meditation on Varthali Varahi can transform one's consciousness, leading to both material prosperity and spiritual evolution. Her energy works in subtle ways to align the devotee with their highest potential and divine purpose.
                </p>
              </section>
            </div>
            
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="sticky top-24">
                <div className="bg-purple-50 rounded-lg overflow-hidden shadow-md mb-8">
                  <img 
                    src="https://images.pexels.com/photos/7672252/pexels-photo-7672252.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Varthali Varahi" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">Varthali Varahi</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex justify-between">
                        <span className="font-medium">Also Known As:</span>
                        <span>Varahi, Dandanatha</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Consort:</span>
                        <span>Vishnu (as Varaha)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Mount:</span>
                        <span>Buffalo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Weapons:</span>
                        <span>Trident, Sword, Shield</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Element:</span>
                        <span>Earth</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                  <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">Sacred Mantra</h3>
                  <p className="text-gray-700 italic mb-4 text-center">
                    "Om Varthaliyai Varahiyai Namaha"
                  </p>
                  <p className="text-gray-600 text-sm">
                    This sacred mantra, when chanted with devotion, invokes the divine energy of Varthali Varahi, bringing protection and spiritual advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;