import React from "react";
import Logo from "../../Components/Logo";
import Quote from "../../Components/Quote";
import Back from "../../Components/Back";
import Button from "../../Components/Button";
import Form from "./Form";
import "./Style.css";
import { ReactComponent as Vector } from "../../assets/Vector.svg";
import { ReactComponent as Or } from "../../assets/Or.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Or />
          <Link to="/Login">
            <Button
              text="Login"
              bgcolor="#fff"
              color="black"
              className="google"
              img={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
