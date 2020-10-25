import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import axios from 'axios';

class EditCategory extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      item: {
        name: "",
        email: "",
        password: "",
        role: "",
        watchlist: [""],
        tags: ["handwash"]
      }
    }
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get("http://localhost:4000/api/users/search/" + this.props.match.params.id)
      .then(res => {
        const item = res.data;
        this.setState({ item });
        console.log(this.state)
      })
  }

  handleChange(e) {
    console.log("check", e.target.value)
    const data = this.state.item;
    data[e.target.name] = e.target.value
    this.setState({ item: data });
    console.log(this.state.item)
  }

  save() {
    const item = this.state.item;
    console.log(item)
    const updatedItem =  {
      "name": item.name,
      "email": item.email,
      "password": item.password,
      "role": item.role,
      "watchlist": item.watchlist
    }
    axios.put(`http://localhost:4000/api/users/` + this.props.match.params.id, updatedItem)
      .then(res => {
        console.log(res);
        this.props.history.push('/admin/category/user')
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col>
              <h4>Edit  Item</h4>
              <form >
                <FormInputs
                  ncols={["col-md-6", "col-md-6"]}
                  properties={[
                    {
                      label: "User Name",
                      type: "text",
                      name: "name",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter user name",
                      defaultValue: this.state.item.name,
                    },
                    {
                      label: "User Email",
                      type: "text",
                      name: "email",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter user email",
                      defaultValue: this.state.item.email
                    }
                  ]}
                />
                <FormInputs
                  ncols={["col-md-6", "col-md-6"]}
                  properties={[
                    {
                      label: "User Password",
                      type: "text",
                      name: "password",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter user password",
                      defaultValue: this.state.item.password
                    },
                    {
                      label: "User Role",
                      type: "text",
                      name: "role",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter user role",
                      defaultValue: this.state.item.role
                    }
                  ]}
                />
                <FormInputs
                  ncols={["col-md-12"]}
                  properties={[
                    {
                      label: "User Watchlist",
                      type: "text",
                      name: "watchlist",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter user watchlist",
                      defaultValue: this.state.item.watchlist
                    }
                  ]}
                />
                <Button bsStyle="info" onClick={this.save}>Save</Button>
                <div className="clearfix" />
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default EditCategory;