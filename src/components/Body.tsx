import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Requirement from "./Requirement";
import UploadResume from "./UploadResume";
import Recruiters from "./Recruiters";
import Tabs from "./Tabs";

const Body = () => {
  const [activeButton, setActiveButton] = useState("requirement");

  const handleButtonClick = (button) => {
    setActiveButton(button === activeButton ? null : button);
  };

  return (
    <div>
      <Row>
        <Col md={8}>
          <Card className=" mr-0 m-2">
            <div className="d-flex justify-content-center button-group">
              <Button
                className={activeButton === "jobDetails" ? "active" : ""}
                onClick={() => handleButtonClick("jobDetails")}
              >
                Job Details
              </Button>
              <Button
                className={activeButton === "requirement" ? "active" : ""}
                onClick={() => handleButtonClick("requirement")}
              >
                Requirement
              </Button>
            </div>
            <div>
              {activeButton === "requirement" ? (
                <Requirement />
              ) : (
                <div className="d-flex justify-content-center">
                  No Data Found!
                </div>
              )}
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <UploadResume />
          <Card className="p-3 mt-2">
            <div className="fs-4 fw-bold">Client</div>
            <hr />

            <Form.Control type="text" placeholder="Search" />
          </Card>
          <Recruiters />
          <Tabs />
        </Col>
      </Row>
    </div>
  );
};

export default Body;
