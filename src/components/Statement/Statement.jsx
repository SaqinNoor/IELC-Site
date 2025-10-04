import React from 'react'

// Moderator's statement section
const Statement = () => {
  return (
    <section id="statement">
      <div className="container">
        <div className="statement-box" data-reveal>
          <div className="statement-content">
            <div className="statement-text">
              <p>
                "It is with immense pleasure and a profound sense of responsibility that I address 
                you as the Moderator of Ideal English Language Club. Now, with the launch of our 
                website, we stand on a newer milestone. I am absolutely pleased to see such 
                dedication from the team that has tirelessly worked for this behind the curtains."
              </p>
              <div className="author">
                Nizam Uddin Kamal
                <span>Moderator, Ideal English Language Club</span>
              </div>
            </div>
            <div className="moderator-photo">
              <div className="photo-frame">
                <img 
                  src="/testimonial.jpg" 
                  alt="Nizam Uddin Kamal - Moderator of Ideal English Language Club"
                  className="moderator-img"
                />
                <div className="photo-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statement
