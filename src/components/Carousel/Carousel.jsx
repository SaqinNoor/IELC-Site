import React, { useState, useEffect } from 'react';

const Carousel = ({ events, type }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = events[currentEventIndex];

  // Auto-play functionality
  useEffect(() => {
    if (events.length > 1) {
      const interval = setInterval(() => {
        setCurrentEventIndex((prev) => 
          prev === events.length - 1 ? 0 : prev + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [events.length]);

  const goToPrevious = () => {
    setCurrentEventIndex(prev => 
      prev === 0 ? events.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentEventIndex(prev => 
      prev === events.length - 1 ? 0 : prev + 1
    );
  };

  const goToEvent = (index) => {
    setCurrentEventIndex(index);
  };

  if (!events.length || !currentEvent) return null;

  return (
    <div className={`carousel ${type}-carousel`}>
      {/* Navigation Dots */}
      <div className="carousel-dots">
        {events.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentEventIndex ? 'active' : ''}`}
            onClick={() => goToEvent(index)}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="carousel-content">
        {/* Image Section */}
        <div className="image-section">
          <div className="image-container">
            <img 
              src={currentEvent.image} 
              alt={currentEvent.title}
              onError={(e) => { e.target.src = '/placeholder-event.jpg'; }}
            />
            <div className="image-overlay">
              <h3>{currentEvent.title}</h3>
              <p>{currentEvent.date}</p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section">
          <div className="timeline">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`timeline-item ${index === currentEventIndex ? 'active' : ''}`}
                onClick={() => goToEvent(index)}
              >
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-content">
                  <h4>{event.title}</h4>
                  <p>{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="nav-arrow prev" onClick={goToPrevious}>
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="nav-arrow next" onClick={goToNext}>
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;