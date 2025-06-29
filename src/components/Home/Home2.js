import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <div className="home-about-body text-lg leading-relaxed mt-3">
              <p>
                Hi! I’m passionate about <span className="purple font-semibold">programming</span> and love building impactful digital products. My journey began with curiosity and has grown into a deep expertise in modern web technologies, AI/ML, and full-stack development.
              </p>
              <hr className="my-4" />
              <div>
                <span className="purple font-semibold">Languages:</span> JavaScript (TypeScript), Python, C++, Java, HTML, CSS <br />
                <span className="purple font-semibold">Frameworks & Libraries:</span> React, Node.js, Express.js, MongoDB, Tailwind CSS, Material UI, Axios, Zustand <br />
                <span className="purple font-semibold">Developer Tools:</span> Git, Postman, Figma <br />
                <span className="purple font-semibold">AI/ML:</span> NumPy, Pandas, Seaborn, Matplotlib, Scikit-learn <br />
                <span className="purple font-semibold">Math Foundations:</span> Matrices, Vectors, Statistics, Calculus <br />
                <span className="purple font-semibold">Full Stack:</span> MERN (MongoDB, Express.js, React, Node.js), REST APIs, JWT Auth, CRUD <br />
                <span className="purple font-semibold">Deployment:</span> Render, GitHub Pages, MongoDB Atlas <br />
                <span className="purple font-semibold">Database:</span> MongoDB (Mongoose), basic SQL <br />
                <span className="purple font-semibold">Version Control:</span> Git & GitHub (branching, PRs, commits) <br />
                <span className="purple font-semibold">UI/UX:</span> Responsive Design, Tailwind CSS, Material UI, Figma Prototyping
              </div>
              <hr className="my-4" />
              <p>
                My main interests are in building <span className="purple font-semibold">modern web applications</span>, exploring <span className="purple font-semibold">Aritficial Intelligence and Machine Learning</span> technologies, and solving real-world problems.
              </p>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center myAvtar mt-4 mt-md-0">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle shadow" alt="avatar" style={{ maxWidth: "220px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social text-center mt-5">
            <h1 className="mb-3">FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links list-inline mt-3">
              <li className="list-inline-item social-icons mx-2">
                <a
                  href="https://github.com/Tanishqk96"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub size={28} />
                </a>
              </li>
              <li className="list-inline-item social-icons mx-2">
                <a
                  href="https://x.com/Tanishq_k16"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter size={28} />
                </a>
              </li>
              <li className="list-inline-item social-icons mx-2">
                <a
                  href="https://www.linkedin.com/in/tanishq-k-0522b3224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={28} />
                </a>
              </li>
              <li className="list-inline-item social-icons mx-2">
                <a
                  href="https://www.instagram.com/tanishq__9696/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram size={28} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
