import React from "react";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { FaMapMarkedAlt, FaMoneyBillWave } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";

export const Header = ({ pais, cantHab, precio, desde, hasta }) => {
  const fromDate = new Date(desde);
  const toDate = new Date(hasta);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let size = "Todos";
  switch (cantHab) {
    case "peq":
      size = "Pequeño";
      break;
    case "med":
      size = "Mediano";
      break;
    case "grd":
      size = "Grande";
      break;
  }
  let price = "Todos";
  switch (precio) {
    case "1":
      price = "Económico";
      break;
    case "2":
      price = "Confortable";
      break;
    case "3":
      price = "Lujoso";
      break;
    case "4":
      price = "Magnífico";
      break;
  }
  return (
    <div className="cover-foot">
      <h5>
        <strong>
          <GiAirplaneArrival size={28} />
        </strong>
        {" : "}
        {fromDate.toLocaleDateString("es-ES", options)}
      </h5>
      <h5>
        <strong>
          <GiAirplaneDeparture size={28} />
        </strong>
        {" : "}
        {toDate.toLocaleDateString("es-ES", options)}
      </h5>
      <h5>
        <FaMapMarkedAlt size={28} />
        {" : "} {pais}
      </h5>
      <h5>
        <RiHotelLine size={28} />
        {" : "} {size}
      </h5>
      <h5>
        <FaMoneyBillWave size={28} />
        {" : "} {price}
      </h5>
    </div>
  );
};
