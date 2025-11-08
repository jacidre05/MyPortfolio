import React from "react";
import "./About.css";
import profilePic from "./assets/Me.png";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Just out here to shine.</h1>

      <div className="about-content">
        <div className="about-image-container">
            <div className="about-image-wrapper" style={{ backgroundImage: `url(${profilePic})` }}>
                <img src={profilePic} alt="Julie Acidre Jr." className="about-image" />
            </div>
        </div>

        <div className="about-info">
          <section className="about-section">
            <h2>Contact Information</h2>
            <p className="highlight">Julie Acidre Jr.</p>
            <p>Brgy. 62-A Purok 3 Sagkahan Road, Tacloban City, Philippines 6500</p>
            <p>📞 +639541954387 | (+63) (53) 888-1612</p>
            <p>✉️ julie.acidre@gmail.com</p>
          </section>

          <section className="about-section">
            <h2>Work Experience</h2>
            <div className="work-item">
              <h3>Summit Communities LLC — Virtual Assistant / Administrative Assistant</h3>
              <span className="date">August 2017 – Present</span>
              <p>Respond to inquiries from prospective tenants via call, text, or e-mail.</p>
              <p>Provide phone support for all properties and corporate office.</p>
              <p>Conduct initial phone screening interviews for skilled worker applicants.</p>
              <p>Serve as point of contact for tenants and maintenance for properties owned by the company.</p>
            </div>

            <div className="work-item">
              <h3>Fineststaff Outsourcing Company — Phone Support / Tech Screener</h3>
              <span className="date">May 2017 – August 2017</span>
              <p>Verified inquiries before forwarding calls to the technical support or sales team.</p>
              <p>Conducted remote computer diagnostics.</p>
            </div>

            <div className="work-item">
              <h3>Hefty VirtualU Solutions — Virtual Assistant / Team Lead</h3>
              <span className="date">August 2016 – May 2017</span>
              <p>Screened applications using credit scores and background checks.</p>
              <p>Coordinated with applicants, landlords, and employers for document completion.</p>
              <p>Updated property managers on pending applications daily.</p>
            </div>            
          </section>

          <section className="about-section">
            <h2>Education</h2>
            <p><strong>Asian Development Foundation College (ADFC), Tacloban City</strong> — BS Computer Engineering (Undergrad)</p>
            <p><strong>San Miguel National High School, San Miguel, Leyte</strong> — Secondary Education, 2003</p>
            <p><strong>San Fernando Elementary School, Palo, Leyte</strong> — Elementary Education, 1999</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
