import React, { useState } from 'react';
import { MapPin, Clock, Phone, Globe, Calendar, Info } from 'lucide-react';

interface Temple {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  history: string;
  timings: string;
  contact: string;
  website?: string;
  specialDays: string[];
  imageUrl: string;
}

const Temples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  
  const temples: Temple[] = [
    {
      id: 1,
      name: "Sri Varthali Varahi Temple",
      location: "Tamil Nadu, India",
      address: "45 Temple Street, Kumbakonam, Tamil Nadu, India",
      description: "One of the most revered temples dedicated to Varthali Varahi, known for its ancient architecture and powerful energy.",
      history: "Built in the 9th century by the Chola dynasty, this temple has been a center for worship of the goddess for over a millennium. The main shrine houses a self-manifested (swayambhu) idol of the goddess.",
      timings: "6:00 AM - 12:00 PM and 4:00 PM - 8:30 PM daily",
      contact: "+91 9876543210",
      website: "www.srivarthalivarahitemple.org",
      specialDays: [
        "Full Moon Day - Special abhishekam and archana",
        "Navratri Festival - Nine-day celebration with special rituals",
        "Varahi Jayanti - Annual festival celebrating the appearance of the goddess"
      ],
      imageUrl: "https://images.pexels.com/photos/6001391/pexels-photo-6001391.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      name: "Varahi Devi Mandir",
      location: "Karnataka, India",
      address: "Temple Road, Mysore, Karnataka, India",
      description: "A beautiful temple known for its intricate carvings and powerful tantric traditions.",
      history: "This temple dates back to the 12th century and was patronized by the Hoysala rulers. It is renowned for its unique blend of Dravidian and Hoysala architectural styles.",
      timings: "5:30 AM - 11:30 AM and 4:30 PM - 9:00 PM daily",
      contact: "+91 8765432109",
      specialDays: [
        "Tuesdays - Special pujas for removing obstacles",
        "Annual Temple Festival in February",
        "Diwali - Special celebrations and rituals"
      ],
      imageUrl: "https://images.pexels.com/photos/2103420/pexels-photo-2103420.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      name: "Varthali Shakti Peetham",
      location: "Andhra Pradesh, India",
      address: "123 Temple Lane, Tirupati, Andhra Pradesh, India",
      description: "One of the important Shakti Peethams where the goddess is worshipped in her primordial form.",
      history: "This ancient temple is believed to be one of the 18 Shakti Peethams where parts of Goddess Sati fell. The temple has been renovated several times but maintains its spiritual significance.",
      timings: "5:00 AM - 12:30 PM and 4:00 PM - 9:30 PM daily",
      contact: "+91 7654321098",
      website: "www.varthalisaktipeetham.org",
      specialDays: [
        "New Moon Days - Special rituals for ancestral blessings",
        "Navaratri - Grand celebrations with special decorations",
        "Monthly Karthigai days - Special abhishekams"
      ],
      imageUrl: "https://images.pexels.com/photos/19048894/pexels-photo-19048894/free-photo-of-temple-illuminated-at-night.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="temples-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <path d="M 0,40 L 40,0 L 80,40 L 40,80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#temples-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Sacred Temples</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-purple-100">
            Discover the divine abodes of Varthali Varahi across the world
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <MapPin className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold mb-4 text-purple-900">Sacred Pilgrimage Sites</h2>
            <p className="text-gray-700 leading-relaxed">
              Temples dedicated to Varthali Varahi are powerful energy centers where the divine presence of the goddess can be experienced directly. Visiting these sacred sites can bestow spiritual blessings, remove obstacles, and accelerate one's spiritual journey.
            </p>
          </div>
          
          {/* Temples List */}
          <div className="space-y-12">
            {temples.map((temple) => (
              <div key={temple.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-purple-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="h-64 md:h-full overflow-hidden">
                    <img 
                      src={temple.imageUrl} 
                      alt={temple.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="lg:col-span-2 p-6">
                    <h3 className="text-2xl font-serif font-bold mb-3 text-purple-900">{temple.name}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-5 w-5 text-amber-500 mr-2" />
                      <span>{temple.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{temple.description}</p>
                    
                    {/* Tabs */}
                    <div className="border-b border-gray-200 mb-6">
                      <nav className="flex space-x-8 -mb-px">
                        <button
                          onClick={() => setActiveTab(1)}
                          className={`py-2 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 1
                              ? 'border-amber-500 text-amber-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          Details
                        </button>
                        <button
                          onClick={() => setActiveTab(2)}
                          className={`py-2 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 2
                              ? 'border-amber-500 text-amber-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          History
                        </button>
                        <button
                          onClick={() => setActiveTab(3)}
                          className={`py-2 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 3
                              ? 'border-amber-500 text-amber-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          Worship
                        </button>
                      </nav>
                    </div>
                    
                    {/* Tab Content */}
                    <div>
                      {activeTab === 1 && (
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-purple-900 mr-3 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-purple-900 mb-1">Address</h4>
                              <p className="text-gray-700">{temple.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 text-purple-900 mr-3 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-purple-900 mb-1">Timings</h4>
                              <p className="text-gray-700">{temple.timings}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Phone className="h-5 w-5 text-purple-900 mr-3 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-purple-900 mb-1">Contact</h4>
                              <p className="text-gray-700">{temple.contact}</p>
                            </div>
                          </div>
                          {temple.website && (
                            <div className="flex items-start">
                              <Globe className="h-5 w-5 text-purple-900 mr-3 mt-0.5" />
                              <div>
                                <h4 className="font-medium text-purple-900 mb-1">Website</h4>
                                <a 
                                  href={`https://${temple.website}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-purple-600 hover:text-amber-500 transition-colors duration-200"
                                >
                                  {temple.website}
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {activeTab === 2 && (
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <Info className="h-5 w-5 text-purple-900 mr-3 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-purple-900 mb-1">Temple History</h4>
                              <p className="text-gray-700">{temple.history}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 3 && (
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <Calendar className="h-5 w-5 text-purple-900 mr-3 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-purple-900 mb-2">Special Worship Days</h4>
                              <ul className="space-y-2 text-gray-700">
                                {temple.specialDays.map((day, index) => (
                                  <li key={index} className="flex items-start">
                                    <div className="text-amber-500 mr-2">•</div>
                                    <span>{day}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pilgrimage Guide */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-purple-900">Pilgrimage Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">Before Your Visit</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Check temple timings and special days</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Observe simple fasting if possible</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Bring offerings of flowers, fruits, or coconuts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Set a clear intention for your temple visit</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">During Your Visit</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Dress modestly and respectfully</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Remove footwear before entering the temple</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Maintain silence and reverence inside</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Follow all temple customs and rules</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">Spiritual Benefits</h3>
              <p className="text-gray-700 mb-4">
                Visiting temples dedicated to Varthali Varahi can bestow numerous spiritual benefits, including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2">•</div>
                  <span>Cleansing of karmic patterns and negative energies</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2">•</div>
                  <span>Removal of obstacles in spiritual and material pursuits</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2">•</div>
                  <span>Deeper connection with divine consciousness</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2">•</div>
                  <span>Activation of spiritual energy centers within the body</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2">•</div>
                  <span>Reception of the goddess's grace and blessings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Temples;