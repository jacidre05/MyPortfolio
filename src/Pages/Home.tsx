import "./Home.css";
import myImage from "./assets/VA.png";
import backgroundImage from "./assets/RGKnow.png"; // ✅ Import background image

function Home() {
  return (
    <div className="home-container-wrapper">
      <div className="container">
        <div className="home-container">
          <div className="home-image">
            <img src={myImage} alt="Home" />
          </div>

          <div className="home-text">
            <h2>Jules ~ Your Virtual Admin!</h2>
            <p>
              Orderly and committed, an administrative assistant offering solid skills in customer relations
              and resilience to handle the challenges of fast-paced environments.
              I bring a detail-oriented, decisive nature, sound judgment, strong multitasking abilities
              and self-motivation. Comfortable working alone or with teams to accomplish on-time
              and accurate clerical tasks.
            </p>
          </div>
        </div>

        {/* Centered message below with background image */}
        <div className="home-message">
          {/* Background image behind the message */}
          <img
            src={backgroundImage}
            alt="Background"
            className="text-background-image"
          />

          <h2>Reasons to Hire a VA</h2>
          <ul>
            <li>
              <strong>Cost Saving</strong> – You avoid expenses like employee benefits, office space, and equipment. 
              You only pay for the hours worked or specific tasks completed, making it a cost-effective solution.
            </li>
            <li>
              <strong>Time Savings</strong> – A VA handles time-consuming tasks like scheduling, email management, 
              and data entry, freeing you to focus on strategic and high-level activities.
            </li>
            <li>
              <strong>Increased Productivity</strong> – By delegating tasks, you and your core team can focus on what 
              you do best, leading to improved efficiency and project completion. VAs are also often experts who 
              can complete tasks faster.
            </li>
            <li>
              <strong>Improved Work-Life Balance</strong> – By taking on a portion of your workload, a VA can help 
              reduce stress and give you more time for personal life, family, and mental health.
            </li>
            <li>
              <strong>Streamlined Operations</strong> – VAs can help streamline daily operations, manage customer 
              service, generate leads, and maintain a consistent online presence for your business.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
