import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'
import './CarnivalShowcase.css'

const CarnivalShowcase = () => {
  // IELC Carnival data
  const ielcCarnivals = [
    {
      id: 1,
      title: "1st IELC National English Language Carnival",
      date: "Aug 4-Aug 5, 2017",
      images: Array.from({ length: 5 }, (_, i) => `/images/NELC/nelc1-${i + 1}.jpg`),
      year: 2017
    },
    {
      id: 2,
      title: "2nd IELC National English Language Carnival",
      date: "May 10-May 12, 2018",
      images: Array.from({ length: 5 }, (_, i) => `/images/NELC/nelc2-${i + 1}.jpg`),
      year: 2018
    },
    {
      id: 3,
      title: "3rd IELC National English Language Carnival", 
      date: "Apr 11-Apr 13, 2019",
      images: Array.from({ length: 5 }, (_, i) => `/images/NELC/nelc3-${i + 1}.jpg`),
      year: 2019
    },
    {
      id: 4,
      title: "4th IELC National English Language Carnival",
      date: "Jul 21-Jul 23, 2023",
      images: Array.from({ length: 5 }, (_, i) => `/images/NELC/nelc4-${i + 1}.jpg`),
      year: 2023
    },
    {
      id: 5,
      title: "5th IELC National English Language Carnival",
      date: "May 10-May 11, 2024",
      images: Array.from({ length: 5 }, (_, i) => `/images/NELC/nelc5-${i + 1}.jpg`),
      year: 2024
    },
    {
      id: 6,
      title: "6th IELC National English Language Carnival",
      date: "Oct 31-Nov 1, 2025",
      images: Array.from({ length: 5 }, (_, i) => `/images/NELC/nelc6-${i + 1}.jpg`),
      year: 2025
    }
  ]

  // Eloquence data
  const eloquenceEvents = [
    {
      id: 1,
      title: "Eloquence 1.0",
      date: "May 19-May 20, 2020",
      images: Array.from({ length: 4 }, (_, i) => `/images/Eloquence/eloquence1-${i + 1}.jpg`),
      year: 2020
    },
    {
      id: 2,
      title: "Eloquence 2.0", 
      date: "Oct 21, 2022",
      images: Array.from({ length: 4 }, (_, i) => `/images/Eloquence/eloquence2-${i + 1}.jpg`),
      year: 2022
    },
    {
      id: 3,
      title: "Eloquence 3.0",
      date: "Sept 16, 2024",
      images: Array.from({ length: 4 }, (_, i) => `/images/Eloquence/eloquence3-${i + 1}.jpg`),
      year: 2024
    }
  ]

  return (
    <div className="carnival-showcase">
      {/* Header */}
      <div className="carnival-header">
        <div className="carnival-nav">
          <Link to="/" className="back-btn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
          <h1>Past Carnivals & Events</h1>
        </div>
      </div>

      {/* IELC Carnivals Section */}
      <section className="carnival-section ielc-section">
        <div className="section-header">
          <h2>IELC National English Language Carnivals</h2>
          <p>A journey through our flagship annual events celebrating English language learning</p>
        </div>
        
        <Carousel 
          events={ielcCarnivals}
          type="ielc"
        />
      </section>

      {/* Eloquence Events Section */}
      <section className="carnival-section eloquence-section">
        <div className="section-header">
          <h2>Eloquence Events</h2>
          <p>Showcasing eloquence and public speaking excellence</p>
        </div>
        
        <Carousel 
          events={eloquenceEvents}
          type="eloquence"
        />
      </section>

      {/* Footer */}
      <div className="carnival-footer">
        <p>Reliving our journey of excellence in English language education</p>
      </div>
    </div>
  )
}

export default CarnivalShowcase
