import React from "react";
import "./Style.css";

function Input(props) {
  const { id, name, type, value, label, holder, handleChange } = props;

  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="input"
        value={value}
        placeholder={holder}
        onChange={handleChange}
      />
    </>
  );
}

export default Input;
