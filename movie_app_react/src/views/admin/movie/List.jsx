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
    this.props.history.push('/admin/category/movie/add')
  }
  edit(id) {
    console.log("ssss", id);
    this.props.history.push('/admin/category/movie/edit/' + id);
  }

  delete(id) {
    console.log(this.props);
    this.props.history.push('/admin/category/movie/delete/' +id)
  }

  componentDidMount() {
    this.list();
  }

  list() {
    axios.get("http://localhost:4000/api/movies")
      .then(res => {
        const items = res.data;
        this.setState({ items });
        console.log(this.state)
      })
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6}><h4>Items</h4>
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
                    <td>Movie Title</td>
                    <td>Movie Genre</td>
                    <td>Movie Duration</td>
                    <td>Movie Rating</td>
                    <td>Movie Description</td>
                    <td colSpan={2} style={{textAlign:"center"}}>Update</td>

                  </tr>
                </thead>

                <tbody>
                  {this.state.items.map((prop, key) => {
                    return (
                      <tr key={key}>
                        <td>{prop.movieTitle}</td>
                        <td>{prop.movieGenre}</td>
                        <td>{prop.movieDuration}</td>
                        <td>{prop.movieRating}</td>
                        <td>{prop.movieDescription}</td>
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