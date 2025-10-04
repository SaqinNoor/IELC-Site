import React from 'react'

// Animated background effects
const BackgroundEffects = () => {
  return (
    <div className="wave-wrap" aria-hidden="true">
      <div className="waves">
        <svg id="waveSVG" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e50914"/>
              <stop offset="30%" stopColor="#ff4757"/>
              <stop offset="60%" stopColor="#ff6b6b"/>
              <stop offset="100%" stopColor="#e50914"/>
            </linearGradient>
          </defs>
          
          <circle className="wave-path" cx="200" cy="150" r="80"/>
          <circle className="wave-path" cx="200" cy="150" r="120"/>
          <circle className="wave-path" cx="200" cy="150" r="160"/>
          <circle className="wave-path" cx="200" cy="150" r="200"/>
          
          <circle className="wave-path" cx="800" cy="200" r="60"/>
          <circle className="wave-path" cx="800" cy="200" r="100"/>
          <circle className="wave-path" cx="800" cy="200" r="140"/>
          <circle className="wave-path" cx="800" cy="200" r="180"/>
          
          <circle className="wave-path" cx="400" cy="500" r="70"/>
          <circle className="wave-path" cx="400" cy="500" r="110"/>
          <circle className="wave-path" cx="400" cy="500" r="150"/>
          <circle className="wave-path" cx="400" cy="500" r="190"/>
          
          <circle className="wave-path" cx="1000" cy="450" r="50"/>
          <circle className="wave-path" cx="1000" cy="450" r="90"/>
          <circle className="wave-path" cx="1000" cy="450" r="130"/>
          <circle className="wave-path" cx="1000" cy="450" r="170"/>
        </svg>
      </div>

      <div className="floating-circles">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>
      
      <div className="geometric-elements">
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
      </div>
      
      <div className="radial-pulses">
        <div className="radial-pulse"></div>
        <div className="radial-pulse"></div>
        <div className="radial-pulse"></div>
      </div>
    </div>
  )
}

export default BackgroundEffects
