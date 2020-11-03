import React from "react";
import Quote2 from "../../Components/Quote2";
import Form from "./Form";
import "./style.css";
import { ReactComponent as Biglogo } from "../../assets/biglogo.svg";
import { ReactComponent as Controler } from "../../assets/controler.svg";
import { ReactComponent as Media } from "../../assets/media.svg";
import { ReactComponent as Or } from "../../assets/Or.svg";

function Login() {
  return (
    <div className="Container">
      <div className="left2">
        <Biglogo />
        <Quote2 />
        <div className="pic">
          <Controler />
        </div>
      </div>
      <div className="right2">
        <div className="register">
          <div className="typography2">
            <h1 className="heading2">Join the game!</h1>
            <p className="para2">Go inside the best gamers social network!</p>
            <div className="media">
              <Media />
            </div>
          </div>
          <Or />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Login;
