import React from 'react'

// Journey and history section
const Journey = () => {
  return (
    <section id="journey">
      <div className="container">
        <div className="text-content" data-reveal>
          <h2 className="section-title">
            Nine Years of Excellence and Impact
          </h2>
          <p>
            Since its inception on February 29, 2016, Ideal English Language Club has consistently 
            stood out as one of the most prominent organizations, not only within Ideal School 
            and College but throughout the entire country. Founded under the guidance of Abul 
            Kalam Azad, the club's first Moderator. This club has seen seven dedicated Executive 
            Committees diligently serve during their respective tenures. This illustrious club has 
            achieved significant milestones, including the successful organization of 16 impactful 
            workshops and hosting the renowned National English Language Carnival an impressive 
            five times, solidifying its status as the most dazzling English festival in the country. 
            Furthermore, the club's cherished publication, 'Auspice,' has graced readers' hands 
            five times, a testament to the club's commitment to providing a platform for literary 
            expression.
          </p>
        </div>

        <div 
          className="journey-image" 
          data-reveal 
          style={{ transitionDelay: '.1s' }}
          role="img"
          aria-label="IELC Group Photo"
        />
      </div>
    </section>
  )
}

export default Journey
