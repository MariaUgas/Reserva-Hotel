import React from "react";
import HotelCard from "./HotelCard";
import { hotelsData } from "../../data.js";
import Alert from "react-bootstrap/Alert";

function Hoteles({ startDate, endDate, country, price, size }) {
  const invalidDates = startDate > endDate;

  const filterByCountry = hotelsData.filter((hotel) => {
    if (country === "Todos") {
      return true;
    } else {
      return hotel.country.toLowerCase() === country.toLowerCase();
    }
  });

  const filterByCountryAndSize = filterByCountry.filter((hotel) => {
    if (size === "Todos") {
      return true;
    } else {
      if (size === "peq") {
        return hotel.rooms <= 10;
      } else if (size === "med") {
        return hotel.rooms > 10 && hotel.rooms < 20;
      } else {
        return hotel.rooms >= 20;
      }
    }
  });

  const filterByCountryAndSizeAndPrice = filterByCountryAndSize.filter(
    (hotel) => {
      if (price === "Todos") {
        return true;
      } else {
        let priceLevel = parseInt(price, 10);
        return hotel.price === priceLevel;
      }
    }
  );

  const filterByStartDate = filterByCountryAndSizeAndPrice.filter((hotel) => {
    if (startDate === undefined || invalidDates) {
      return true;
    } else {
      return (
        startDate >= hotel.availabilityFrom && startDate <= hotel.availabilityTo
      );
    }
  });

  const filterByEndDate = filterByStartDate.filter((hotel) => {
    if (endDate === undefined || invalidDates) {
      return true;
    } else {
      return endDate >= startDate && endDate <= hotel.availabilityTo;
    }
  });
  const msgEmpty = filterByEndDate.length === 0;

  return (
    <div className="container-card">
      {filterByEndDate.map((hotel) => {
        return <HotelCard key={hotel.slug} hotel={hotel} />;
      })}
      {msgEmpty && (
        <Alert show={msgEmpty} variant="info">
          <Alert.Heading>Advertencia</Alert.Heading>
          <p>No se han encontrado resultados para tu búsqueda </p>
          <p>Intente nuevamente con otros criterios de búsqueda </p>
        </Alert>
      )}
    </div>
  );
}

export default Hoteles;
