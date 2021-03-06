import React, { Component } from "react";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import "./Style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as yup from "yup";

class Form extends Component {
  state = {
    email: "",
    password: "",
    rePassword: "",
    check: false,
    errors: {
      email: "",
      password: "",
      rePassword: "",
    },
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, rePassword } = this.state;

    const signUpSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
      rePassword: yup
        .string()
        .test(
          "match testing",
          "This passowrd doesn't match the previous one",
          (value) => value === password
        )
        .required(),
    });

    signUpSchema
      .validate({ email, password, rePassword }, { abortEarly: false })
      .then((data) => {
        this.setState({ errors: {} });
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });
        this.setState({ errors });
      });
  };

  render() {
    const { email, password, rePassword, check, errors } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          label="Email address*"
          holder="Enter email address"
          handleChange={this.handleChange}
          error={errors.email}
        />
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          label="Create password*"
          holder="Password"
          handleChange={this.handleChange}
          error={errors.password}
        />
        <Input
          id="rePassword"
          name="rePassword"
          type="password"
          value={rePassword}
          label="Repeat password*"
          holder="Repeat password"
          handleChange={this.handleChange}
          error={errors.rePassword}
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
