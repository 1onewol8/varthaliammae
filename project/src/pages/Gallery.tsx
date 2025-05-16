import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/7672252/pexels-photo-7672252.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Divine Form of Varahi',
      description: 'Ancient stone carving depicting the powerful form of Varthali Varahi with her divine weapons.',
      category: 'statues'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/6044267/pexels-photo-6044267.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Temple Statue',
      description: 'Beautifully adorned temple statue of the goddess during a festival celebration.',
      category: 'statues'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/6044226/pexels-photo-6044226.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Sacred Flame',
      description: 'The sacred flame used in rituals dedicated to invoking the energy of Varthali Varahi.',
      category: 'rituals'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Ancient Scripture',
      description: 'Ancient palm leaf manuscript containing sacred mantras and rituals of the goddess.',
      category: 'scriptures'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/8851078/pexels-photo-8851078.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Temple Architecture',
      description: 'Sacred temple dedicated to Varthali Varahi with traditional architectural elements.',
      category: 'temples'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/9926046/pexels-photo-9926046.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Festival Celebration',
      description: 'Devotees celebrating an important festival dedicated to the goddess with light offerings.',
      category: 'festivals'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/5723353/pexels-photo-5723353.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Sacred Offerings',
      description: 'Traditional offerings made during pujas to invoke the blessings of Varthali Varahi.',
      category: 'rituals'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Sunset at the Temple',
      description: 'The golden rays of sunset illuminating a temple dedicated to the goddess.',
      category: 'temples'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/8851456/pexels-photo-8851456.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Ancient Artwork',
      description: 'Detailed painting depicting the various forms and aspects of Varthali Varahi.',
      category: 'artwork'
    }
  ];
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Statues', value: 'statues' },
    { name: 'Temples', value: 'temples' },
    { name: 'Rituals', value: 'rituals' },
    { name: 'Festivals', value: 'festivals' },
    { name: 'Artwork', value: 'artwork' },
    { name: 'Scriptures', value: 'scriptures' }
  ];
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="gallery-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <path d="M 0,40 L 40,0 L 80,40 L 40,80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gallery-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Sacred Gallery</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-purple-100">
            Explore divine images, ancient artwork, and sacred temples dedicated to Varthali Varahi
          </p>
        </div>
      </div>
      
      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  activeFilter === filter.value
                    ? 'bg-purple-900 text-white'
                    : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-serif font-bold mb-1 text-purple-900">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description.substring(0, 80)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-900 hover:bg-gray-200 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2 text-purple-900">{selectedImage.title}</h3>
                <p className="text-gray-700">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;