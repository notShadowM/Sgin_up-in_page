import React from "react";
import "./Style.css";
import { ReactComponent as Icon } from "../../assets/back.svg";

function Back() {
  return (
    <div className="backDiv">
      <span>
        <Icon />
      </span>{" "}
      <span>Back</span>
    </div>
  );
}

export default Back;
