import React, { useState } from "react";

import { DatePickerCustom } from "../DatePickerCustom/DatePickerCustom";
import { SelectCustom } from "../SelectCustom/SelectCustom";
import { Header } from "../Header/Header.jsx";
import { FaMapMarkedAlt, FaMoneyBillWave } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import "react-toastify/dist/ReactToastify.css";

const BarSearch = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  country,
  setCountry,
  price,
  setPrice,
  size,
  setSize,
  clearSearch,
}) => {
  const optionsPaises = [
    { value: "Todos", label: "Todos los paises..." },
    { value: "Argentina", label: "Argentina" },
    { value: "Brasil", label: "Brasil" },
    { value: "Chile", label: "Chile" },
    { value: "Uruguay", label: "Uruguay" },
  ];
  const optionsPrecios = [
    { value: "Todos", label: "Todos los precios..." },
    { value: "1", label: "Económico ($)" },
    { value: "2", label: "Confortable ($$)" },
    { value: "3", label: "Lujoso ($$$)" },
    { value: "4", label: "Magnífico ($$$$)" },
  ];
  const optionsHabitaciones = [
    { value: "Todos", label: "Todos los tamaños..." },
    { value: "peq", label: "Pequeño" },
    { value: "med", label: "Mediano" },
    { value: "grd", label: "Grande" },
  ];
  const invalidDates = startDate > endDate;
  const notify = () => {
    toast.warn("Rango de fechas inválido !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container-bar-search">
      <section id="bar-search" className="section-bar-search">
        <div className="cover">
          <div className="flex-form">
            <DatePickerCustom
              selected={startDate}
              onChange={setStartDate}
              placeHolder="Desde ..."
            />
            <DatePickerCustom
              selected={endDate}
              onChange={setEndDate}
              onSelect={() => notify()}
              placeHolder="Hasta ..."
            />
            <div className="icon-element-container">
              <FaMapMarkedAlt size={20} />
              &nbsp;&nbsp;
              <SelectCustom
                options={optionsPaises}
                selected={country}
                onChange={setCountry}
              />
            </div>
            <div className="icon-element-container">
              <FaMoneyBillWave size={20} />
              &nbsp;&nbsp;
              <SelectCustom
                options={optionsPrecios}
                selected={price}
                onChange={setPrice}
              />
            </div>
            <div className="icon-element-container">
              <RiHotelLine size={20} />
              &nbsp;&nbsp;
              <SelectCustom
                options={optionsHabitaciones}
                selected={size}
                onChange={setSize}
              />
            </div>
            <div className="icon-element-container">
              <Button variant="outline-light" onClick={clearSearch} size="sm">
                Limpiar
              </Button>
            </div>
            {/* <button  className="button-style">
              Limpiar
            </button> */}
          </div>
        </div>
      </section>
      <section>
        <Header
          pais={country}
          cantHab={size}
          precio={price}
          desde={startDate}
          hasta={endDate}
        />
      </section>

      {invalidDates && <ToastContainer />}
    </div>
  );
};

export default BarSearch;
