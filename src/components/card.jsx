import React from "react";
import { Card } from "react-bootstrap";

function CardServices ({ card : { title, description, icon, listItems } }) {
  return (
    <div>
      <Card style={{ width: "17rem", border: "none"}}>
        {icon && <Card.Body className="fs-3 text-center">{icon}</Card.Body>}
        <Card.Body>
          <Card.Title className="title fw-bold">{title}</Card.Title>
          <Card.Text className="desc">{description}</Card.Text>
          {listItems && Array.isArray(listItems) && (
            <ul>
              {listItems.map((item, index) => (
                <li key={index} className="fw-bold">{item}</li>
              ))}
            </ul>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardServices;
