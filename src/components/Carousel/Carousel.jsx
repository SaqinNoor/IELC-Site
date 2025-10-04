import React, { useState, useEffect } from 'react'

const Carousel = ({ events, type }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentEvent = events[currentEventIndex]

  // Auto-cycle through images within current event
  useEffect(() => {
    if (!currentEvent?.images) return
    
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === currentEvent.images.length - 1 ? 0 : prev + 1
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(imageInterval)
  }, [currentEvent])

  // Auto-cycle through events
  useEffect(() => {
    const eventInterval = setInterval(() => {
      setCurrentEventIndex((prev) => 
        prev === events.length - 1 ? 0 : prev + 1
      )
    }, 15000) // Change event every 15 seconds (to see all images in event)

    return () => clearInterval(eventInterval)
  }, [events])

  // Reset image index when event changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [currentEventIndex])

  const goToPreviousEvent = () => {
    setCurrentEventIndex(prev => 
      prev === 0 ? events.length - 1 : prev - 1
    )
    setCurrentImageIndex(0)
  }

  const goToNextEvent = () => {
    setCurrentEventIndex(prev => 
      prev === events.length - 1 ? 0 : prev + 1
    )
    setCurrentImageIndex(0)
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  if (!events.length || !currentEvent) return null

  return (
    <div className={`carousel-container ${type}-carousel`}>
      {/* Main carousel */}
      <div className="carousel-main">
        {/* Navigation arrows */}
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

        {/* Event indicator dots */}
        <div className="event-indicators">
          {events.map((_, index) => (
            <button
              key={index}
              className={`event-dot ${index === currentEventIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentEventIndex(index)
                setCurrentImageIndex(0)
              }}
              aria-label={`Go to ${events[index].title}`}
            />
          ))}
        </div>

        {/* Main image display */}
        <div className="image-display">
          <div className="current-image">
            <img 
              src={currentEvent.images[currentImageIndex]} 
              alt={`${currentEvent.title} - Image ${currentImageIndex + 1}`}
              onError={(e) => {
                e.target.src = '/placeholder-event.jpg'
              }}
            />
            <div className="image-overlay">
              <div className="image-info">
                <h3>{currentEvent.title}</h3>
                <p className="event-date">{currentEvent.date}</p>
              </div>
            </div>
          </div>

          {/* Image indicator dots */}
          {currentEvent.images.length > 1 && (
            <div className="image-indicators">
              {currentEvent.images.map((_, index) => (
                <button
                  key={index}
                  className={`image-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Event timeline */}
      <div className="event-timeline">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index === currentEventIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentEventIndex(index)
              setCurrentImageIndex(0)
            }}
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
  )
}

export default Carousel
