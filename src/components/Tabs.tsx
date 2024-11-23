import React, { useState } from "react";
import { Tab, Nav, Card } from "react-bootstrap";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("goodFit");

  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      status: "goodFit",
      occupation: "Software Engineer",
      company: "Accenture",
      location: "New York",
      startYear: 2023,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      status: "goodFit",
      occupation: "Product Manager",
      company: "Google",
      location: "San Francisco",
      startYear: 2022,
    },
    {
      id: 3,
      firstName: "Mike",
      lastName: "Johnson",
      status: "goodFit",
      occupation: "Data Scientist",
      company: "Microsoft",
      location: "Seattle",
      startYear: 2021,
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Brown",
      status: "connected",
      occupation: "UX Designer",
      company: "Apple",
      location: "Cupertino",
      startYear: 2023,
    },
    {
      id: 5,
      firstName: "Alex",
      lastName: "Wilson",
      status: "replied",
      occupation: "Frontend Developer",
      company: "Facebook",
      location: "Menlo Park",
      startYear: 2022,
    },
  ];

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

  const filteredUsers = users.filter((user) => user.status === activeTab);

  return (
    <Card className="p-3 mt-2">
      <Tab.Container
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k as string)}
      >
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link
              eventKey="goodFit"
              className={`tab ${activeTab === "goodFit" ? "active" : ""}`}
            >
              Good Fit (3)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="connected"
              className={`tab ${activeTab === "connected" ? "active" : ""}`}
            >
              Connected (0)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="replied"
              className={`tab ${activeTab === "replied" ? "active" : ""}`}
            >
              Replied (0)
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey={activeTab}>
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="user-item d-flex align-items-start p-2"
              >
                <div
                  className="avatar me-3"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  {getInitials(user.firstName, user.lastName)}
                </div>
                <div className="flex-grow-1">
                  <div className="fw-bold">{`${user.firstName} ${user.lastName}`}</div>
                  <div className="user-details">
                    <span className="occupation">{user.occupation}</span> @{" "}
                    <span>{user.company}</span> ({user.startYear} - present) |{" "}
                    {user.location}
                  </div>
                </div>
              </div>
            ))}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Card>
  );
};

export default Tabs;
