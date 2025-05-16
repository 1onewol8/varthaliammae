import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  rituals: string[];
  significance: string;
  type: 'major' | 'minor';
}

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  const events: Event[] = [
    {
      id: 1,
      title: "Varahi Jayanti",
      date: "2023-05-15",
      description: "The sacred day celebrating the divine appearance of Goddess Varthali Varahi.",
      rituals: [
        "Special abhishekam with milk, honey, and rose water",
        "Recitation of the Varahi Sahasranama (1000 names)",
        "Offering of red flowers and sweet delicacies",
        "Night-long vigil with devotional singing"
      ],
      significance: "This auspicious day marks the manifestation of the goddess in her full glory. Devotees who worship her on this day receive special blessings for spiritual advancement and removal of obstacles.",
      type: 'major'
    },
    {
      id: 2,
      title: "Varahi Amavasya",
      date: "2023-06-14",
      description: "New moon day dedicated to special worship of the goddess.",
      rituals: [
        "Offering of black sesame seeds and rice",
        "Chanting of protective mantras",
        "Lighting of oil lamps",
        "Charitable offerings to the needy"
      ],
      significance: "The new moon day is particularly powerful for invoking the protective aspects of the goddess. Worship on this day helps remove negative influences and ancestral karmic patterns.",
      type: 'minor'
    },
    {
      id: 3,
      title: "Shakti Navratri",
      date: "2023-10-15",
      description: "The nine-night festival dedicated to the Divine Mother in all her forms.",
      rituals: [
        "Daily special pujas to different aspects of the goddess",
        "Recitation of sacred texts",
        "Offering of red clothing and jewelry to the deity",
        "Community feasts and cultural programs"
      ],
      significance: "During Navratri, the veil between the divine and human realms thins, making it an especially potent time for spiritual practices. The goddess is worshipped in her nine divine forms, with special emphasis on Varthali Varahi on the seventh day.",
      type: 'major'
    },
    {
      id: 4,
      title: "Varahi Full Moon",
      date: "2023-07-03",
      description: "Full moon day dedicated to the illuminating aspect of the goddess.",
      rituals: [
        "Bathing the deity with milk and sacred waters",
        "Offering of white flowers and sweets",
        "All-night meditation and mantra recitation",
        "Circumambulation of the temple with lamps"
      ],
      significance: "The full moon amplifies the goddess's energy of spiritual illumination. Worship on this day helps in gaining clarity, wisdom, and spiritual insights.",
      type: 'minor'
    },
    {
      id: 5,
      title: "Varahi Temple Festival",
      date: "2023-08-21",
      description: "Annual temple festival at the main Varthali Varahi Temple.",
      rituals: [
        "Elaborate procession of the deity around the temple",
        "Special homam (fire ritual) for prosperity",
        "Cultural performances depicting divine stories",
        "Mass feeding of devotees and the poor"
      ],
      significance: "The annual temple festival commemorates the consecration of the main temple. Participating in the festivities brings auspiciousness, prosperity, and the special grace of the goddess.",
      type: 'major'
    }
  ];
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };
  
  const getEventsForDate = (date: string) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === parseInt(date) &&
        eventDate.getMonth() === currentMonth &&
        eventDate.getFullYear() === currentYear
      );
    });
  };
  
  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear);
    
    // Empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50"></div>);
    }
    
    // Cells for each day of the month
    for (let day = 1; day <= totalDays; day++) {
      const date = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const dayEvents = events.filter(event => event.date === date);
      
      days.push(
        <div key={day} className="h-24 border border-gray-200 p-2 relative">
          <div className="font-medium">{day}</div>
          {dayEvents.map(event => (
            <div 
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className={`mt-1 px-2 py-1 text-xs rounded-md cursor-pointer text-white ${
                event.type === 'major' ? 'bg-amber-500' : 'bg-purple-600'
              }`}
            >
              {event.title}
            </div>
          ))}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="calendar-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <path d="M 0,40 L 40,0 L 80,40 L 40,80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#calendar-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Sacred Calendar</h1>
          <p className="text-lg max-w-3xl mx-auto text-center text-purple-100">
            Discover auspicious days, festivals, and important dates for worshipping Varthali Varahi
          </p>
        </div>
      </div>
      
      {/* Calendar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-serif font-bold text-purple-900 flex items-center">
                <CalendarIcon className="mr-3 h-7 w-7 text-amber-500" />
                Sacred Days & Festivals
              </h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 rounded-full bg-purple-100 text-purple-900 hover:bg-purple-200 transition-colors duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <h3 className="text-xl font-medium text-purple-900">
                  {months[currentMonth]} {currentYear}
                </h3>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 rounded-full bg-purple-100 text-purple-900 hover:bg-purple-200 transition-colors duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Legend */}
            <div className="mb-6 flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                <span className="text-sm text-gray-700">Major Festival</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-sm text-gray-700">Minor Festival/Ritual Day</span>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="mb-10">
              <div className="grid grid-cols-7 gap-0 text-center">
                <div className="py-2 bg-purple-100 text-purple-900 font-medium">Sun</div>
                <div className="py-2 bg-purple-100 text-purple-900 font-medium">Mon</div>
                <div className="py-2 bg-purple-100 text-purple-900 font-medium">Tue</div>
                <div className="py-2 bg-purple-100 text-purple-900 font-medium">Wed</div>
                <div className="py-2 bg-purple-100 text-purple-900 font-medium">Thu</div>
                <div className="py-2 bg-purple-100 text-purple-900 font-medium">Fri</div>
                <div className="py-2 bg-purple-100 text-purple-900 font-medium">Sat</div>
                
                {renderCalendar()}
              </div>
            </div>
            
            {/* Selected Event Details */}
            {selectedEvent && (
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 mb-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-2 ${
                      selectedEvent.type === 'major' ? 'bg-amber-500' : 'bg-purple-600'
                    }`}>
                      {selectedEvent.type === 'major' ? 'Major Festival' : 'Special Day'}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-purple-900">{selectedEvent.title}</h3>
                    <p className="text-gray-600">
                      {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-purple-900 mb-3">Rituals & Observances</h4>
                    <ul className="space-y-2 text-gray-700">
                      {selectedEvent.rituals.map((ritual, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-amber-500 mr-2">•</div>
                          <span>{ritual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-purple-900 mb-3">Spiritual Significance</h4>
                    <p className="text-gray-700">{selectedEvent.significance}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Upcoming Events List */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-purple-900">Upcoming Sacred Days</h3>
              
              <div className="space-y-4">
                {events.map(event => (
                  <div
                    key={event.id}
                    className="p-4 border border-purple-100 rounded-lg hover:bg-purple-50 transition-colors duration-200 cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white mb-1 ${
                          event.type === 'major' ? 'bg-amber-500' : 'bg-purple-600'
                        }`}>
                          {event.type === 'major' ? 'Major Festival' : 'Special Day'}
                        </span>
                        <h4 className="font-bold text-purple-900">{event.title}</h4>
                        <p className="text-gray-600 text-sm">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Observance Guide */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-purple-900">Festival Observance Guide</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">Preparing for Sacred Days</h3>
              <p className="text-gray-700 mb-4">
                Sacred days dedicated to Varthali Varahi are powerful opportunities to connect with her divine energy. To make the most of these auspicious occasions:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2">•</div>
                  <span>Begin preparation a day before by cleansing your living space</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2">•</div>
                  <span>Observe fasting or dietary restrictions as appropriate for the occasion</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2">•</div>
                  <span>Gather necessary offerings and ritual items in advance</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2">•</div>
                  <span>Study the significance and specific practices for the particular observance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">The Power of Collective Worship</h3>
              <p className="text-gray-700 mb-4">
                Participating in group celebrations and rituals on sacred days amplifies the spiritual energy and benefits. The collective devotion creates a powerful field of divine consciousness that uplifts all participants.
              </p>
              <p className="text-gray-700">
                If possible, join temple celebrations or community gatherings on these special days. If that's not possible, connecting mentally with other devotees around the world while performing your personal practices still harnesses the power of collective consciousness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;