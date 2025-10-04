import React from 'react'
import { Link } from 'react-router-dom'

// Activities showcase section
const Activities = () => {
  const activities = [
    {
      id: 1,
      icon: (
        <svg className="card-icon" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/>
        </svg>
      ),
      title: "English Enhancement",
      description: "Fluency, Confidence and Success with English Enhancement"
    },
    {
      id: 2,
      icon: (
        <svg className="card-icon" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: "Co-Curricular Development",
      description: "Skills for Life: Co-Curricular Development Initiatives"
    },
    {
      id: 3,
      icon: (
        <svg className="card-icon" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: "Creativity Boosting",
      description: "Nurturing Innovation and Thinking Outside the Box"
    },
    {
      id: 4,
      icon: (
        <svg className="card-icon" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
        </svg>
      ),
      title: "Public Speaking",
      description: "From Nervous to Natural: Mastering the art of Public Speaking"
    }
  ]

  return (
    <section id="activities">
      <div className="container">
        <h2 className="section-title" data-reveal>
          What We Do
        </h2>
        
        <div className="grid cols-4">
          {activities.map((activity, index) => (
            <div 
              key={activity.id}
              className="card" 
              data-reveal
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {activity.icon}
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Executive Committee Link */}
        <div className="activities-cta" data-reveal style={{ transitionDelay: '0.5s' }}>
          <Link to="/executives" className="btn cta">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 8v6M23 11l-3 3-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Meet Our Executive Committee
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Activities
