import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiMui,
  SiAxios,
  SiPostgresql,
  SiFirebase,
  SiNextdotjs,
  SiRedis,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiJupyter,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <h2 className="tech-header">🔷 MERN & Full Stack Development</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons" title="JavaScript">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="React.js">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Node.js">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="MongoDB">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Express.js">
          <SiExpress />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Tailwind CSS">
          <SiTailwindcss />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Material UI">
          <SiMui />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Axios (HTTP Client)">
          <SiAxios />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Git (Version Control)">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Firebase (Backend)">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Next.js (React Framework)">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="PostgreSQL (SQL Database)">
          <SiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Redis (In-Memory Database)">
          <SiRedis />
        </Col>
      </Row>

      <h2 className="tech-header">🧠 AI/ML & Programming</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons" title="Python">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="C++">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Java">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="NumPy (Numerical Computing)">
          <SiNumpy />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Pandas (DataFrames)">
          <SiPandas />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Plotly / Matplotlib (Visualization)">
          <SiPlotly />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Scikit-learn (ML Library)">
          <SiScikitlearn />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Jupyter Notebooks">
          <SiJupyter />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
