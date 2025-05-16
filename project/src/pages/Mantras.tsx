import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

interface Mantra {
  id: number;
  title: string;
  sanskrit: string;
  meaning: string;
  benefits: string[];
  audioUrl?: string;
}

const Mantras: React.FC = () => {
  const [activeMantra, setActiveMantra] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const mantras: Mantra[] = [
    {
      id: 1,
      title: "Varthali Varahi Mula Mantra",
      sanskrit: "ॐ वर्थलियै वराहियै नमः",
      meaning: "Om Varthaliyai Varahiyai Namaha",
      benefits: [
        "Invokes the primordial energy of the goddess",
        "Provides protection from negative energies",
        "Helps in spiritual advancement",
        "Removes obstacles from the devotee's path"
      ],
      audioUrl: "https://example.com/mantra1.mp3"
    },
    {
      id: 2,
      title: "Varahi Gayatri Mantra",
      sanskrit: "ॐ वराह्यै विद्महे दंष्ट्रकरालिनी धीमहि तन्नो वराही प्रचोदयात्",
      meaning: "Om Varahyai Vidmahe Damshtrakaralini Dhimahi Tanno Varahi Prachodayat",
      benefits: [
        "Awakens spiritual consciousness",
        "Purifies the mind and energy centers",
        "Enhances intellectual abilities",
        "Bestows wisdom and spiritual insights"
      ]
    },
    {
      id: 3,
      title: "Varthali Varahi Kavacham",
      sanskrit: "वर्थलि वराही कवचं प्रवक्ष्यामि महेश्वरि । येन मे सिद्धिदा देवी सर्वकार्यार्थसाधिनी ॥",
      meaning: "I shall recite the protective armor of Varthali Varahi, O Maheshvari. By which the goddess bestows accomplishment and fulfills all purposes.",
      benefits: [
        "Creates a protective shield around the devotee",
        "Safeguards against malefic planetary influences",
        "Destroys negative energies and entities",
        "Grants success in spiritual endeavors"
      ]
    },
    {
      id: 4,
      title: "Varahi Ashtakam",
      sanskrit: "वराहमुखि देवेशि चण्डमुण्डविनाशिनि । वज्रहस्ते महामाये सर्वशत्रुविनाशिनि ॥",
      meaning: "O Goddess with the face of a boar, destroyer of fierce demons, wielder of the thunderbolt, great illusion, destroyer of all enemies.",
      benefits: [
        "Destroys enemies and obstacles",
        "Grants courage and strength",
        "Protects from black magic and evil eye",
        "Bestows prosperity and abundance"
      ]
    },
    {
      id: 5,
      title: "Varthali Varahi Stotram",
      sanskrit: "नमस्ते वर्थलि देवि नमस्ते वरदायिनि । नमस्ते मोक्षदे देवि नमस्ते ज्ञानदायिनि ॥",
      meaning: "Salutations to Goddess Varthali, the bestower of boons. Salutations to the goddess who grants liberation, salutations to the bestower of knowledge.",
      benefits: [
        "Leads to spiritual liberation",
        "Bestows divine knowledge and wisdom",
        "Fulfills righteous desires",
        "Brings peace and harmony in life"
      ]
    }
  ];
  
  const toggleMantra = (id: number) => {
    setActiveMantra(activeMantra === id ? null : id);
  };
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="mantras-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <path d="M 0,40 L 40,0 L 80,40 L 40,80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mantras-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Sacred Mantras</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-purple-100">
            Discover the powerful mantras, chants, and prayers dedicated to Varthali Varahi
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Music className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold mb-4 text-purple-900">The Power of Sacred Sound</h2>
            <p className="text-gray-700 leading-relaxed">
              Mantras are sacred sound formulas that invoke specific energies and vibrations. When recited with devotion and proper pronunciation, they create powerful resonances that align the practitioner with divine consciousness.
            </p>
          </div>
          
          {/* Mantras List */}
          <div className="max-w-4xl mx-auto">
            {mantras.map((mantra) => (
              <div 
                key={mantra.id} 
                className="mb-6 bg-white rounded-lg shadow-md overflow-hidden border border-purple-100"
              >
                <div 
                  className="flex justify-between items-center p-6 cursor-pointer bg-purple-50 hover:bg-purple-100 transition-colors duration-200"
                  onClick={() => toggleMantra(mantra.id)}
                >
                  <h3 className="text-xl font-serif font-bold text-purple-900">{mantra.title}</h3>
                  <div className="text-purple-900">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-6 w-6 transform transition-transform duration-300 ${activeMantra === mantra.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {activeMantra === mantra.id && (
                  <div className="p-6 border-t border-purple-100">
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-purple-600 mb-2">SANSKRIT</h4>
                      <p className="text-xl font-serif mb-4">{mantra.sanskrit}</p>
                      
                      <h4 className="text-sm font-medium text-purple-600 mb-2">MEANING</h4>
                      <p className="text-gray-700 mb-4">{mantra.meaning}</p>
                      
                      <h4 className="text-sm font-medium text-purple-600 mb-2">BENEFITS</h4>
                      <ul className="space-y-2 text-gray-700">
                        {mantra.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="text-amber-500 mr-2">•</div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {mantra.audioUrl && (
                      <div className="mt-6 pt-6 border-t border-purple-100">
                        <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <button 
                              onClick={togglePlay}
                              className="w-10 h-10 rounded-full bg-purple-900 text-white flex items-center justify-center hover:bg-purple-800 transition-colors duration-200"
                            >
                              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                            </button>
                            <span className="text-purple-900 font-medium">Listen to Chant</span>
                          </div>
                          
                          <button 
                            onClick={toggleMute}
                            className="text-purple-900 hover:text-amber-500 transition-colors duration-200"
                          >
                            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                          </button>
                          
                          <audio 
                            ref={audioRef}
                            src={mantra.audioUrl}
                            onEnded={() => setIsPlaying(false)}
                            className="hidden"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Chanting Guidelines */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-purple-900">Guidelines for Chanting</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">Preparation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Sit in a clean, peaceful environment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Face east or north if possible</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Take a few deep breaths to center yourself</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Light a lamp or incense if available</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">Chanting Technique</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Pronounce each syllable clearly and correctly</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Maintain a steady rhythm and pace</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Focus on the meaning and energy of the mantra</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Use a mala (prayer beads) if available</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">Recommended Practice</h3>
              <p className="text-gray-700 mb-4">
                For the best results, chant each mantra 108 times daily for a period of 40 days. This creates a powerful resonance and establishes a deep connection with the divine energy of Varthali Varahi.
              </p>
              <p className="text-gray-700">
                Remember that consistency is more important than quantity. Even a few minutes of focused chanting each day can create profound shifts in consciousness and bring the blessings of the goddess into your life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mantras;