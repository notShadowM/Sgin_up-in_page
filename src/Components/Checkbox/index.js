import React from "react";
import "./Style.css";

function Checkbox(props) {
  const { id, name, type, value, label, holder, handleChange } = props;

  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        className="check"
        checked={value}
        placeholder={holder}
        onClick={handleChange}
      />
      <label htmlFor={id} className="checkLabel">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
