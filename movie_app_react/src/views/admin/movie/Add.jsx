import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import axios from 'axios';

class AddCategory extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      item: {
        movieTitle: "",
        movieGenre: "",
        movieDuration: "",
        movieRating: "",
        movieDescription: "",
        movieImage: "",
        movieTrailerUrl: "",
        tags: ["handwash"]
      }
    }
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(e) {
console.log("check",e.target.value)

const data = this.state.item;
data[e.target.name] = e.target.value
this.setState({ item:data });
console.log(this.state.item)

  }

save(){
const item = this.state.item ;
console.log(item);
    axios.post(`http://localhost:4000/api/movies/add`, item)
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
              <h4>Add New Movie</h4>
              <form >
                <FormInputs
                  ncols={["col-md-6", "col-md-6"]}
                  properties={[
                    {
                      label: "Movie Title",
                      type: "text",
                      name: "movieTitle",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter movie title",
                      defaultValue: "",
                    },
                    {
                      label: "Movie Genre",
                      type: "text",
                      name: "movieGenre",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter movie genre",
                      defaultValue: "",
                    }
                  ]}
                />
                <FormInputs
                  ncols={["col-md-6", "col-md-6"]}
                  properties={[
                    {
                      label: "Movie Duration",
                      type: "text",
                      name: "movieDuration",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter movie duration",
                      defaultValue: "",
                    },
                    {
                      label: "Movie Rating",
                      type: "text",
                      name: "movieRating",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter movie rating",
                      defaultValue: "",
                    }
                  ]}
                />
                <FormInputs
                  ncols={["col-md-6", "col-md-6"]}
                  properties={[
                    {
                      label: "Movie Description",
                      type: "text",
                      name: "movieDescription",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter movie description",
                      defaultValue: "",
                    },
                    {
                      label: "Movie Image",
                      type: "text",
                      name: "movieImage",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter movie image url",
                      defaultValue: "",
                    }
                  ]}
                />
                <FormInputs
                  ncols={["col-md-6"]}
                  properties={[
                    {
                      label: "Movie Trailer",
                      type: "text",
                      name: "movieTrailerUrl",
                      onChange:this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "Enter movie trailer url",
                      defaultValue: "",
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

export default AddCategory;