import React, { Component } from "react";
import { Grid, Row, Col, Button, Table } from "react-bootstrap";
import axios from 'axios';


class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showForm: false
    }
    console.log(this.props)
    this.list = this.list.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);

  }

  add() {
    console.log(this.props);
    this.setState({ showForm: !this.state.showForm });
    this.props.history.push('/admin/category/user/add')
  }
  edit(id) {
    console.log("ssss", id);
    this.props.history.push('/admin/category/user/edit/' + id);
  }

  delete(id) {
    console.log(this.props);
    this.props.history.push('/admin/category/user/delete/' +id)
  }
  list() {
    axios.get("http://localhost:4000/api/users")
      .then(res => {
        const items = res.data;
        this.setState({ items });
        console.log(this.state)
      })
  }

  componentDidMount() {
    this.list();
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6}><h4>Users</h4>
            </Col>
            <Col md={6}>
              {!this.state.showForm ? (
                <Button bsStyle="info" className="pull-right" onClick={this.add} >Add</Button>
              ) : null
              }
            </Col>
            <Col md={12}>

              <Table striped hover>
                <thead>
                  <tr>
                    <td><h5><strong>Name</strong></h5></td>
                    <td><h5><strong>Email</strong></h5></td>
                    <td><h5><strong>Role</strong></h5></td>
                    <td colSpan={2} style={{textAlign:"center"}}><h5><strong>Update</strong></h5></td>

                  </tr>
                </thead>

                <tbody>
                  {this.state.items.map((prop, key) => {
                    return (
                      <tr key={key}>
                        <td>{prop.name}</td>
                        <td>{prop.email}</td>
                        <td>{prop.role}</td>
                        <td style={{textAlign:"center"}}>
                        <a href="javascript:void(0);" onClick={() => this.edit(prop._id)}>Edit</a>
                        </td><td style={{textAlign:"center"}}>
                        <a href="javascript:void(0);" onClick={() => this.delete(prop._id)}>Delete</a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CategoryList;