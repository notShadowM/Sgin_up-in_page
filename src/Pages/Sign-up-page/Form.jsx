import React, { Component } from "react";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import "./Style.css";

class Form extends Component {
  state = {
    email: "",
    password: "",
    rePassword: "",
    check: false,
  };

  // handleChange = (e) => {
  //   const { value, name, checked } = e.target;
  //   this.setState({ [name]: value });
  //   const _value = checked;
  //   if (name === "check") {
  //     this.setState({ [name]: _value });
  //   }
  // };

  handleChange = (e) => {
    const { value, name, checked } = e.target;
    let _value = value;
    if (name === "check") {
      _value = checked;
    }
    this.setState({ [name]: _value });
  };

  render() {
    const { email, password, rePassword, check } = this.state;
    return (
      <form className="form">
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          label="Email address*"
          holder="Enter email address"
          handleChange={this.handleChange}
        />
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          label="Create password*"
          holder="Password"
          handleChange={this.handleChange}
        />
        <Input
          id="rePassword"
          name="rePassword"
          type="password"
          value={rePassword}
          label="Repeat password*"
          holder="Repeat password"
          handleChange={this.handleChange}
        />
        <Checkbox
          id="checkbox"
          name="check"
          type="checkbox"
          value={check}
          label="I agree to terms &amp; conditions"
          holder="Repeat password"
          handleChange={this.handleChange}
        />
        <Button
          type="submit"
          text="Register Account"
          bgcolor="#1565D8"
          color="white"
        />
      </form>
    );
  }
}

export default Form;
