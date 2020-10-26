import React, { Component } from 'react';
import axios from 'axios';
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { ProfileCard } from "views/admin/user/ProfileCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "assets/img/faces/face-3.jpg";

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: this.props.obj.name,
        email: this.props.obj.email,
        password: this.props.obj.password,
        role: this.props.obj.role,
        watchlist: this.props.obj.watchlist,
        tags: ["handwash"]
      },
      error: null,
      message: null
    }
    this.clear = this.clear.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log("check", e.target.value)
    const data = this.state.item;
    data[e.target.name] = e.target.value
    let error = this.state.error;
    switch (e.target.name) {
      case 'name':
        error =
        e.target.value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
        break;
      case 'email':
        error =
            validEmailRegex.test(e.target.value)
                ? ''
                : 'Email is not valid!';
        break;
      case 'password':
        error =
        e.target.value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
        break;
      default:
        break;
    }
    this.setState({ item: data, error});
    console.log(this.state.item)
  }
  clear() {
    this.setState({ message:''});
    const item = this.state.item;
    console.log(item)
    const updatedItem =  {
      "name": item.name,
      "email": item.email,
      "password": item.password,
      "role": "ROLE_USER",
      "watchlist": []
    }
    axios.put(`http://localhost:4000/api/users/` + this.props.obj._id, updatedItem)
      .then(res => {
        this.setState({ message:"Watchlist Cleared Successfully!" });

      })
      .catch(error => {
        this.setState({ error:error.response.data.msg ? error.response.data.msg : 'Sorry! Something went wrong. Try again!'});
      });
  }

  save() {
    this.setState({ message:''});
    const item = this.state.item;
    console.log(item)
    const updatedItem =  {
      "name": item.name,
      "email": item.email,
      "password": item.password,
      "role": "ROLE_USER"
    }
    axios.put(`http://localhost:4000/api/users/` + this.props.obj._id, updatedItem)
      .then(res => {
        this.setState({ message:"User Profile Updated Successfully!" });

      })
      .catch(error => {
        this.setState({ error:error.response.data.msg ? error.response.data.msg : 'Sorry! Something went wrong. Try again!'});
      });
  }
    render() {
        return (
          <div className="content">
            <Grid fluid>
              <Row>
                <Col md={8}>
                  <Card
                    title="Edit Profile"
                    content={
                      <div>
                        { this.state.error && (
                        <span style={{color: "red", fontSize:"14px"}}>{this.state.error}</span>
                        )}
                        { this.state.message && (
                            <div>
                              <span style={{color: "green", fontSize:"15px"}}>{this.state.message}</span>
                            </div>
                        )}
                      <form>
                        <FormInputs
                          ncols={["col-md-6", "col-md-6"]}
                          properties={[
                            {
                              label: "Username",
                              type: "text",
                              name: "name",
                              bsClass: "form-control",
                              onChange: this.handleChange,
                              placeholder: "Username",
                              defaultValue: this.state.item.name
                            },
                            {
                              label: "Email address",
                              type: "text",
                              name: "email",
                              bsClass: "form-control",
                              onChange: this.handleChange,
                              placeholder: "Email",
                              defaultValue: this.state.item.email
                            }
                          ]}
                        />
                        <FormInputs
                          ncols={["col-md-12"]}
                          properties={[
                            {
                              label: "Password",
                              type:"password",
                              name: "password",
                              bsClass: "form-control",
                              onChange: this.handleChange,
                              placeholder: "Password",
                              defaultValue: this.state.item.password
                            }
                          ]}
                        />
                        <Button bsStyle="info" pullRight fill  onClick={this.save}>
                          Update Profile
                        </Button>
                        <Button bsStyle="info" pullLeft fill  onClick={this.clear}>
                          Clear Watchlist
                        </Button>
                    <div className="clearfix" />
                        <div className="clearfix" />
                      </form>
                      </div>
                    }
                  />
                </Col>
                <Col md={4}>
                  <ProfileCard
                    bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                    avatar={avatar}
                    name={this.state.item.name}
                    userName={this.state.item.email}
                    description={
                      <span>
                        <br />
                        <h4><strong>Hello User</strong></h4>
                        <br />
                      </span>
                    }
                    socials={
                      <div>
                        <Button simple>
                          <i className="fa fa-facebook-square" />
                        </Button>
                        <Button simple>
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button simple>
                          <i className="fa fa-google-plus-square" />
                        </Button>
                      </div>
                    }
                  />
                </Col>
              </Row>
            </Grid>
          </div>
        );
      }
}

export default DataTable;