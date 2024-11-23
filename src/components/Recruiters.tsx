import React from "react";
import { Card } from "react-bootstrap";

const recruiters = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
];

const Recruiters = () => {
  const getInitials = (firstName: string, lastName: string) => {
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
        <div className="fs-4 fw-bold cursor-pointer">
          <i className="bi bi-plus-lg"></i>
        </div>
      </div>

      <hr />

      {recruiters.map((recruiter) => (
        <div
          key={recruiter.id}
          className="recruiters-list d-flex align-items-center mb-2"
        >
          <div className="avatar-container me-3">
            <div
              className="recriter-list"
              style={{ backgroundColor: getRandomColor() }}
            >
              {getInitials(recruiter.firstName, recruiter.lastName)}
            </div>
          </div>
          <div className="flex-grow-1">{`${recruiter.firstName} ${recruiter.lastName}`}</div>
          <div className="cursor-pointer">
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Recruiters;
