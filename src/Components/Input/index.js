import React from "react";
import "./Style.css";

function Input(props) {
  const { id, name, type, value, label, holder, handleChange, error } = props;

  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={"input" + " " + (error && "error")}
        value={value}
        placeholder={holder}
        onChange={handleChange}
      />
      {error && <div className="warning">{error}</div>}
    </>
  );
}

export default Input;
