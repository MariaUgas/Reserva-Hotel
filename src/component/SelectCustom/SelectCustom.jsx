import React from "react";

export const SelectCustom = (props) => {
  function manejarSelect(evento) {
    return props.onChange(evento.target.value);
  }
  return (
    <select
      className="select-style"
      name={props.selected}
      value={props.selected}
      onChange={manejarSelect}
    >
      {props.options.map((opt) => {
        return <option key={opt.value} value={opt.value} label={opt.label} />;
      })}
    </select>
  );
};
