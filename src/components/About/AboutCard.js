import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Tanishq Korgaonkar</span> from <span className="purple">Goa, India</span>.
            <br />
            Currently pursuing my <b>B.Tech in Cybersecurity</b> at Manipal Institute of Technology , <span className="purple">Bengaluru </span> (CGPA: 8.5).
            <br />
            <br />
            <span className="purple"><b>Certifications:</b></span>
            <ul>
              <li>
                <ImPointRight /> Ordered Data Structures – University of Illinois Urbana-Champaign
              </li>
              <li>
                <ImPointRight /> Introduction to Java and Object-Oriented Programming – University of Pennsylvania
              </li>
              <li>
                <ImPointRight /> Foundations of Cybersecurity – Google
              </li>
              <li>
                <ImPointRight /> Introduction to Network Automation – Cisco
              </li>
            </ul>
            <br />
            <span className="purple"><b>Things i do Beyond Coding:</b></span>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing chess.
              </li>
              <li className="about-activity">
                <ImPointRight /> Exploring AI/ML
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing, gaming, and travel
              </li>
            </ul>
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            “First, solve the problem. Then, write the code.”
          </p>
          <footer className="blockquote-footer">Tanishq Korgaonkar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
