import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

class DeleteCategory extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.save = this.save.bind(this);
  }
save(){
    axios.delete("http://localhost:4000/api/movies/" + this.props.match.params.id)
    .then(res => {
      console.log(res.data);
      this.props.history.push('/admin/category/movie')
    })
      .catch(error => {
        console.log(error.response.data)
    });
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col>
              <h4>Delete Movie</h4>
              <form >
                <Button bsStyle="info" onClick={this.save}>Delete</Button>
                <div className="clearfix" />
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DeleteCategory;