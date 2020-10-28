import React from "react";
import Logo from "../../Components/Logo";
import Quote from "../../Components/Quote";
import Back from "../../Components/Back";
import Button from "../../Components/Button";
import Form from "./Form";
import "./Style.css";
import { ReactComponent as Vector } from "../../assets/Vector.svg";
import { ReactComponent as Line } from "../../assets/Line.svg";

function Signup() {
  return (
    <div className="Container">
      <div className="left">
        <Logo />
        <Quote />
        <div className="vector">
          <Vector />
        </div>
      </div>
      <div className="right">
        <Back />
        <div className="register">
          <div className="typography">
            <h1 className="heading">Register Individual Account!</h1>
            <p className="para">
              For the purpose of gamers regulation, your details are required.
            </p>
          </div>
          <Form />
          <div className="orBlock">
            <span className="line">
              <Line />
            </span>
            <span className="or">Or</span>
            <span className="line">
              <Line />
            </span>
          </div>
          <Button
            text="Register with Google"
            bgcolor="#fff"
            color="black"
            className="google"
            img={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
