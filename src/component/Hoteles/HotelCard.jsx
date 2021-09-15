import React from "react";
import Card from "react-bootstrap/Card";
import { IoLocationOutline } from "react-icons/io5";
import { BiHotel } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function HotelCard({ hotel }) {
  const fromDate = new Date(hotel.availabilityFrom);
  const toDate = new Date(hotel.availabilityTo);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Card className="card-element">
      <Card.Header>
        <Card.Title>{hotel.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <IoLocationOutline className="icon-location" /> {hotel.city},&nbsp;
          {hotel.country}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {
            //Referencia : https://www.carlrippon.com/repeat-element-n-times-in-jsx/
            [...Array(hotel.price)].map((value, index) => (
              <AiOutlineDollar size={20} key={index} />
            ))
          }
        </Card.Subtitle>
      </Card.Header>
      <Card.Img variant="top" src={hotel.photo} alt={hotel.name} />
      <Card.Body>
        <Card.Text className="card-text">{hotel.description}</Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>
          <div>
            <BiHotel size={24} className="icon-location" />
            &nbsp;&nbsp;{hotel.rooms}&nbsp;Habitaciones
          </div>
        </ListGroup.Item>

        <ListGroup.Item>
          <div className="container-date">
            <div className="div-date">
              <Badge pill className="bg">
                Desde
              </Badge>
              {fromDate.toLocaleDateString("es-ES", options)}
            </div>
            <div className="div-date">
              <Badge pill className="bg">
                Hasta
              </Badge>
              {toDate.toLocaleDateString("es-ES", options)}
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="text-muted">
        <Button variant="outline-primary">Reservar</Button>
      </Card.Footer>
    </Card>
  );
}

export default HotelCard;
