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
      href: "/carnivals",
      delay: 0
    },
    {
      id: 2,
      title: "Our Executives",
      description: "Meet the Teams",
      className: "link-executives",
      href: "#",
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
              style={{ transitionDelay: `${link.delay}s` }}
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
