import React, { useState } from "react";
import BarSearch from "./component/BarSearch/BarSearch.jsx";
import Hoteles from "./component/Hoteles/Hoteles.jsx";
import { hotelsData, today } from "./data.js";

import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [country, setCountry] = useState("Todos");
  const [price, setPrice] = useState("Todos");
  const [size, setSize] = useState("Todos");
  let [hotels, setHotels] = useState(hotelsData);

  const clearSearch = () => {
    setCountry("Todos");
    setPrice("Todos");
    setSize("Todos");
    setStartDate(today);
    setEndDate(today);
  };

  return (
    <div className="App">
      <BarSearch
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        country={country}
        setCountry={setCountry}
        price={price}
        setPrice={setPrice}
        size={size}
        setSize={setSize}
        hotels={hotels}
        setHotels={setHotels}
        clearSearch={clearSearch}
      />
      <Hoteles
        startDate={startDate}
        endDate={endDate}
        country={country}
        price={price}
        size={size}
      />
    </div>
  );
}

export default App;
