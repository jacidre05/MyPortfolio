import React, { useState } from "react";
import "./About.css";
import profilePic from "./assets/Me.png";

interface ContactInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  linkedin: string;
}

const About: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const decodeBase64 = (str: string) => {
    try {
      return atob(str);
    } catch {
      return str;
    }
  };

  // ✅ Use Vite env variable
  const AUTH_PASSWORD: string = import.meta.env.VITE_CONTACT_PASSWORD || "letmein";

  const handleRequestContact = async () => {
    if (passwordInput !== AUTH_PASSWORD) {
      setError("Incorrect password! Access denied.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Use Vite's base URL so it works both locally and on GitHub Pages
      const baseUrl = import.meta.env.BASE_URL; // "/MyPortfolio/" on GitHub Pages
      const res = await fetch(`${baseUrl}contact.json`);

      if (!res.ok) throw new Error(`Failed to fetch contact info: ${res.statusText}`);

      const data: ContactInfo = await res.json();

      const decodedData: ContactInfo = {
        name: decodeBase64(data.name),
        address: decodeBase64(data.address),
        phone: decodeBase64(data.phone),
        email: decodeBase64(data.email),
        linkedin: decodeBase64(data.linkedin),
      };

      setContactInfo(decodedData);
      setShowModal(false);
      setPasswordInput("");
    } catch (err) {
      console.error("Failed to fetch contact info:", err);
      setError("Could not load contact info. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="about-container">
      <h2 className="about-title">Know more about me!</h2>
      <p className="about-title-message">
        Dynamic Virtual Assistant with proven expertise, excelling in application
        screening and customer relationship management. Adept at multitasking and
        problem-solving, I enhance operational efficiency and ensure data
        confidentiality. Recognized for effective communication and adaptability,
        I consistently deliver exceptional support and drive process improvements
        in fast-paced environments.
      </p>

      <div className="about-content">
        <div className="about-image-container">
          <div
            className="about-image-wrapper"
            style={{ backgroundImage: `url(${profilePic})` }}
          >
            <img src={profilePic} alt="Julie Acidre Jr." className="about-image" />
          </div>

          {!contactInfo && (
            <button
              onClick={() => setShowModal(true)}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#39ff14",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#000",
                fontWeight: 700,
              }}
            >
              Request Contact Info
            </button>
          )}

          {contactInfo && (
            <section className="about-section contact-below-image approved">
              <h2>Contact Information</h2>
              <p className="highlight">{contactInfo.name}</p>
              <p>{contactInfo.address}</p>
              <p>📞 {contactInfo.phone}</p>
              <p>
                ✉️ <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
              <p>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  🔗 {contactInfo.linkedin}
                </a>
              </p>
            </section>
          )}
        </div>

        <div className="about-info">
          <section className="about-section">
            <h2>Work Experience</h2>
            <div className="work-item">
              <h3>
                Summit Communities LLC — Virtual Assistant / Administrative
                Assistant
              </h3>
              <span className="date">August 2017 </span>
              <p>Respond to inquiries from prospective tenants via call, text, or e-mail.</p>
              <p>Provide phone support for all properties and corporate office.</p>
              <p>Conduct initial phone screening interviews for skilled worker applicants.</p>
              <p>Serve as point of contact for tenants and maintenance for properties owned personally by one of the owners of the company.</p>
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
            <p>
              <strong>Asian Development Foundation College (ADFC), Tacloban City</strong> — BS Computer Engineering (Undergrad)
            </p>
            <p>
              <strong>San Miguel National High School, San Miguel, Leyte</strong> — Secondary Education, 2003
            </p>
            <p>
              <strong>San Fernando Elementary School, Palo, Leyte</strong> — Elementary Education, 1999
            </p>
          </section>
        </div>
      </div>

      {/* AUTH MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Enter Password to View Contact Info</h3>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Password"
              style={{ padding: "0.5rem", margin: "0.5rem 0", width: "100%" }}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
              <button
                onClick={handleRequestContact}
                disabled={loading}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#39ff14",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setPasswordInput("");
                  setError("");
                }}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#ff4d4f",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
