import React, { useState, useEffect } from 'react';

const Carousel = ({ events, type }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = events[currentEventIndex];

  useEffect(() => {
    const eventInterval = setInterval(() => {
      setCurrentEventIndex((prev) => 
        prev === events.length - 1 ? 0 : prev + 1
      );
    }, 15000); // Change event every 15 seconds

    return () => clearInterval(eventInterval);
  }, [events]);

  const goToPreviousEvent = () => {
    setCurrentEventIndex(prev => 
      prev === 0 ? events.length - 1 : prev - 1
    );
  };

  const goToNextEvent = () => {
    setCurrentEventIndex(prev => 
      prev === events.length - 1 ? 0 : prev + 1
    );
  };

  if (!events.length || !currentEvent) return null;

  return (
    <div className={`carousel-container ${type}-carousel`}>
      <div className="carousel-main">
        <button 
          className="carousel-nav carousel-prev"
          onClick={goToPreviousEvent}
          aria-label="Previous event"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className="carousel-nav carousel-next"
          onClick={goToNextEvent}
          aria-label="Next event"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="event-indicators">
          {events.map((_, index) => (
            <button
              key={index}
              className={`event-dot ${index === currentEventIndex ? 'active' : ''}`}
              onClick={() => setCurrentEventIndex(index)}
              aria-label={`Go to ${events[index].title}`}
            />
          ))}
        </div>

        <div className="image-display">
          <div className="current-image">
            <img src={currentEvent.image} alt={currentEvent.title} onError={(e) => { e.target.src = '/placeholder-event.jpg'; }} />
            <div className="image-overlay">
              <div className="image-info">
                <h3>{currentEvent.title}</h3>
                <p className="event-date">{currentEvent.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-timeline">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index === currentEventIndex ? 'active' : ''}`}
            onClick={() => setCurrentEventIndex(index)}
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
  );
};

export default Carousel;