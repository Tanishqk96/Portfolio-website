import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGit,
  SiGithub,
  SiFigma,
  SiRender,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
} from "react-icons/si";
import ReactTooltip from "react-tooltip";

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" data-tip="macOS">
          <SiMacos />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="VS Code">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="Postman">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="Slack">
          <SiSlack />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="Vercel">
          <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="Git">
          <SiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="GitHub">
          <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="Figma">
          <SiFigma />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="Render">
          <SiRender />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="MongoDB">
          <SiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="Node.js">
          <SiNodedotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tip="NPM">
          <SiNpm />
        </Col>
      </Row>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}

export default Toolstack;
