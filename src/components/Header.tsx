import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import profileImg from "./../assets/userProfile.svg";
import cmpLogo from "./../assets/cmpLogo.svg";

const Header = () => {
  const [selected, setSelected] = useState("projects");

  const handleHeadingClick = (heading: string) => {
    setSelected(heading);
  };
  return (
    <>
      <Row className="header">
        <Col md={2} className="d-flex gap-3 align-items-center">
          <div>
            <img src={cmpLogo} alt="cmplogo" />
          </div>
          <div className="fw-bold fs-3">mAI</div>
        </Col>
        <Col
          md={8}
          className="d-flex gap-5 justify-content-center align-items-center"
        >
          <div
            className={`fs-3 cursor-pointer heading-text ${
              selected === "home" ? "fw-bold text-decoration-underline" : ""
            }`}
            onClick={() => handleHeadingClick("home")}
          >
            Home
          </div>
          <div
            className={`fs-3 heading-text cursor-pointer ${
              selected === "projects" ? "fw-bold text-decoration-underline" : ""
            }`}
            onClick={() => handleHeadingClick("projects")}
          >
            Projects
          </div>
          <div
            className={`fs-3 heading-text cursor-pointer ${
              selected === "searchCandidate"
                ? "fw-bold text-decoration-underline"
                : ""
            }`}
            onClick={() => handleHeadingClick("searchCandidate")}
          >
            Search Candidate
          </div>
          <div
            className={`fs-3 heading-text cursor-pointer ${
              selected === "reports" ? "fw-bold text-decoration-underline" : ""
            }`}
            onClick={() => handleHeadingClick("reports")}
          >
            Reports
          </div>
          <div
            className={`fs-3 heading-text cursor-pointer ${
              selected === "messages" ? "fw-bold text-decoration-underline" : ""
            }`}
            onClick={() => handleHeadingClick("messages")}
          >
            Messages
          </div>
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-end align-items-center gap-3"
        >
          <div>
            <i className="bi bi-toggle-on fs-3"></i>
          </div>
          <div>
            <i className="bi bi-bell-fill fs-3"></i>
          </div>
          <div>
            <img className="profile-img" src={profileImg} alt="prifile-img" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
