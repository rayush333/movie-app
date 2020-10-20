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
      "movieTitle": item.movieTitle,
      "movieGenre": item.movieGenre,
      "movieDuration": item.movieDuration,
      "movieRating": item.movieRating,
      "movieDescription": item.movieDescription,
      "movieImage": item.movieImage,
      "movieTrailerUrl": item.movieTrailerUrl
    }
    axios.put(`http://localhost:4000/api/movies/` + this.props.match.params.id, updatedItem)
      .then(res => {
        console.log(res);
        this.props.history.push('/admin/category/movie')
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
                      label: "Movie Title",
                      type: "text",
                      name: "movieTitle",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "title",
                      defaultValue: this.state.item.movieTitle,
                    },
                    {
                      label: "Movie Genre",
                      type: "text",
                      name: "movieGenre",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "genre",
                      defaultValue: this.state.item.movieGenre
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
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "duration",
                      defaultValue: this.state.item.movieDuration
                    },
                    {
                      label: "Movie Rating",
                      type: "text",
                      name: "movieRating",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "rating",
                      defaultValue: this.state.item.movieRating
                    }
                  ]}
                />
                <FormInputs
                  ncols={["col-md-6", "col-md-6"]}
                  properties={[
                    {
                      label: "Movie Image",
                      type: "text",
                      name: "movieImage",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "image",
                      defaultValue: this.state.item.movieDescription
                    },
                    {
                      label: "Movie TrailerUrl",
                      type: "text",
                      name: "movieTrailerUrl",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "trailer",
                      defaultValue: this.state.item.movieImage
                    }
                  ]}
                />
                <FormInputs
                  ncols={["col-md-12"]}
                  properties={[
                    {
                      label: "Movie Description",
                      type: "text",
                      name: "movieDescription",
                      onChange: this.handleChange,
                      bsClass: "form-control ",
                      placeholder: "description",
                      defaultValue: this.state.item.movieTrailerUrl
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