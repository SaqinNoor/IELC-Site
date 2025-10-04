import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spotlight from '../components/Spotlight/Spotlight'
import BackgroundEffects from '../components/BackgroundEffects/BackgroundEffects'
import './ExecutiveCommittee.css'

const ExecutiveCommittee = () => {
  useEffect(() => {
    // Ensure we start at the top of the page when navigated to
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  // 9th Executive Committee data
  const executiveCommittee = {
    president: [
      { name: "Abdul Wahab Siam", position: "President", image: "9president.jpg" }
    ],
    generalSecretary: [
      { name: "Ridan Rahman", position: "General Secretary", image: "9gensec.jpg" }
    ],
    vicePresidents: {
      administration: [
        { name: "Muhammed Samin Rahman", position: "VP Administration", image: "9vpadmin1.jpg" },
        { name: "Chowdhury Nur-A-Tamanna Ohona", position: "VP Administration", image: "9vpadmin2.jpg" }
      ],
      pressPublications: [
        { name: "Debjit Karmokar Surjo", position: "VP Press and Publications", image: "9vppress.jpg" }
      ],
      planningExecution: [
        { name: "Zahi Hoq", position: "VP Planning, Organizing and Execution", image: "9vpplan1.jpg" },
        { name: "Monsur Ahmed Suwad", position: "VP Planning, Organizing and Execution", image: "9vpplan2.jpg" },
        { name: "Mehrima Alam Lamha", position: "VP Planning, Organizing and Execution", image: "9vpplan3.jpg" }
      ],
      ict: [
        { name: "Lameya Jannat", position: "VP Information and Communication Technology", image: "9vpict.jpg" }
      ],
      coCurriculum: [
        { name: "Rayan Rehman", position: "VP Co-curriculum and Contest", image: "9vpco.jpg" }
      ],
      finance: [
        { name: "Adil Ahnaf Kabbo", position: "VP Finance and Relations", image: "9vpfinance1.jpg" },
        { name: "Nafiun Ferdous Ahnaf", position: "VP Finance and Relations", image: "9vpfinance2.jpg" }
      ]
    },
    associateGeneralSecretary: [
      { name: "Ahanaf Muttaki Audri", position: "Associate General Secretary", image: "9ags1.jpg" },
      { name: "Nashfika Monjur", position: "Associate General Secretary", image: "9ags2.jpg" },
      { name: "Tasfia Jarin", position: "Associate General Secretary", image: "9ags3.jpg" },
      { name: "Md. Nafis Safwan Hossain", position: "Associate General Secretary", image: "9ags4.jpg" },
      { name: "Mahreen Rahman", position: "Associate General Secretary", image: "9ags5.jpg" },
      { name: "Mahmid Alam Khan", position: "Associate General Secretary", image: "9ags6.jpg" }
    ],
    secretaries: {
      administration: [
        { name: "Syed Abdullah Al Masum", position: "Secretary Administration", image: "9secadmin1.jpg" },
        { name: "Nazima Monjur", position: "Secretary Administration", image: "9secadmin2.jpg" }
      ],
      pressPublications: [
        { name: "Wasee Uddin Jawad", position: "Secretary Press and Publications", image: "9secpress1.jpg" },
        { name: "Redwanul Rashed Khan", position: "Secretary Press and Publications", image: "9secpress2.jpg" }
      ],
      planningExecution: [
        { name: "Rabeatul Zannat Raima", position: "Secretary Planning, Organizing and Execution", image: "9secplan1.jpg" },
        { name: "Md. Ibtida Bin Siraj", position: "Secretary Planning, Organizing and Execution", image: "9secplan2.jpg" },
        { name: "Mahfuzur Rahman Sazid", position: "Secretary Planning, Organizing and Execution", image: "9secplan3.jpg" }
      ],
      ict: [
        { name: "Md. Sazzadul Islam", position: "Secretary Information and Communication Technology", image: "9secict1.jpg" },
        { name: "Mibsam Ahmed", position: "Secretary Information and Communication Technology", image: "9secict2.jpg" }
      ],
      coCurriculum: [
        { name: "Musaib Habib", position: "Secretary Co-curriculum and Contest", image: "9secco1.jpg" },
        { name: "Kamrun Nahar Sara", position: "Secretary Co-curriculum and Contest", image: "9secco2.jpg" },
        { name: "Rahbar Raish Khan", position: "Secretary Co-curriculum and Contest", image: "9secco3.jpg" }
      ],
      finance: [
        { name: "Mohtasim Ali Ashfin", position: "Secretary Finance and Relations", image: "9secfinance1.jpg" },
        { name: "Khandaker Redwan Nabil", position: "Secretary Finance and Relations", image: "9secfinance2.jpg" },
        { name: "Khandaker Shafee Shamun", position: "Secretary Finance and Relations", image: "9secfinance3.jpg" }
      ]
    },
    subExecutives: {
      administration: [
        { name: "Zuhaer Mujdalif", position: "Sub Executive Administration", image: "9subadmin1.jpg" },
        { name: "Afroza Naznin Prity", position: "Sub Executive Administration", image: "9subadmin2.jpg" },
        { name: "Jeba Farha Tasfia", position: "Sub Executive Administration", image: "9subadmin3.jpg" },
        { name: "Mashrak Karib", position: "Sub Executive Administration", image: "9subadmin4.jpg" }
      ],
      pressPublications: [
        { name: "Khan Zubaer Nahian", position: "Sub Executive Press and Publications", image: "9subpress.jpg" }
      ],
      planningExecution: [
        { name: "Zarin Tasnim Aurpa", position: "Sub Executive Planning, Organizing and Execution", image: "9subplan1.jpg" },
        { name: "Tanzim Mosharof Alfee", position: "Sub Executive Planning, Organizing and Execution", image: "9subplan2.jpg" },
        { name: "Mustakim Mukto", position: "Sub Executive Planning, Organizing and Execution", image: "9subplan3.jpg" },
        { name: "Ariyan Taseen", position: "Sub Executive Planning, Organizing and Execution", image: "9subplan4.jpg" }
      ],
      ict: [
        { name: "Muhtasim Karim", position: "Sub Executive Information and Communication Technology", image: "9subict.jpg" }
      ],
      coCurriculum: [
        { name: "Noushin Tasnim", position: "Sub Executive Co-Curriculum & Contest", image: "9subco1.jpg" },
        { name: "Nameer Rahman Rafan", position: "Sub Executive Co-Curriculum & Contest", image: "9subco2.jpg" }
      ],
      finance: [
        { name: "Sidratul Fariha Heaven", position: "Sub Executive Finance and Relations", image: "9subfinance1.jpg" },
        { name: "Mushfiqur Rahman", position: "Sub Executive Finance and Relations", image: "9subfinance2.jpg" }
      ]
    }
  }

  const MemberCard = ({ member, imagePath }) => (
    <div className="member-card">
      <div className="member-image">
        <img 
          src={(function(p){ const base = import.meta.env.BASE_URL || '/'; if(!p) return base + 'default_pfp.svg'; if (p.startsWith(base)) return p; return base + `images/EC/9/${p}`; })(member.image)} 
          alt={member.name}
          onError={(e) => {
            // Use default profile picture
            e.target.src = (import.meta.env.BASE_URL || '/') + 'default_pfp.svg';
          }}
        />
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-position">{member.position}</p>
      </div>
    </div>
  )

  const Section = ({ title, members, isArray = false }) => {
    const sectorLabels = {
      administration: "Administration",
      pressPublications: "Press & Publications", 
      planningExecution: "Planning, Organizing & Execution",
      ict: "ICT",
      coCurriculum: "Co-curriculum and Contest",
      finance: "Finance and Relations"
    }

    return (
      <div className="ec-section">
        <h2 className="section-title">{title}</h2>
        <div className="members-grid">
          {isArray ? 
            members.map((member, index) => (
              <MemberCard key={index} member={member} />
            )) :
            Object.entries(members).map(([key, memberList]) => (
              <div key={key} className="subsection">
                <h3 className="subsection-title">
                  {sectorLabels[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h3>
                <div className="subsection-members">
                  {memberList.map((member, index) => (
                    <MemberCard key={index} member={member} />
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  return (
    <div className="executive-committee">
      {/* Background Effects */}
      <BackgroundEffects />
      <Spotlight />
      
      {/* Header */}
      <div className="ec-header">
        <div className="ec-nav">
          <Link to="/" className="back-btn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
          <h1>9th Executive Committee</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="ec-content">
        <div className="ec-intro">
          <h2>Meet Our Leadership</h2>
          <p>The dedicated members of our 9th Executive Committee who work tirelessly to make IELC a thriving community for English language excellence.</p>
        </div>

        {/* President */}
        <Section title="President" members={executiveCommittee.president} isArray={true} />

        {/* General Secretary */}
        <Section title="General Secretary" members={executiveCommittee.generalSecretary} isArray={true} />

        {/* Vice Presidents */}
        <Section title="Vice Presidents" members={executiveCommittee.vicePresidents} />

        {/* Associate General Secretaries */}
        <Section title="Associate General Secretaries" members={executiveCommittee.associateGeneralSecretary} isArray={true} />

        {/* Secretaries */}
        <Section title="Secretaries" members={executiveCommittee.secretaries} />

        {/* Sub Executives */}
        <Section title="Sub Executives" members={executiveCommittee.subExecutives} />
      </div>

      {/* Footer */}
      <div className="ec-footer">
        <p>Leading with dedication, passion, and excellence</p>
      </div>
    </div>
  )
}

export default ExecutiveCommittee
