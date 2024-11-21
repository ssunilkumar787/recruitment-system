import React from "react";
import { Form } from "react-bootstrap";
import InputList from "./InputList";

const Requirement = () => {
  return (
    <>
      <div className="requirement-container">
        <div className="p-4 pb-0">
          <Form.Label className="fw-bold">Degree</Form.Label>
          <Form.Control type="text" placeholder="Enter your degree" />
        </div>
        <div className="p-4 pb-0">
          <Form.Label className="fw-bold">Univercity</Form.Label>
          <Form.Control type="text" placeholder="Enter your Univercity" />
        </div>
        <div className="p-4 pb-0">
          <Form.Label className="fw-bold">
            Specilization / Certification
          </Form.Label>
          <Form.Control type="text" placeholder="Enter your Specilization" />
        </div>
        <div className="p-4 pb-0">
          <InputList titleText="Company" />
        </div>
        <div className="p-4 pb-0 pt-0">
          <InputList titleText="Industry" />
        </div>
        <div className="p-4 pb-0 pt-0">
          <InputList titleText="Boolean Search" />
        </div>
      </div>
    </>
  );
};

export default Requirement;
