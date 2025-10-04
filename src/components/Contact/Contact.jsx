import React from 'react'

// Contact information section
const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      text: "+880 1720802197"
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
        </svg>
      ),
      text: "info.ielc2017@gmail.com"
    }
  ]

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Get in Touch
        </h2>
        
        <div className="contact-info" data-reveal>
          {contactInfo.map((contact) => (
            <div key={contact.id} className="contact-item">
              {contact.icon}
              <span>{contact.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
