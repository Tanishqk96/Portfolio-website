import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ai from '../../Assets/projectimg/ai-gpt.png';
import gym from '../../Assets/projectimg/gym.png';
import bookbyte from '../../Assets/projectimg/bookbyte.png';
import cancer from '../../Assets/projectimg/breast-cancer.webp';
import diabetes from '../../Assets/projectimg/diabetes.png';
import foodapp from '../../Assets/projectimg/food-app.avif';
import parkinsons from '../../Assets/projectimg/parkinsons.png';
import scraper from '../../Assets/projectimg/scraper.webp';
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym} 
              isBlog={false}
              title="ToughFit Gym – Frontend App"
              description="Developed a responsive gym management app using React and Material UI. Added GIFs and YouTube videos for workout guidance."
              ghLink="https://github.com/Tanishqk96/toughfit-gym"
              demoLink="https://toughfitgym.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookbyte}
              isBlog={false}
              title="BookByte – Full Stack Bookstore"
              description="Built using the MERN stack with Zustand and Tailwind CSS. Integrated secure REST APIs for backend communication."
              ghLink="https://github.com/Tanishqk96/bookbyte"
              demoLink="https://book-store-lr99.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scraper}
              isBlog={false}
              title="Football Headlines Scraper"
              description="Used Selenium and Pandas to scrape football headlines from The Sun. Exported data into CSV for further analysis."
              ghLink="https://github.com/Tanishqk96/football-scraper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title="Diabetes Prediction – AI/ML"
              description="Implemented an SVM classifier for diabetes prediction. Achieved 79.15% training and 72% testing accuracy using Scikit-learn and Pandas."
              ghLink="https://github.com/Tanishqk96/diabetes"
              demoLink="https://diabetesprediction-tanishq.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkinsons}
              isBlog={false}
              title="Parkinson’s Disease Detection"
              description="Used an SVM classifier on biomedical voice data to detect Parkinson’s. Achieved 94.8% testing accuracy using Scikit-learn, Pandas, and Seaborn."
              ghLink="https://github.com/Tanishqk96/parkinsons-detector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cancer}
              isBlog={false}
              title="Breast Cancer Prediction – Logistic Regression"
              description="Classified tumors as benign or malignant using Logistic Regression. Achieved 98% training and 96% testing accuracy with Scikit-learn."
              ghLink="https://github.com/Tanishqk96/breast-cancer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="AI-GPT Assistant – Jesus GPT"
              description="React + Node.js app using Google API to create an assistant that replies like Jesus. Styled with Tailwind and deployed on Render."
              ghLink="https://github.com/Tanishqk96/ai-gpt"
              demoLink="https://bibleforyou.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodapp}
              isBlog={false}
              title="Food App Backend"
              description="JWT-authenticated backend built with Express and Node.js. Includes middleware, bcrypt for hashing, and RESTful API endpoints."
              ghLink="https://github.com/Tanishqk96/food-app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
