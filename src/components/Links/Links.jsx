import React from 'react'
import { Link } from 'react-router-dom'

// Links to subpages section
const Links = () => {
  const links = [
    {
      id: 1,
      title: "Our Events",
      description: "Explore Past Carnivals",
      className: "link-events",
      image: (import.meta.env.BASE_URL || '/') + 'images/NELC/6nelc.jpg',
      href: "/carnivals",
      delay: 0
    },
    {
      id: 2,
      title: "Our Executives",
      description: "Meet the Executive Committee",
      className: "link-executives",
      image: (import.meta.env.BASE_URL || '/') + 'images/EC/9thexec.jpg',
      href: "/executives",
      delay: 0.1
    }
  ]

  return (
    <section id="links">
      <div className="container">
        <div className="links-grid">
          {links.map((link) => (
            <Link 
              key={link.id}
              to={link.href}
              className={`link-card ${link.className}`}
              data-reveal
              style={{ transitionDelay: `${link.delay}s`, backgroundImage: `url(${link.image})` }}
              onClick={() => {
                // For the carnivals and executives pages ensure we land at the top of the page
                if (link.href === '/carnivals' || link.href === '/executives') {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                }
              }}
            >
              <div className="link-card-content">
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Links
