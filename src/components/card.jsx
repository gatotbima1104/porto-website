import React from "react";
import { Card } from "react-bootstrap";

const CardServices = ({ title, description, icon, listItems }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {icon && <Card.Body className="fs-3 text-center">{icon}</Card.Body>}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {listItems && Array.isArray(listItems) && (
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardServices;
