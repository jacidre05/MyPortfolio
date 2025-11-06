import "./Home.css";
import myImage from "./assets/VA.png";

function Home() {
  return (
    <div className="home-container-wrapper">
      <div className="home-container">
        <div className="home-image">
          <img src={myImage} alt="Home" />
        </div>
        <div className="home-text">
          <h1>Your Virtual Guy!</h1>
          <p>
            Orderly and committed, an administrative assistant offering solid skills in customer relations
            and resilience to handle the challenges of fast-paced environments.
            I bring a detail-oriented, decisive nature, sound judgment, strong multitasking abilities
            and self-motivation. Comfortable working alone or with teams to accomplish on-time
            and accurate clerical tasks.
          </p>
        </div>
      </div>

      {/* Centered message below */}
      <div className="home-message">
        <p>"Dynamic Virtual Assistant with proven expertise, excelling in application screening and customer relationship management. Adept at multitasking and problem-solving, I enhance operational efficiency and ensure data confidentiality. Recognized for effective communication and adaptability, I consistently deliver exceptional support and drive process improvements in fast-paced environments."</p>
      </div>
    </div>
  );
}

export default Home;
