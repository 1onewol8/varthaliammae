import React, { useState } from 'react';
import { Book, File, PlayCircle, Download, ExternalLink } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  author?: string;
  description: string;
  type: 'book' | 'article' | 'video' | 'download';
  link?: string;
  thumbnail?: string;
  tags: string[];
}

const Resources: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const resources: Resource[] = [
    {
      id: 1,
      title: "The Divine Path of Varthali Varahi",
      author: "Dr. Ramesh Kumar",
      description: "A comprehensive guide to the worship, mantras, and spiritual practices related to Varthali Varahi.",
      type: "book",
      link: "#",
      thumbnail: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tags: ["spirituality", "practices", "mantras"]
    },
    {
      id: 2,
      title: "Understanding the Tantric Aspects of Varahi Worship",
      author: "Dr. Meera Sharma",
      description: "An scholarly article exploring the esoteric dimensions of Varahi worship in the tantric tradition.",
      type: "article",
      link: "#",
      tags: ["tantra", "advanced", "esoteric"]
    },
    {
      id: 3,
      title: "Varthali Varahi: The Divine Protector",
      author: "Prof. Anand Joshi",
      description: "This book explores the protective aspects of the goddess and how to invoke her energy for spiritual protection.",
      type: "book",
      link: "#",
      thumbnail: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tags: ["protection", "spirituality", "beginner"]
    },
    {
      id: 4,
      title: "Sacred Rituals of Varthali Varahi",
      description: "A step-by-step video guide to performing the main rituals dedicated to the goddess.",
      type: "video",
      link: "#",
      thumbnail: "https://images.pexels.com/photos/5619109/pexels-photo-5619109.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tags: ["rituals", "practices", "beginner"]
    },
    {
      id: 5,
      title: "Varahi Sahasranama (1000 Names)",
      author: "Traditional",
      description: "The complete text of the thousand names of the goddess with Sanskrit text and English translation.",
      type: "download",
      link: "#",
      tags: ["mantras", "advanced", "sanskrit"]
    },
    {
      id: 6,
      title: "The Iconography of Varthali Varahi",
      author: "Dr. Sunita Rao",
      description: "A detailed analysis of the various forms and symbols associated with the goddess in ancient art.",
      type: "article",
      link: "#",
      tags: ["art", "symbolism", "history"]
    },
    {
      id: 7,
      title: "Meditation Techniques for Connecting with Varahi Energy",
      description: "A guided video on advanced meditation practices to experience the divine presence of the goddess.",
      type: "video",
      link: "#",
      thumbnail: "https://images.pexels.com/photos/8964925/pexels-photo-8964925.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tags: ["meditation", "practices", "advanced"]
    },
    {
      id: 8,
      title: "Daily Prayers to Varthali Varahi",
      description: "A downloadable PDF with morning and evening prayers for daily worship.",
      type: "download",
      link: "#",
      tags: ["prayers", "practices", "beginner"]
    }
  ];
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Books', value: 'book' },
    { name: 'Articles', value: 'article' },
    { name: 'Videos', value: 'video' },
    { name: 'Downloads', value: 'download' }
  ];
  
  const tags = [
    'spirituality', 'practices', 'mantras', 'tantra', 'advanced', 
    'esoteric', 'protection', 'beginner', 'rituals', 'sanskrit',
    'art', 'symbolism', 'history', 'meditation', 'prayers'
  ];
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <Book className="h-5 w-5" />;
      case 'article':
        return <File className="h-5 w-5" />;
      case 'video':
        return <PlayCircle className="h-5 w-5" />;
      case 'download':
        return <Download className="h-5 w-5" />;
      default:
        return <File className="h-5 w-5" />;
    }
  };
  
  const filteredResources = resources.filter(resource => {
    // Filter by type
    if (activeFilter !== 'all' && resource.type !== activeFilter) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        resource.title.toLowerCase().includes(query) ||
        (resource.author && resource.author.toLowerCase().includes(query)) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="resources-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <path d="M 0,40 L 40,0 L 80,40 L 40,80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#resources-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Sacred Resources</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-purple-100">
            Books, articles, videos, and more to deepen your understanding of Varthali Varahi
          </p>
        </div>
      </div>
      
      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Search and Filters */}
            <div className="mb-10">
              <div className="mb-6">
                <label htmlFor="search" className="sr-only">Search resources</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-600 focus:border-purple-600 sm:text-sm"
                    placeholder="Search for resources..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Type Filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
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
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors duration-200"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {resource.thumbnail && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={resource.thumbnail} 
                        alt={resource.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-purple-600 mb-3">
                      {getTypeIcon(resource.type)}
                      <span className="ml-2 text-sm font-medium capitalize">{resource.type}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-purple-900">{resource.title}</h3>
                    {resource.author && (
                      <p className="text-gray-600 text-sm mb-3">By {resource.author}</p>
                    )}
                    <p className="text-gray-700 mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 text-xs rounded-full bg-purple-50 text-purple-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    {resource.link && (
                      <a 
                        href={resource.link} 
                        className="inline-flex items-center text-purple-900 font-medium hover:text-amber-500 transition-colors duration-200"
                      >
                        {resource.type === 'download' ? 'Download' : 'View Resource'}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No resources found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Recommended Reading */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-purple-900">Recommended Reading Path</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                <h3 className="text-xl font-serif font-bold mb-3 text-purple-900">For Beginners</h3>
                <p className="text-gray-700 mb-4">
                  If you're new to the worship of Varthali Varahi, we recommend starting with these resources:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>"Varthali Varahi: The Divine Protector" - Provides a foundational understanding</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>"Daily Prayers to Varthali Varahi" - Helps establish a daily practice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>"Sacred Rituals of Varthali Varahi" - Visual guidance for basic rituals</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-serif font-bold mb-3 text-purple-900">For Intermediate Practitioners</h3>
                <p className="text-gray-700 mb-4">
                  Once you have established a basic practice, deepen your understanding with:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>"The Divine Path of Varthali Varahi" - Comprehensive guide to all aspects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>"The Iconography of Varthali Varahi" - Understanding the sacred symbolism</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>"Varahi Sahasranama" - Begin working with the thousand names</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-800">
                <h3 className="text-xl font-serif font-bold mb-3 text-purple-900">For Advanced Seekers</h3>
                <p className="text-gray-700 mb-4">
                  For those ready to explore the deeper dimensions of practice:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>"Understanding the Tantric Aspects of Varahi Worship" - Esoteric practices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>"Meditation Techniques for Connecting with Varahi Energy" - Advanced meditation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-500 mr-2">•</div>
                    <span>Work directly with a qualified spiritual teacher for personalized guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;