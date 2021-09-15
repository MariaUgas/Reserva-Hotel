import React from "react";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { GoCalendar } from "react-icons/go";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

export const DatePickerCustom = (props) => {
  function manejarFecha(date) {
    const fecha = date.valueOf();
    return props.onChange(fecha);
  }
  return (
    <div className="icon-element-container">
      <GoCalendar size={20} />
      <DatePicker
        locale="es"
        className="date-picker-style"
        dateFormat="dd/MM/yyyy"
        minDate={subDays(new Date(), 0)}
        placeholderText={props.placeHolder}
        selected={props.selected}
        onChange={manejarFecha}
        onSelect={props.onSelect}
      />
    </div>
  );
};
