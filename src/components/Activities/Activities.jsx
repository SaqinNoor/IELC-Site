import React from 'react'
import { Link } from 'react-router-dom'

// Activities showcase section
const Activities = () => {
  const activities = [
    {
      id: 1,
      icon: (
        <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/>
          <path d="M12 8V5"/>
          <path d="M12 19v-3"/>
          <path d="M16 12h3"/>
          <path d="M5 12H8"/>
        </svg>
      ),
      title: "English Enhancement",
      description: "Fluency, Confidence and Success with English Enhancement"
    },
    {
      id: 2,
      icon: (
        <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Co-Curricular Development",
      description: "Skills for Life: Co-Curricular Development Initiatives"
    },
    {
      id: 3,
      icon: (
        <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/>
        </svg>
      ),
      title: "Creativity Boosting",
      description: "Nurturing Innovation and Thinking Outside the Box"
    },
    {
      id: 4,
      icon: (
        <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5"/>
          <path d="M12 19v-2"/>
          <path d="M8 22h8"/>
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
