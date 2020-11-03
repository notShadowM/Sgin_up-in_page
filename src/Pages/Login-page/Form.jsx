import React, { Component } from "react";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as yup from "yup";

class Form extends Component {
  state = {
    email: "",
    password: "",
    check: false,
    errors: {},
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
    const { email, password } = this.state;

    const signUpSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    signUpSchema
      .validate({ email, password }, { abortEarly: false })
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
    const { email, password, errors } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          label="Your email"
          holder="Write your email"
          handleChange={this.handleChange}
          error={errors.email}
        />
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          label="Enter your password"
          holder="•••••••••"
          handleChange={this.handleChange}
          error={errors.password}
        />
        <Button
          type="submit"
          text="Login"
          bgcolor="#1565D8"
          color="white"
          className="margin-btn"
        />
        <p className="question">
          Don't have an account?
          <Link to="/">
            <span className="switch">Register</span>
          </Link>
        </p>
      </form>
    );
  }
}

export default Form;
