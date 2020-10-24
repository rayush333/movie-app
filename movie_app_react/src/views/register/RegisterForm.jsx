import React, { Component } from "react";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Row, Col } from "react-bootstrap";
import axios from 'axios';

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: {
        name: null,
        email: null,
        password: null,
        role: 'ROLE_USER'
      },
      confirmPassword: null,
      error: null,
      message: null
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)


  }

  handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    console.log(e.target);
    let error = this.state.error;
    switch (name) {
      case 'name':
        error =
            value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
        break;
      case 'email':
        error =
            validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
        break;
      case 'password':
        error =
            value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
        break;
      case 'confirmPassword':
        error =
            value.length < 8
                ? 'Password must be 8 characters long!'
                : (value !== this.state.register.password ? 'Passwords do not match!' : '');
        break;
      default:
        break;
    }

    const data = this.state.register;
    if (name === 'confirmPassword')
      this.setState({confirmPassword: value})
    else
      data[name] = value;
    this.setState({error, register: data}, () => {
      console.log(error)
    })
  }

  handleRegister(e) {
    const register = this.state.register;
    if(null != this.state.register.name && null != this.state.register.email && null!= this.state.register.password && this.state.confirmPassword) {
      axios.post(`http://localhost:4000/api/users/`, register)
          .then(res => {
            this.setState({ message:"Ready to go as a user!" });

          })
          .catch(error => {
            this.setState({ error:error.response.data.msg ? error.response.data.msg : 'Sorry! Something went wrong. Try again!'});
          });
    } else{
      this.setState({ error:'Please enter the values correctly to get registered!'});
    }
  }

  render() {
    return (
      <div className="card card-user">
        <div className="content">
          <div className="author" style={{ marginTop: 0 }}>
            <a >
              <img
                className="avatar border-gray"
                src={this.props.avatar}
                alt="..."
              />
              <Row>
                <Col md={4}></Col>
                <Col md={4}>
                  <Card
                    title="Sign Up Here"
                    content={
                      <div>
                        { this.state.error && (
                        <span style={{color: "red", fontSize:"14px"}}>{this.state.error}</span>
                        )}
                        { this.state.message && (
                            <div>
                              <span style={{color: "green", fontSize:"15px"}}>{this.state.message}</span>
                              <span style={{color: "green"}}><a href="/login"><h3 style={{color: "#1DC7EA"}}>Login</h3></a></span>
                            </div>
                        )}
                        <form >
                          <FormInputs
                              ncols={["col-md-12"]}
                              properties={[
                                {
                                  label: "",
                                  type: "text",
                                  name: "name",
                                  onChange: this.handleChange,
                                  bsClass: "form-control ",
                                  placeholder: "Name",
                                  defaultValue: ""
                                }
                              ]}
                          />
                          <FormInputs
                            ncols={["col-md-12"]}
                            properties={[
                              {
                                label: "",
                                type: "email",
                                name: "email",
                                onChange: this.handleChange,
                                bsClass: "form-control ",
                                placeholder: "Email Address",
                                defaultValue: ""
                              }
                            ]}
                          />
                          <FormInputs
                            ncols={["col-md-12"]}
                            properties={[
                              {
                                label: "",
                                type: "password",
                                name: "password",
                                onChange: this.handleChange,
                                bsClass: "form-control ",
                                placeholder: "Password",
                                defaultValue: ""
                              }
                            ]}
                          />
                          <FormInputs
                              ncols={["col-md-12"]}
                              properties={[
                                {
                                  label: "",
                                  type: "password",
                                  name: "confirmPassword",
                                  onChange: this.handleChange,
                                  bsClass: "form-control ",
                                  placeholder: "Confirm Password",
                                  defaultValue: ""
                                }
                              ]}
                          />
                          <Button bsStyle="info" pullRight fill onClick={this.handleRegister}>Sign Up</Button>
                          <div className="clearfix" />
                        </form>
                      </div>
                    }
                  />
                </Col>

              </Row>

            </a>
          </div>
          <p className="description text-center">
          </p>
        </div>
        <hr />
        <div className="text-center">

        </div>
      </div>
    );
  }
}

export default RegisterForm;
