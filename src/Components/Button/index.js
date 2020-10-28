import React from "react";
import "./Style.css";
import { ReactComponent as Google } from "../../assets/google.svg";

function Button(props) {
  const { type, text, bgcolor, img, color, className } = props;
  return (
    <>
      <button
        className={"btn" + " " + className}
        type={type}
        style={{ background: bgcolor, color: color }}
      >
        <span className="photo">{img && <Google />}</span>
        {text}
      </button>
    </>
  );
}

export default Button;
