import React from "react";
import { Card } from "react-bootstrap";

const recruiters = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
];

const Recruiters = () => {
  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Card className="p-3 mt-2">
      <div className="d-flex justify-content-between">
        <div className="fs-4 fw-bold">Recruiters</div>
        <div className="fs-4 fw-bold" style={{ cursor: "pointer" }}>
          <i className="bi bi-plus-lg"></i>
        </div>
      </div>

      <hr />

      {recruiters.map((recruiter) => (
        <div
          key={recruiter.id}
          className="recruiters-list d-flex align-items-center mb-2"
        >
          <div
            className="avatar me-3"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: getRandomColor(),
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            {getInitials(recruiter.firstName, recruiter.lastName)}
          </div>
          <div className="flex-grow-1">{`${recruiter.firstName} ${recruiter.lastName}`}</div>
          <div>
            <i
              className="bi bi-three-dots-vertical"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Recruiters;
